# TaskFlow Dashboard

A multi-page admin dashboard for a fictional freelance designer, built with React and React Router. Shows project stats, earnings charts, and a filterable project table.

**Live demo:** [https://willvviana.github.io/taskflow-dashboard/](https://willvviana.github.io/taskflow-dashboard/)

## What it does

This is a demo dashboard. There's no backend and no real data — everything runs on a mock data file. The point is the layout, routing, charting, and responsive behavior.

Three pages:

- **Overview** — Stat cards, monthly earnings bar chart, task-breakdown pie chart, recent activity list
- **Projects** — Sortable table (desktop) / card list (mobile) with status filtering
- **Settings** — Profile form with editable fields

## Tech stack

- **React 19** — UI
- **React Router 7** — Client-side routing
- **Recharts** — Bar and pie charts
- **Tailwind CSS 4** — Styling
- **Vite 8** — Build tool

## Why these choices

**Recharts over Chart.js.** Recharts is built for React — it uses components, not imperative canvas calls. The API fits how React works. Chart.js is more general-purpose but fights React's render model.

**HashRouter over BrowserRouter.** GitHub Pages doesn't support client-side route fallbacks. If someone refreshes on `/projects`, GitHub looks for a file at that path and 404s. HashRouter (`/#/projects`) avoids this with zero server config. In a real app with a backend, BrowserRouter would be the right call.

**Tailwind over plain CSS.** For a dashboard with a lot of utility classes and responsive breakpoints, Tailwind's `sm:`, `md:`, `lg:` prefixes cut CSS file size and keep styles close to the markup. For a landing page, plain CSS might be cleaner.

## Run locally

```bash
# Clone
git clone https://github.com/willvviana/taskflow-dashboard.git
cd taskflow-dashboard

# Install
npm install

# Start dev server
npm run dev