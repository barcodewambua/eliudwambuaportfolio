# Portfolio - Eliud Wambua

This is a simple static portfolio scaffold. Open `index.html` in a browser to view.

What to customize:
- Replace the about copy in `index.html` with your biography and education details.
- Add project repos, descriptions, and screenshots in the `Projects` section.
- Add a `assets/resume.pdf` file to enable the Resume download link.
- Update contact email and social links.
 - Replace the about copy in `index.html` with your biography and education details (done).
 - Replace placeholder images in `assets/` with real images. Current placeholders:
	 - `assets/headshot.svg` — swap for your real headshot (recommended ~400x400).
	 - `assets/linkedin-badge.svg` — replace if you prefer a different badge image.
	 - `assets/community-logo-*.svg` — replace with organization logos or screenshots.
	 - `assets/projects/project-*.svg` — replace with project screenshots.
 - Add certificates to `assets/certificates/` to enable downloadable certificate links on `certifications.html`.

Local preview:
- On Windows, you can open `index.html` directly in your browser.
- For a local server (recommended), run a simple static server (Python):

```powershell
# In this folder
python -m http.server 8000; # then open http://localhost:8000
```

Deploy:
- Push to a GitHub repo and use GitHub Pages to publish (Settings → Pages → Branch: main).

Next steps I can help with:
- Convert to a React/Vite site
- Add scripts to build/deploy
- Wire a contact form (Netlify Forms, Formspree, or a backend)
 - Add community/org links and replace placeholders with real links/images.
 - I can add simple lightbox behavior for gallery images if you want clickable enlargements.
