# Personal Website

Portfolio and blog built with Vite + React.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (shreyasnn1.github.io)

1. **Create a repo named exactly `shreyasnn1.github.io`** on GitHub and push this code to it (default branch `main`).

2. **Turn on GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Deploy**
   - Push to `main` (or run the “Deploy to GitHub Pages” workflow from the **Actions** tab).
   - The site will be at **https://shreyasnn1.github.io**

4. **Resume and assets**  
   Put files like `resume.pdf` in `public/`; they’re served from the root (e.g. `/resume.pdf`).

## Resume

Place your `resume.pdf` in the `public/` folder. The "Download Resume" link in the header will then serve it at `/resume.pdf`.

## Blog

Edit `src/data/blogPosts.js` to add or change blog posts.
