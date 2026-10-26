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
