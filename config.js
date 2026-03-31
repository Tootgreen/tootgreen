/* ═══════════════════════════════════════════════════════════════
   TOOTGREEN — SITE CONFIG
   Edit this file to update content across the whole website.
   Save and push to GitHub — changes go live automatically.
═══════════════════════════════════════════════════════════════ */

window.CONFIG = {

  /* ─────────────────────────────────────────
     ANALYTICS
     ─────────────────────────────────────────
     HOW TO ACTIVATE:
     1. Client sets up Google Analytics 4 at analytics.google.com
     2. They send you the Measurement ID (looks like G-XXXXXXXXXX)
     3. Paste it below — tracking activates automatically
  ───────────────────────────────────────── */
  maintenance: {
  enabled: false,
  page: "/maintenance.html",
},analytics: {
    gaId: null,   // e.g. "G-XXXXXXXXXX"
  },

  /* ─────────────────────────────────────────
     BUSINESS BASICS
  ───────────────────────────────────────── */
  business: {
    name:        "TootGreen",
    tagline:     "Gifts that say what you're actually thinking.",
    description: "Personalised mugs, posters, greeting cards, wall art, clothing and more — all made to order. No boring gifts here.",
    founded:     2018,
    location:    "UK",
  },

  /* ─────────────────────────────────────────
     ETSY INTEGRATION
  ───────────────────────────────────────── */
  etsy: {
    apiKey:     null,
    shopName:   "TootGreen",
    shopUrl:    "https://www.etsy.com/uk/shop/TootGreen",
    messageUrl: "https://www.etsy.com/uk/conversations/new?with_id=172527804",
    reviewsUrl: "https://www.etsy.com/uk/shop/TootGreen#reviews",
    shopUrl2:   null,
    starSeller: false,
  },

  /* ─────────────────────────────────────────
     AMAZON INTEGRATION
  ───────────────────────────────────────── */
  amazon: {
    apiKey:    null,
    secretKey: null,
    shopName:  null,
    searchUrl: "https://www.amazon.co.uk/s?k=tootgreen+personalised+gifts",
    enabled:   true,
  },

  /* ─────────────────────────────────────────
     EXTRA SHOPS
  ───────────────────────────────────────── */
  shops: {
    ebay:    null,
    shopify: null,
    website: null,
  },

  /* ─────────────────────────────────────────
     CONTACT
  ───────────────────────────────────────── */
  contact: {
    phone:        null,
    responseTime: "We aim to reply within 24 hours, Monday–Friday",
  },
 /* ─────────────────────────────────────────
     WEB3FORMS
  ───────────────────────────────────────── */
  web3forms: {
    accessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  },

  /* ─────────────────────────────────────────
     SOCIAL MEDIA
  ───────────────────────────────────────── */
  social: {
    instagram: null,   // e.g. "https://www.instagram.com/tootgreen"
    facebook:  null,   // e.g. "https://www.facebook.com/tootgreen"
    tiktok:    null,   // e.g. "https://www.tiktok.com/@tootgreen"
    pinterest: null,   // e.g. "https://www.pinterest.co.uk/tootgreen"
    whatsapp:  "447590218524",   // ← UPDATE: replace with real number
  },

  /* ─────────────────────────────────────────
     TRUST BAR
  ───────────────────────────────────────── */
  trustBar: [
    { icon: "✏️", text: "Everything personalised" },
    { icon: "📦", text: "Dispatched in 1–3 days" },
    { icon: "💬", text: "Custom orders welcome" },
        { icon: "🇬🇧", text: "UK made, ships worldwide" },
  ],

  /* ─────────────────────────────────────────
     REVIEWS
  ───────────────────────────────────────── */
  reviews: [
    { text: "Absolutely love it! Exactly what I wanted and arrived really quickly. Perfect gift for my friend's birthday — will definitely order again.", author: "Sarah M.", product: "Everyone knows.. fabulous mug" },
    { text: "The quality is brilliant for the price. My mum cried laughing when she opened it. Delivery was super fast too. 100% recommend!", author: "Dave T.", product: "Custom mug" },
    { text: "Ordered a personalised chocolate bar — so funny, great quality and the seller was incredibly helpful when I asked about customisation.", author: "Jo W.", product: "Custom emergency chocolate bar" },
  ],

  /* ─────────────────────────────────────────
     MANUAL PRODUCTS
     ─────────────────────────────────────────
     FIELDS:
     id:       unique number (just increment)
     name:     product name
     cat:      Mugs / Badges / Clothing / Posters / Cards /
               WallDeco / Slate / Teddies / Cushions / Other
     occ:      array of occasions — any combination of:
               "Birthday" / "Anniversary" / "Wedding" /
               "NewBaby" / "Christmas" / "ThankYou" /
               "LeavingDo" / "JustBecause"
     price:    number only, no £ sign
     img:      "/images/filename.jpg"
     url:      full Etsy listing URL
     amz:      Amazon search URL (optional)
     badge:    "Best Seller" / "New" / "Popular" / "Custom"
               (optional)
  ───────────────────────────────────────── */
  products: [
    { id:1,  name:"Everyone knows.. fabulous mug",     cat:"Mugs",     occ:["Birthday","JustBecause","LeavingDo"],          price:16.34, img:"/images/sillymug.jpg",            url:"https://www.etsy.com/uk/listing/987913594",  badge:"Best Seller", amz:"https://www.amazon.co.uk/s?k=personalised+funny+mug" },
    { id:2,  name:"Big Spoon, Little Spoon mugs",      cat:"Mugs",     occ:["Anniversary","Wedding","JustBecause"],         price:23.35, img:"/images/mug-bigspoon.jpg",        url:"https://www.etsy.com/uk/listing/977488165",  badge:"Popular" },
    { id:3,  name:"Custom emergency chocolate bar",    cat:"Other",    occ:["Birthday","ThankYou","JustBecause"],           price:6.30,  img:"/images/gift-chocbar.jpg",        url:"https://www.etsy.com/uk/listing/1017865243", badge:"Custom",      amz:"https://www.amazon.co.uk/s?k=custom+emergency+chocolate+bar" },
    { id:4,  name:"Feeling kinda IDGAF today mug",     cat:"Mugs",     occ:["Birthday","JustBecause","LeavingDo"],          price:16.34, img:"/images/mug-idgaf.jpg",           url:"https://www.etsy.com/uk/listing/1086229762",                      amz:"https://www.amazon.co.uk/s?k=funny+idgaf+mug" },
    { id:5,  name:"Custom mug — your design",          cat:"Mugs",     occ:["Birthday","Anniversary","Christmas","LeavingDo","JustBecause"], price:14.34, img:"/images/mug-custom.jpg", url:"https://www.etsy.com/uk/listing/1315891578", badge:"Custom", amz:"https://www.amazon.co.uk/s?k=personalised+custom+mug" },
    { id:6,  name:"Baby on board pin badge",           cat:"Badges",   occ:["NewBaby","JustBecause"],                       price:3.90,  img:"/images/badge-babyonboard.jpg",   url:"https://www.etsy.com/uk/listing/1161280119",                      amz:"https://www.amazon.co.uk/s?k=baby+on+board+badge" },
    { id:7,  name:"Nan's Kitchen personalised board",  cat:"Slate",    occ:["Birthday","Christmas","ThankYou","JustBecause"],price:21.34, img:"/images/slate-nan.jpg",           url:"https://www.etsy.com/uk/listing/867513435",  badge:"Popular",     amz:"https://www.amazon.co.uk/s?k=personalised+chopping+board" },
    { id:8,  name:"Man Behind the Bump t-shirt",       cat:"Clothing", occ:["NewBaby","JustBecause"],                       price:20.34, img:"/images/clothing-bump.jpg",       url:"https://www.etsy.com/uk/listing/963534218",                       amz:"https://www.amazon.co.uk/s?k=man+behind+the+bump+tshirt" },
    { id:9,  name:"Awesome Friend mug",                cat:"Mugs",     occ:["Birthday","JustBecause","ThankYou"],           price:14.34, img:"/images/mug-friend.jpg",          url:"https://www.etsy.com/uk/listing/978883151",                       amz:"https://www.amazon.co.uk/s?k=awesome+friend+mug" },
    { id:10, name:"Love you more.. mugs set",          cat:"Mugs",     occ:["Anniversary","Wedding","JustBecause"],         price:21.80, img:"/images/mug-loveyoumore.jpg",     url:"https://www.etsy.com/uk/listing/963528966",                       amz:"https://www.amazon.co.uk/s?k=love+you+more+mug+set" },
    { id:11, name:"Kids personalised reward chart",    cat:"Other",    occ:["Birthday","Christmas","JustBecause"],          price:11.79, img:"/images/gift-rewardchart.jpg",    url:"https://www.etsy.com/uk/listing/1091506492",                      amz:"https://www.amazon.co.uk/s?k=personalised+reward+chart" },
    { id:12, name:"Personalised Safari linen flag",    cat:"Other",    occ:["Birthday","NewBaby","JustBecause"],            price:15.34, img:"/images/gift-safariflag.jpg",     url:"https://www.etsy.com/uk/listing/949668787",                       amz:"https://www.amazon.co.uk/s?k=safari+personalised+flag" },
    { id:13, name:"Magnetic Attraction mug set",       cat:"Mugs",     occ:["Anniversary","Wedding","JustBecause"],         price:23.35, img:"/images/mug-magnetic.jpg",        url:"https://www.etsy.com/uk/listing/977486513",                       amz:"https://www.amazon.co.uk/s?k=magnetic+attraction+mug" },
    { id:14, name:"OAP discount please badge",         cat:"Badges",   occ:["Birthday","JustBecause"],                      price:3.90,  img:"/images/badge-oap.jpg",           url:"https://www.etsy.com/uk/listing/1161259605",                      amz:"https://www.amazon.co.uk/s?k=oap+discount+badge" },
    { id:15, name:"Thank you Teacher chocolate bar",   cat:"Other",    occ:["ThankYou","JustBecause"],                      price:3.79,  img:"/images/gift-teacherchoc.jpg",    url:"https://www.etsy.com/uk/listing/1017860769", badge:"Popular",     amz:"https://www.amazon.co.uk/s?k=thank+you+teacher+chocolate+bar" },
    { id:16, name:"Will you Marry my Mummy baby vest", cat:"Clothing", occ:["NewBaby","Wedding"],                           price:19.34, img:"/images/clothing-babyvest.jpg",   url:"https://www.etsy.com/uk/listing/1177349067",                      amz:"https://www.amazon.co.uk/s?k=personalised+baby+vest" },
    { id:17, name:"Personalised Birthday Poster",      cat:"Posters",  occ:["Birthday"],                                    price:12.99, img:"/images/poster-birthday.jpg",     url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+birthday+poster" },
    { id:18, name:"Custom Alphabet Art Print",         cat:"Posters",  occ:["Birthday","NewBaby","Christmas"],              price:14.99, img:"/images/poster-alphabet.jpg",     url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+alphabet+art+print" },
    { id:19, name:"Funny Quote Typography Poster",     cat:"Posters",  occ:["Birthday","JustBecause","LeavingDo"],          price:9.99,  img:"/images/poster-quote.jpg",        url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=funny+quote+typography+print" },
    { id:20, name:"Personalised Birthday Card",        cat:"Cards",    occ:["Birthday"],                                    price:3.99,  img:"/images/card-birthday.jpg",       url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+birthday+card" },
    { id:21, name:"Rude Funny Greeting Card",          cat:"Cards",    occ:["Birthday","JustBecause","LeavingDo"],          price:3.99,  img:"/images/card-funny.jpg",          url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=funny+rude+greeting+card" },
    { id:22, name:"New Baby Congratulations Card",     cat:"Cards",    occ:["NewBaby"],                                     price:3.99,  img:"/images/card-newbaby.jpg",        url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=new+baby+congratulations+card" },
    { id:23, name:"Personalised Family Name Sign",     cat:"WallDeco", occ:["Wedding","Anniversary","Christmas","NewBaby"], price:18.99, img:"/images/walldeco-namesign.jpg",   url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+family+name+sign" },
    { id:24, name:"Funny Bathroom Wall Print",         cat:"WallDeco", occ:["Birthday","JustBecause","LeavingDo"],          price:11.99, img:"/images/walldeco-bathroom.jpg",   url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=funny+bathroom+wall+print" },
    { id:25, name:"Custom Kids Room Wall Art",         cat:"WallDeco", occ:["Birthday","NewBaby","Christmas"],              price:15.99, img:"/images/walldeco-kidsroom.jpg",   url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=custom+kids+room+wall+art" },
    { id:26, name:"Personalised Hoodie",               cat:"Clothing", occ:["Birthday","Christmas","LeavingDo"],            price:34.99, img:"/images/clothing-hoodie.jpg",     url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+hoodie" },
    { id:27, name:"Custom Slogan T-Shirt",             cat:"Clothing", occ:["Birthday","JustBecause","LeavingDo"],          price:22.99, img:"/images/clothing-tshirt.jpg",     url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=custom+slogan+tshirt" },
    { id:28, name:"Personalised Sweatshirt",           cat:"Clothing", occ:["Birthday","Christmas","LeavingDo"],            price:29.99, img:"/images/clothing-sweatshirt.jpg", url:"https://www.etsy.com/uk/shop/TootGreen",     badge:"New",         amz:"https://www.amazon.co.uk/s?k=personalised+sweatshirt" },
  ],


  /* ─────────────────────────────────────────
     CUSTOM ORDER GALLERY
     ─────────────────────────────────────────
     Photos shown on the Custom Orders page.
     TO ADD: drop image into /images/custom/
     then add an entry here.
     cat must match a product category.
  ───────────────────────────────────────── */
  customGallery: [
    { img:"/images/custom/custom-mug-1.jpg",   name:"Personalised mug",        cat:"Mugs" },
    { img:"/images/custom/custom-mug-2.jpg",   name:"Funny office mug",        cat:"Mugs" },
    { img:"/images/custom/custom-badge-1.jpg", name:"Custom event badge",       cat:"Badges" },
    { img:"/images/custom/custom-clothing-1.jpg", name:"Printed hoodie",        cat:"Clothing" },
    { img:"/images/custom/custom-choc-1.jpg",  name:"Custom chocolate bar",     cat:"Other" },
    { img:"/images/custom/custom-slate-1.jpg", name:"Personalised slate board", cat:"Slate" },
    { img:"/images/custom/custom-card-1.jpg",  name:"Custom greeting card",     cat:"Cards" },
    { img:"/images/custom/custom-teddy-1.jpg", name:"Personalised teddy",       cat:"Teddies" },
    { img:"/images/custom/custom-poster-1.jpg",name:"Custom poster",            cat:"Posters" },
  ],

  /* ─────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────── */
  footer: {
    description: "Personalised, funny, and sometimes a little rude — gifts for people who actually know you. Based in the UK, shipping everywhere.",
    copyright:   "© 2025 TootGreen. All rights reserved.",
    tagline:     "Made with ♥ and a questionable sense of humour.",
  },

};
