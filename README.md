# Portfolio — Badr Dakir

Personal portfolio built with React + Vite. English by default, switchable to French and Dutch, with a light/dark theme toggle.

## Stack

- React 18 + Vite (JavaScript)
- Plain CSS with design tokens (light/dark themes via CSS variables)
- Leaflet + OpenStreetMap for the training-location map
- No backend — static site, ready for Vercel/Netlify

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Build for production / preview the build:

```bash
npm run build
npm run preview
```

## Things to personalize

- [src/data/projects.js](src/data/projects.js) — `demoUrl`, `githubUrl`, and `image` for each project (drop screenshots in `public/images/` and point `image` at e.g. `/images/geo-map.png`).
- [src/data/profile.js](src/data/profile.js) — `githubUrl` and `linkedinUrl`.
- [src/components/LocationMap.jsx](src/components/LocationMap.jsx) — `CF2M_POSITION` holds an approximate coordinate for Saint-Gilles, Brussels; replace it with CF2M's exact coordinates if you have them.
- Translations live in [src/i18n/locales/](src/i18n/locales/) (`en.js`, `fr.js`, `nl.js`) if you want to tweak wording — the Dutch text was machine-translated, so a native check is worth it before publishing.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Vercel (free)

1. Push the project to GitHub (above).
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **Add New… → Project**, then import your repository.
4. Vercel auto-detects Vite — keep the defaults (Build command `vite build`, Output directory `dist`).
5. Click **Deploy**. You'll get a live URL (e.g. `your-project.vercel.app`) in about a minute.
6. Every push to `main` redeploys automatically.

### Deploy on Netlify instead

1. Push the project to GitHub.
2. On [netlify.com](https://netlify.com), **Add new site → Import an existing project**, pick your repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Deploy.
