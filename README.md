# Punch For Purpose (Static Site)

This repository is now a static HTML/CSS/JS website.

## Run locally

- Open `index.html` directly in your browser, or
- Serve the folder with any static server.

## Structure

- `index.html` and other page files are in the repository root.
- Shared assets are in `assets/`.

## Notes

- No Node.js, Next.js, or build step is required.
- Contact, signup, newsletter, and ticket forms are static placeholders unless you connect a backend service.

## Caching headers

- This repo includes `.htaccess` (Apache) and `_headers` files (Netlify/Cloudflare Pages style) to set long cache lifetimes for static assets.
- If you deploy on GitHub Pages, custom cache headers are not configurable from this repo and platform defaults may still apply.
