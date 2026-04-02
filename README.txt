# TootGreen — Site Guide

---

## Maintenance Mode

To put the site into maintenance mode, open `config.js` and change `false` to `true`:

    maintenance: {
      enabled: true,
      page: "/maintenance.html",

To take it back off, change it back to `false`.

---

### Viewing the live site while maintenance mode is on

Go to:

    https://www.tootgreen.co.uk/?preview=1

This sets a flag in your browser only — no one else is affected. You can then browse
the site normally on that device and browser.

To turn your bypass off again, go to:

    https://www.tootgreen.co.uk/?preview=0

Your browser will go back to seeing the maintenance page like everyone else.

---

## Adding Amazon URLs

When a product goes live on Amazon, you can link it to the matching Etsy product so
the "Coming Soon" banner disappears and the button becomes a live link.


Step 1 — Open the admin page
-----------------------------
Go to:

    https://www.tootgreen.co.uk/admin/amazon.html

This page is not linked anywhere on the public site — only you can see it.


Step 2 — Find the product
--------------------------
The page loads all your active Etsy listings automatically. Each one has a paste box
on the right hand side.


Step 3 — Get the Amazon URL
-----------------------------
Find the product on amazon.co.uk, open the product page, and copy the URL from the
address bar. It should look like:

    https://www.amazon.co.uk/dp/B0XXXXXXXX

If the URL has extra stuff after the product code, you can trim it — just the /dp/
part is what matters.


Step 4 — Paste it in
---------------------
Paste the URL into the box next to the matching product. The row will turn green
immediately to confirm it's valid.


Step 5 — Save the JSON
-----------------------
Scroll to the bottom of the admin page and click Copy JSON. Then:

  1. Open amazon-urls.json in the root of the repo
  2. Select all the existing content and paste over it
  3. Save the file, commit, and push to GitHub

Vercel will deploy automatically. The "Coming Soon" banner will be gone within a
minute or two.


How it works
------------
- If an Amazon URL is blank      → button shows "Coming Soon" and cannot be clicked
- If a URL contains /dp/         → button goes live and links directly to Amazon
- You only ever need to edit     → amazon-urls.json, nothing else
