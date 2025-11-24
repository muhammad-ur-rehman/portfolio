# Portfolio Site

Polished single-page portfolio highlighting Muhammad Ur Rehman’s engineering leadership, backend expertise, and collaboration-readiness.

## Structure

- `index.html` – entry point built on Bootstrap/AOS with hero, resume, services, portfolio tabs, and contact footer.
- `css/style.css` – primary theme (Bootstrap + custom rules near bottom). Additional helpers live in `css/portfolio.css`.
- `js/main.js` – template interactions (hero slider, counters, animations); `portfolio.js` powers the tabbed portfolio and modals.
- `images/`, `fonts/`, `css/*.css`, `js/*.js` – vendor assets kept under original directories for CDN-free hosting.

## Local Development

```bash
cd /path/to/portfolio
npx serve .   # or python -m http.server 8080
```

Open `http://localhost:8080` to preview.

## Production Checklist

1. **Optimize assets**
   - Compress hero/background images (WebP preferred).
   - Remove any unused images from `images/` to trim payload.
2. **Minify CSS/JS (optional)**
   - `npx clean-css-cli css/style.css -o css/style.min.css`
   - `npx terser js/main.js -o js/main.min.js --compress --mangle`
   - Update `index.html` references if you generate minified variants.
3. **Cache headers**
   - When deploying (Netlify, Vercel, S3/CloudFront), enable long-lived caching for `/css`, `/js`, `/images`.
4. **HTML validation**
   - Run `npx htmlhint index.html` to ensure markup health before publishing.
5. **Deployment**
   - **Static hosting**: drag-and-drop folder to Netlify or Vercel.
   - **GitHub Pages**: push to `main`, enable Pages, ensure `CNAME` remains for custom domain.

## Maintenance Tips

- Keep Calendly/LinkedIn/contact details synced between hero buttons, contact cards, and footer.
- Update experience blocks in `#experience-section` in newest-to-oldest order (left-to-right per row).
- Custom hover effects live at the bottom of `css/style.css`; reuse the `.schedule-call-btn` class for any new CTAs.

