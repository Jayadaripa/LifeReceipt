# LifeReceipt — Data-driven React + Tailwind

LifeReceipt turns three personal-data datasets into a visual life receipt.

## Source datasets used

1. Spotify history — 149,860 listening events
2. Augmented India transactions — 10,267 transactions
3. Daily Household Transactions — 2,461 records

The supplied files were inspected and converted into a compact **sanitized aggregate dataset** at `src/data/lifeData.json`.

Sensitive transaction fields such as card numbers, names, street addresses, DOBs and precise coordinates are deliberately not included in the frontend data.

## Pages

- `/` — Landing
- `/dashboard` — overview + quick insights
- `/receipt` — printable/downloadable receipt
- `/timeline` — combined timeline with filters
- `/insights` — trends + life balance
- `/explorer` — searchable dataset aggregates

## Run locally

Node 22.11.0 is supported by this pinned Vite 6 setup.

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually:

```text
http://localhost:5173/
```

Build:

```bash
npm run build
```

## Folder structure

```text
src/
├── components/
│   ├── ChartCard.jsx
│   ├── InsightCard.jsx
│   ├── Logo.jsx
│   ├── MomentCard.jsx
│   ├── MobileNav.jsx
│   ├── PageShell.jsx
│   ├── Receipt.jsx
│   ├── SectionTitle.jsx
│   ├── Sidebar.jsx
│   ├── StatCard.jsx
│   └── Topbar.jsx
├── data/
│   └── lifeData.json
├── pages/
│   ├── DataExplorer.jsx
│   ├── Dashboard.jsx
│   ├── Insights.jsx
│   ├── Landing.jsx
│   ├── ReceiptPage.jsx
│   └── Timeline.jsx
├── utils/
│   ├── calculations.js
│   └── formatters.js
├── App.jsx
├── index.css
└── main.jsx
```

## Important hackathon note

This is a frontend-only project. There is no backend or database.

For the final submission, deploy the Vite build to Vercel/Netlify and submit the live URL + GitHub repository.

## Next improvements

- Add a proper year selector that recalculates every card/chart.
- Add richer event drill-down modals.
- Add CSV import in the browser if judges should be able to bring their own dataset.
- Add an animated receipt generation transition.
