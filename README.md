# charismastarr.com — GitHub Pages Site

## Files
```
charismastarr/
├── index.html        ← Homepage
├── about.html        ← About page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── nav.js        ← Mobile menu
└── images/           ← Add your photos here
```

---

## Step 1 — Add Your Photos

Before or after deploying, add your images to the `images/` folder.

In `index.html`, find this comment and replace the placeholder div:
```html
<!-- Replace this placeholder with your actual photo:
     <img src="images/charisma-hero.jpg" alt="Charisma Starr" />
-->
```

Do the same in `about.html`.

You can also add your actual logo image by replacing the SVG icon placeholder in both nav bars with:
```html
<img src="images/logo.png" alt="Charisma Starr" />
```

---

## Step 2 — Set Up the Contact Form (Free)

1. Go to https://formspree.io and create a free account
2. Create a new form — it will give you an ID like `xabc1234`
3. In `index.html`, find this line and replace `YOUR_FORM_ID`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Free tier = 50 submissions/month. More than enough to start.

---

## Step 3 — Publish to GitHub Pages

1. Go to https://github.com and sign in (or create a free account)
2. Click **New repository**
3. Name it exactly: `charismastarr.github.io`  
   *(or any name — but this one auto-publishes at that URL)*
4. Set it to **Public**, click **Create repository**
5. Drag and drop ALL these files into the GitHub web interface
6. Click **Commit changes**
7. Go to **Settings → Pages → Source** and select `main` branch
8. Your site will be live at `https://charismastarr.github.io` within 1–2 minutes

---

## Step 4 — Connect Your Custom Domain

1. In GitHub → Settings → Pages → Custom domain, type: `charismastarr.com`
2. Log into your domain registrar (wherever you bought charismastarr.com)
3. Add these DNS records:

**A Records** (point to GitHub):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record**:
```
www → charismastarr.github.io
```

4. Wait up to 24 hours for DNS to propagate
5. Check "Enforce HTTPS" in GitHub Pages settings once it's active

---

## Making Changes Later

To update any text or add pages:
- Go to your GitHub repository
- Click the file you want to edit
- Click the pencil ✏️ icon
- Make your changes, click **Commit changes**
- The site updates automatically within ~30 seconds

Or paste the file to Claude and ask for changes — I'll give you the updated version.

---

## Cost Summary

| Item | Cost |
|------|------|
| GitHub Pages hosting | Free |
| Formspree contact form | Free (50/mo) |
| Custom domain (you already own it) | ~$12/year |
| **Total** | **~$12/year** vs $600/year on Wix |
