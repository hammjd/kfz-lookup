# German License Plate Lookup

A small, static web app that looks up the city, district, or authority
associated with a German vehicle registration (Kfz-Kennzeichen) prefix —
for example `B` → Berlin, `M` → Munich (München), `HH` → Hamburg, `F` →
Frankfurt am Main, `WOB` → Wolfsburg.

It's plain HTML, CSS, and JavaScript: no framework, no build step, no
backend, no database, and no external API calls. Everything, including the
prefix data, is loaded from local files and runs entirely in the browser.
Nothing you type is sent anywhere.

## How it works

Type a prefix (`B`), or a fuller plate-like string (`B AB 1234`, `M-XY
123`, `WOB CD 12`), and press **Search** (or Enter). The app uppercases
the input, strips punctuation, and tries to isolate the registration
prefix — see "Limitations" below for exactly how, and where that can go
wrong. It then looks the prefix up in `data/prefixes.js` and shows every
matching entry (some prefixes are shared by more than one district, or are
reserved for a special/government purpose).

## Project structure

```
index.html              Page markup
styles.css               Styles (mobile-first, light/dark via prefers-color-scheme)
app.js                    Search logic and rendering
data/prefixes.js          Prefix dataset (the thing to edit if data is wrong/missing)
manifest.webmanifest      PWA manifest
service-worker.js         Offline caching for installed/PWA use
favicon.svg               Generated icon (no external assets)
README.md                 This file
```

## Testing it locally

Because the app fetches `data/prefixes.js` and registers a service worker,
opening `index.html` directly via a `file://` URL will mostly work (the
core lookup does), but the service worker won't register under `file://`.
To test it the way it'll actually run in production, serve the folder over
HTTP. From this directory, run one of:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080/` in a browser. There is no build step —
edits to any file take effect on the next page reload. If you're iterating
on `service-worker.js` itself, keep your browser's DevTools open with
"update on reload" / cache disabled, since service workers cache
aggressively by design (see the note under "Updating the dataset" below).

## Creating a GitHub repository for it

```bash
cd file.move   # or wherever you put these files
git init
git add index.html styles.css app.js data/prefixes.js manifest.webmanifest service-worker.js favicon.svg README.md
git commit -m "Initial version of German License Plate Lookup"
gh repo create YOUR-REPO-NAME --public --source=. --remote=origin
git push -u origin main
```

(`gh` is the GitHub CLI. If you don't have it, create the repository on
github.com instead, then `git remote add origin <url>` and `git push -u
origin main`.)

## Enabling GitHub Pages

1. On GitHub, open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a
   branch**.
3. Choose the `main` branch and the `/ (root)` folder, then save.
4. GitHub will publish the site at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   within a minute or two.

All paths in this project are relative (`data/prefixes.js`, `styles.css`,
etc. — never `/data/prefixes.js`), so the app works whether it's deployed
at the root of a Pages site or in a repository subdirectory. No
configuration changes are needed either way.

## Publishing it beneath hammnet.me

If `hammnet.me` is itself a GitHub Pages site (e.g. served from a
`username.github.io` repo) and you want this tool reachable at a path
under it, such as `https://hammnet.me/plates/`, put this project in a
**separate repository** and add a `CNAME`/subpath setup on the *parent*
site that links to it, or — more simply — add this project as a
subdirectory of the `hammnet.me` site's own repository (e.g. a `plates/`
folder) and commit it there instead of its own repo. Since every path in
this app is relative, moving it into a subfolder of an existing Pages
repository requires no code changes: just copy these files into that
subfolder and commit.

If `hammnet.me` is hosted elsewhere (not GitHub Pages) and you want a
subdomain or subpath there instead, that depends on your DNS/hosting setup
for that domain and is outside what this project needs to know about —
the built app itself has no hard-coded domain assumptions.

## Updating the prefix dataset

All prefix data lives in [`data/prefixes.js`](data/prefixes.js) as a plain
JavaScript object literal, `PLATE_PREFIXES`. Each key is a prefix
(uppercase letters, 1–3 characters); each value is an **array** of one or
more entries (an array even when there's only one, since some prefixes
have more than one meaning):

```js
"WOB": [
  {
    "place": "Wolfsburg",
    "state": "Lower Saxony",
    "type": "kreisfreie Stadt",
    "status": "current"
  }
]
```

Fields:

- `place` — city/district/authority name.
- `state` — German federal state, or `"Germany (federal)"` for
  nationwide/reserved signs.
- `type` — one of `kreisfreie Stadt` (independent city), `Landkreis`
  (district), `Städteregion` / `Regionalverband` (city-region),
  `Stadtstaat` (city-state), `Sonderzeichen` (special/reserved), or
  `historical`.
- `status` — `"current"` (currently issuable) or `"historical"` (no
  longer issued).
