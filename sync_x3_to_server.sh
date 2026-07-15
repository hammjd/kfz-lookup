#!/bin/zsh
#
# Copy new files from iCloud Drive (X3) to a network file server (X3).
# - Recursive
# - Never overwrites existing files on the destination
# - Fully non-interactive (safe to run from cron/launchd)
# - Idempotent: safe to re-run; already-copied files are skipped
#
# Source files are left untouched in iCloud (copy, not delete).

set -uo pipefail

SRC="/Users/jeffhamm/Library/Mobile Documents/com~apple~CloudDocs/X3"
DST="/Volumes/Jeff/X3"
LOG_DIR="$HOME/Library/Logs"
LOG="$LOG_DIR/x3_sync_$(date +%Y%m%d_%H%M%S).log"

mkdir -p "$LOG_DIR"

log() {
  print -r -- "$1" | tee -a "$LOG"
}

if [[ ! -d "$SRC" ]]; then
  log "ERROR: source not found: $SRC"
  exit 1
fi

if [[ ! -d "$DST" ]]; then
  log "ERROR: destination not found (is the network volume mounted?): $DST"
  exit 1
fi

for bin in brctl rsync find; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    log "ERROR: required command not found: $bin"
    exit 1
  fi
done

log "=== X3 sync started $(date) ==="

# --- Step 1: force-materialize any dataless iCloud placeholder files ---
log "Requesting download of any cloud-only (dataless) files under $SRC ..."
find "$SRC" -type f -print0 | while IFS= read -r -d '' f; do
  brctl download "$f" >/dev/null 2>&1
done

# --- Step 2: wait (bounded) for downloads to finish ---
log "Waiting for iCloud downloads to finish (up to 30 min)..."
MAX_WAIT=1800
elapsed=0
while true; do
  pending=0
  while IFS= read -r -d '' f; do
    if brctl status "$f" 2>/dev/null | grep -Eq "download requested|downloading|not downloaded"; then
      pending=$((pending + 1))
    fi
  done < <(find "$SRC" -type f -print0)

  if [[ "$pending" -eq 0 ]]; then
    log "All files downloaded locally."
    break
  fi
  if [[ "$elapsed" -ge "$MAX_WAIT" ]]; then
    log "WARNING: timed out after ${MAX_WAIT}s with $pending file(s) still downloading. Continuing anyway — re-run this script later to pick up any that were skipped."
    break
  fi
  sleep 5
  elapsed=$((elapsed + 5))
done

# --- Step 3: copy new files only, never overwrite, fully recursive ---
log "Copying new files from $SRC to $DST (existing files on server are never touched)..."
rsync -rlt \
  --ignore-existing \
  --human-readable \
  --itemize-changes \
  "$SRC"/ "$DST"/ 2>&1 | tee -a "$LOG"

rc=${pipestatus[1]}

log "=== X3 sync finished $(date), rsync exit code: $rc ==="
exit "$rc"
