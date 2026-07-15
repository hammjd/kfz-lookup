(function () {
  "use strict";

  var MAX_PREFIX_LENGTH = 3;

  var form = document.getElementById("lookup-form");
  var input = document.getElementById("prefix-input");
  var clearBtn = document.getElementById("clear-btn");
  var results = document.getElementById("results");
  var sourceNote = document.getElementById("source-note");

  var TYPE_LABELS = {
    "kreisfreie Stadt": "Independent city (kreisfreie Stadt)",
    "Landkreis": "District (Landkreis)",
    "Städteregion": "City region (Städteregion)",
    "Regionalverband": "Regional association (Regionalverband)",
    "Stadtstaat": "City-state (Stadtstaat)",
    "Sonderzeichen": "Special / reserved sign",
    "historical": "Historical — no longer issued",
  };

  function setSourceNote() {
    if (typeof PLATE_DATA_SOURCE !== "undefined" && typeof PLATE_DATA_REVIEWED !== "undefined") {
      sourceNote.textContent =
        "Data source: " + PLATE_DATA_SOURCE + " Last reviewed: " + PLATE_DATA_REVIEWED + ".";
    }
  }

  /**
   * Clean raw user input: uppercase, treat hyphens as separators, strip
   * anything that isn't a letter (incl. umlauts), digit, or space.
   */
  function normalize(raw) {
    var s = raw.toUpperCase();
    s = s.replace(/-/g, " ");
    s = s.replace(/[^A-ZÄÖÜ0-9\s]/g, "");
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }

  /**
   * Best-effort extraction of the registration prefix from free-form input.
   * German plates are written as "PREFIX LETTERS NUMBER", e.g. "B AB 1234"
   * or "WOB CD 123". When the input has a clear separator, the token before
   * it is treated as the prefix. When it doesn't (e.g. "WOB1234" typed with
   * no space), the longest known prefix (up to 3 letters) at the start of
   * the input is used instead. This is a heuristic: a plate typed without
   * separators is genuinely ambiguous (e.g. "MABC1234" could plausibly
   * start with "M" or "MA"), so the result should be treated as a
   * best guess, not a guaranteed parse.
   */
  function extractPrefixGuess(raw) {
    var cleaned = normalize(raw);
    if (!cleaned) return null;

    var tokens = cleaned.split(" ");
    var firstToken = tokens[0].replace(/[0-9]/g, "");

    if (tokens.length > 1 && firstToken && PLATE_PREFIXES[firstToken]) {
      return firstToken;
    }

    var leadingLetters = cleaned.replace(/\s/g, "").match(/^[A-ZÄÖÜ]+/);
    leadingLetters = leadingLetters ? leadingLetters[0] : "";

    for (var len = Math.min(MAX_PREFIX_LENGTH, leadingLetters.length); len >= 1; len--) {
      var candidate = leadingLetters.slice(0, len);
      if (PLATE_PREFIXES[candidate]) {
        return candidate;
      }
    }

    // Nothing matched a known prefix; return the best display guess anyway
    // so the "not found" message can show what was searched for.
    if (firstToken) return firstToken.slice(0, MAX_PREFIX_LENGTH);
    return leadingLetters.slice(0, MAX_PREFIX_LENGTH) || cleaned.slice(0, MAX_PREFIX_LENGTH);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildResultCard(prefix, entry) {
    var isHistorical = entry.status === "historical";
    var typeLabel = TYPE_LABELS[entry.type] || entry.type;

    var badges = "";
    if (isHistorical) {
      badges += '<span class="badge badge-historical">No longer issued</span>';
    }
    if (entry.uncertain) {
      badges += '<span class="badge badge-uncertain">Needs review</span>';
    }

    var note = "";
    if (entry.note) {
      note = '<p class="result-note">' + escapeHtml(entry.note) + "</p>";
    }

    return (
      '<article class="result-card' + (isHistorical ? " is-historical" : "") + '">' +
      '<span class="result-prefix">' + escapeHtml(prefix) + "</span>" + badges +
      "<h2>" + escapeHtml(entry.place) + "</h2>" +
      '<p class="result-meta">' + escapeHtml(entry.state) + "</p>" +
      '<p class="result-meta">' + escapeHtml(typeLabel) + "</p>" +
      note +
      "</article>"
    );
  }

  function renderPlaceholder() {
    results.innerHTML =
      '<p id="results-placeholder" class="placeholder">Enter a registration prefix above and press Search.</p>';
  }

  function renderNotFound(guess, rawInput) {
    var shown = guess || rawInput.trim();
    results.innerHTML =
      '<div class="not-found" role="alert">' +
      "<h2>Prefix not found</h2>" +
      "<p>“" + escapeHtml(shown) + "” doesn’t match a known German registration prefix in this dataset.</p>" +
      "<p>Double-check the spelling, or it may be a prefix that isn’t covered yet.</p>" +
      "</div>";
  }

  function renderResults(prefix, entries, rawInput) {
    var html = "";
    if (prefix !== rawInput.trim().toUpperCase()) {
      html +=
        '<p class="matched-as">Matched as <strong>' + escapeHtml(prefix) + "</strong></p>";
    }
    for (var i = 0; i < entries.length; i++) {
      html += buildResultCard(prefix, entries[i]);
    }
    results.innerHTML = html;
  }

  function doSearch() {
    var raw = input.value;
    if (!raw || !raw.trim()) {
      renderPlaceholder();
      return;
    }

    var guess = extractPrefixGuess(raw);
    var entries = guess ? PLATE_PREFIXES[guess] : null;

    if (entries && entries.length) {
      renderResults(guess, entries, raw);
    } else {
      renderNotFound(guess, raw);
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    doSearch();
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    renderPlaceholder();
    input.focus();
  });

  input.addEventListener("input", function () {
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var upper = input.value.toUpperCase();
    if (upper !== input.value) {
      input.value = upper;
      if (start !== null && end !== null) {
        input.setSelectionRange(start, end);
      }
    }
  });

  // Belt-and-braces: explicitly handle Enter in addition to native form
  // submission, since some virtual keyboards / input methods send "Enter"
  // as a keydown without triggering an implicit form submit.
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      doSearch();
    }
  });

  setSourceNote();
  input.focus();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").catch(function () {
        // Offline support is a progressive enhancement; ignore failures
        // (e.g. when the app is opened via file:// during local testing).
      });
    });
  }
})();