- `note` (optional) — free-text clarification, e.g. what a reserved sign
  is used for, or what current prefix superseded a historical one.
- `uncertain` (optional, `true`) — set on entries that couldn't be fully
  verified against the source and should be double-checked before being
  trusted.

To add or correct an entry, edit the object directly with any text
editor. Keep prefix keys uppercase and keep the array wrapper even for a
single entry. Since this file is loaded straight into the browser with no
build step to catch mistakes, validate your edit before committing — the
easiest way is to open the file in Node and check it parses:

```bash
node --check data/prefixes.js
```

**A note on caching:** the service worker caches `data/prefixes.js` (and
the other core files) for offline use. After editing the dataset, bump the
`CACHE_NAME` version string near the top of
[`service-worker.js`](service-worker.js) (e.g. `plate-lookup-v1` →
`plate-lookup-v2`) so browsers that already installed the app pick up the
change promptly, instead of continuing to serve the old cached copy.

## Changing the source-review date

`data/prefixes.js` records when the dataset was last checked against its
sources, near the top of the file (in the header comment) and again at the
bottom, in the `PLATE_DATA_REVIEWED` constant:

```js
const PLATE_DATA_REVIEWED = "2026-07-15";
```

Update this string (and the header comment, for consistency) whenever you
re-review the data against the source. It's shown to users in the app's
footer alongside the source citation.

## Data sources

- **Current (issuable) prefixes**: Wikipedia, [*Liste der
  Kfz-Kennzeichen in
  Deutschland*](https://de.wikipedia.org/wiki/Liste_der_Kfz-Kennzeichen_in_Deutschland)
  (as of its "Stand 1. Dezember 2023" revision), which lists every
  currently-issuable distinguishing sign, including ones reissued since
  the 2012 *Kennzeichenliberalisierung* that allowed districts to revive
  historical Altkreis-era signs.
- **Historical-only prefixes** (signs that are no longer issued and
  aren't already covered by a current entry): Wikipedia, [*Liste der
  deutschen Kfz-Kennzeichen, die nicht mehr ausgegeben
  werden*](https://de.wikipedia.org/wiki/Liste_der_deutschen_Kfz-Kennzeichen,_die_nicht_mehr_ausgegeben_werden).

Both lists were parsed programmatically (not retyped by hand) to reduce
transcription errors, cross-checked against each other so a prefix that's
current in one list is never also listed as historical, and spot-checked
against well-known prefixes (Berlin, Munich, Hamburg, Frankfurt,
Wolfsburg, Cologne, Stuttgart) before publishing. A handful of
institutional/reserved signs (federal and state government vehicles,
diplomatic corps, NATO headquarters, Bundeswehr, etc.) were hand-cleaned
for readability after the automated parse. One entry, `DB` (the historical
sign for Deutsche Bundesbahn, the former West German state railway), is
marked `uncertain: true` because the source doesn't record a federal state
for it (it's an institutional sign, not a geographic one) — treat it, and
any other entry you spot with `uncertain: true`, as needing a manual
double-check rather than a settled fact.

This is a **reasonably complete, not exhaustive** dataset (around 790
prefix entries). If a prefix you're looking for is missing, it may be a
narrow special-purpose sign not covered by either source list; corrections
and additions are welcome via the editing process above.

## Limitations in interpreting full license plate numbers

This tool identifies the **registration prefix**, not the full plate. That
distinction matters because German plates don't have a fixed-width
prefix — a full plate is `PREFIX LETTERS NUMBER` (e.g. `WOB CD 1234`), and
without a space, hyphen, or other separator between the prefix and the
letters that follow it, the boundary between them is genuinely ambiguous
from the text alone. For example, `MABC1234` typed with no separator could
plausibly start with prefix `M` or (if it existed) a longer prefix — the
app can't know which was intended without a separator.

To handle this, the app uses a two-step heuristic:

1. **If your input has a space or hyphen**, the app trusts the token
   before the first one as the prefix (this covers every example in this
   README, since real plates are normally written with a separator there).
2. **If there's no separator at all**, the app falls back to matching the
   *longest* known prefix (up to 3 letters) at the very start of what you
   typed.

When the app's best guess differs from your raw input, it shows "Matched
as: X" above the results so you can tell what was actually searched for
and correct it if it guessed wrong. This is a best-effort heuristic, not a
guaranteed parser — when in doubt, type the prefix by itself, or include
the separator your plate actually has.

The app also doesn't validate or interpret the letters/numbers that follow
the prefix (the vehicle's individual registration number) — it only
identifies the prefix.

## Disclaimer

This is an unofficial reference tool built from public Wikipedia data. It
is not affiliated with, endorsed by, or sourced from any German
government body, and it doesn't reproduce any official seals or
government branding. Registration assignments can change, and some
prefixes have special cases (shared use, reserved/government use,
reissued historical signs) — see the in-app disclaimer and the notes on
individual entries.
