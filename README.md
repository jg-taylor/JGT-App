# JGT-App

Static P35/P47 planning Gantt and UI ownership view for GitHub issue #1.

## Run locally

```bash
npm run dev
```

Then open `http://127.0.0.1:5174`.

If `npm` is not available, run the static server directly:

```bash
python3 -m http.server 5174
```

## Validate data

```bash
npm test
```

Or run the validator directly with Node:

```bash
node scripts/validate-data.js
```

The app has no package dependencies and does not contact external services.
It renders programme timing, PF2.0 gates, UI owner allocation, an unpopulated
UX lane, and editable function-owner data from `src/data.js`.
