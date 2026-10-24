# Farhan Israk Shuvon: Portfolio

A multi-page portfolio built with React, Vite, and React Router.

Pages: Home, Projects (full-stack, frontend works, backend works), Experience, Skills, Contact.

## Folder structure

```
farhan-portfolio/
├── index.html              Page shell, title, fonts
├── package.json            Dependencies and scripts
├── vite.config.js          Vite setup
├── vercel.json             Makes page links work on Vercel
├── public/
│   ├── profile.jpg         Your photo (replace to change it)
│   ├── favicon.svg         Browser tab icon
│   └── cv.pdf              Your CV (replace to update)
└── src/
    ├── main.jsx            App entry point
    ├── App.jsx             Routes (which URL shows which page)
    ├── styles.css          All styling and colors
    ├── components/
    │   ├── Header.jsx      Top navigation
    │   ├── Footer.jsx      Footer links
    │   ├── WorkCard.jsx    Card used for frontend and backend works
    │   └── ScrollToTop.jsx Scrolls to the top on page change
    ├── pages/              One file per page
    └── data/               The content you edit
        ├── profile.js      Name, email, links, bio
        ├── projects.js     Projects, frontend works, backend works
        └── resume.js       Experience, education, skills, achievements
```

## Run it on your computer

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (usually http://localhost:5173).

## Edit or add frontend works

Six frontend works are already filled in. Open `src/data/projects.js` and find `frontendWorks` to change a description or add another. Each item looks like this (add `label: 'View on GitHub'` to change the button text):

```js
{ title: 'Restaurant landing page', description: 'Responsive landing page with a menu and booking form.', tags: ['React', 'Tailwind CSS'], url: 'https://your-live-link.vercel.app' },
```

A card with an empty `url` shows "Link coming soon". Save the file and the page updates.

## Add backend works later

In the same file, add items to the `backendWorks` list (an example is in the comments). While the list is empty, the page shows a "Coming soon" card.

## Your CV

Your CV is at `public/cv.pdf` and the home page has a "Download CV" button for it. To update it, replace that file with a new PDF of the same name.

## Other edits

- **Photo:** replace `public/profile.jpg` with another square photo of the same name.
- **Bio, links, email:** `src/data/profile.js`
- **Experience, education, skills, achievements:** `src/data/resume.js`
- **Colors:** the variables at the top of `src/styles.css` (`--auto` is amber, `--back` is blue).

## Contact form (sends to your Gmail)

The Contact page form uses the free FormSubmit service and sends messages to the email in `src/data/profile.js`.

One-time activation, after the site is live:
1. Open your live Contact page and send yourself a test message.
2. Check your Gmail (and the Spam folder) for an email from FormSubmit asking you to confirm.
3. Click the confirm button. From then on, every message arrives in your inbox.

Until you confirm, messages are held and will not arrive.

## Publish on GitHub and Vercel

1. Create a new empty repository on GitHub (for example `portfolio`). Do not add a README there.
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/FarhanShuvon/portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com, sign in with GitHub, and click **Add New, then Project**.
4. Import the `portfolio` repository. Vercel detects Vite on its own, so leave the settings as they are (build command `npm run build`, output folder `dist`) and click **Deploy**.
5. After a minute you get a live link. Every `git push` to `main` updates the site automatically.

To use a custom name, open the project in Vercel, go to Settings, then Domains, and add one.

### Publishing on GitHub Pages instead

GitHub Pages does not support page links like `/projects` out of the box. If you use it, change `BrowserRouter` to `HashRouter` in `src/main.jsx`, set `base: './'` in `vite.config.js`, and deploy the `dist` folder. Vercel is simpler.

## Before you publish: checklist

- Each frontend work card describes only what you really built.
- You are happy with the 500+ problems line on the Skills page. Vjudge overlaps with Codeforces and CodeChef, so check your real total.
- `public/cv.pdf` is your latest CV.
