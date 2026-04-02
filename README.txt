# TootGreen — Site Guide

Everything you need to manage your website. All changes are made by
editing files and the site updates automatically within ~30 seconds.

================================================================================

  CONTENTS
  --------
  1. Maintenance Mode
  2. Adding Amazon product URLs (individual product links)

================================================================================


1. MAINTENANCE MODE
===================

To put the site into maintenance mode, open config.js and change false to true:

    maintenance: {
      enabled: true,

To take it back off, change it back to false and save.


Viewing the live site while maintenance mode is on
---------------------------------------------------
Go to:

    https://www.tootgreen.co.uk/?preview=1

This sets a flag in your browser only — no one else is affected. You can
browse the site normally on that device and browser.

To turn your bypass off again:

    https://www.tootgreen.co.uk/?preview=0


================================================================================


2. ADDING AMAZON PRODUCT URLS
==============================

When a product goes live on Amazon, you can link it to the matching Etsy
product on the site. The "Coming Soon" banner disappears and the button
becomes a live clickable link to Amazon.

Step 1 — Open the admin page
------------------------------
Go to:

    https://www.tootgreen.co.uk/admin/amazon.html

Enter the password when prompted. This page is not linked anywhere on the
public site — only you can access it.

Step 2 — Find the product and paste the URL
--------------------------------------------
The page loads all your active Etsy listings automatically. For the product
you want to link:

  1. Find it on amazon.co.uk and copy the URL from the address bar
     It should look like: https://www.amazon.co.uk/dp/B0XXXXXXXX

  2. Paste it into the box next to the matching product on the admin page

  3. The row turns green — that confirms the URL is valid

You can add as many products as you like before saving.

Step 3 — Save to site
-----------------------
Click the green "Save to site" button at the bottom of the page.

The page will confirm when it's done. The site updates automatically
within about 30 seconds — no other steps needed.


How it works
------------
- URL is blank              → button shows "Coming Soon", cannot be clicked
- URL contains /dp/         → button goes live and links directly to Amazon
- You never need to edit    → any files manually, the admin page does it all


================================================================================


================================================================================


PASSWORDS & ACCESS
==================

Admin page password:  ask your web developer
GitHub repository:    https://github.com/Tootgreen/tootgreen
Live site:            https://www.tootgreen.co.uk


================================================================================


QUICK REFERENCE
===============

What I want to do                      What to change
--------------------------------------  ----------------------------------------
Put site in maintenance mode            config.js → maintenance.enabled: true
Take site out of maintenance mode       config.js → maintenance.enabled: false
Add an Amazon product link              Visit /admin/amazon.html
