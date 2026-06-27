# Personal Researcher Homepage

A bright, retro-pixel personal homepage for an AI researcher.
Single static site — no build step, no framework.

```
index.html   ← structure & content (edit the [bracketed] placeholders)
style.css    ← all styling (colors live in :root at the top)
script.js    ← footer year + active-nav highlight
```

## Customize

1. Open [index.html](index.html) and replace every `[...]` placeholder
   (name, university, research area, projects, publications, links).
2. Drop your CV in the repo root as `cv.pdf` (the "Download CV" buttons point there).
3. Want different colors? Edit the `:root` variables at the top of
   [style.css](style.css) — `--bg`, `--bar`, `--red`, etc.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy with GitHub Pages

This is the `rpdahxn/rpdahxn` profile repo, so note:
**`README.md` is what shows on your GitHub profile — `index.html` is not.**
To serve the homepage:

1. Push these files to the repo.
2. **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   branch `main`, folder `/ (root)`.
3. Your site goes live at `https://rpdahxn.github.io/rpdahxn/`.

> Tip: for a cleaner URL (`https://rpdahxn.github.io/`), create a separate
> repo named **`rpdahxn.github.io`** and put these files there instead.

---

Built with too much yellow & a daily dose of research.
