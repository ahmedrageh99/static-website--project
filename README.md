# Static Website Project — Phase 2
Professional, responsive, static site with **EmailJS** contact form (no backend).

## How to run locally
1. Open `index.html` in your browser (no build step needed).

## EmailJS setup (required for functional form)
1. Create an account at EmailJS.
2. Add an Email Service (e.g., Gmail or SMTP) — note your **Service ID**.
3. Create a Template with fields: `from_name`, `reply_to`, `subject`, `message` — note your **Template ID**.
4. Go to Account → API Keys and copy your **Public Key**.
5. In `script.js`, replace:
   - `YOUR_PUBLIC_KEY` with your Public Key
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
6. Save and reload. Submit the form to test — you should see a success message and receive the email.

## Deploy to GitHub Pages
1. Create a new repo (e.g., `static-website-project`) and push these files.
2. In GitHub:
   - Settings → Pages → Build and deployment
   - Source: **Deploy from a branch**
   - Branch: `main` (root), Save.
3. Your live link will look like:
   `https://yourname.github.io/static-website-project/`

## Deliverables checklist
- [x] Fully designed, static, responsive site
- [x] Functional EmailJS contact form (validated)
- [x] GitHub repository
- [x] Live deployment link

## Notes
- Replace images or SVGs in `/assets` with your brand images if you prefer.
- Keep colors consistent with brand guidelines.
