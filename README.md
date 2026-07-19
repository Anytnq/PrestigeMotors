# Prestige Dealership Website

Statische Multi-Page-Website für das Prestige-Dealership-Konzept. Die Seite ist für GitHub Pages vorbereitet und benötigt kein Backend.

## Technik

- Vite 7 für den statischen Multi-Page-Build
- Tailwind CSS 4 als Utility-Framework
- Vanilla JavaScript für Animationen, Navigation und Web-Audio-Soundeffekte
- Echte Unterseiten unter `concept/`, `experience/`, `operations/` und `approval/`

## Lokal starten

```bash
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
npm run preview
```

Die fertige Website liegt danach in `dist/`.

## GitHub Pages

Der Workflow in `../.github/workflows/deploy.yml` baut `website/` und veröffentlicht `website/dist`. In den Repository-Einstellungen muss unter **Pages → Build and deployment** als Quelle **GitHub Actions** gewählt sein.

`base: "./"` in `vite.config.js` sorgt dafür, dass Assets und Unterseiten sowohl auf einer Project Page als auch unter einer eigenen Domain funktionieren.
