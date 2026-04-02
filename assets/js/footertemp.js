window.renderFooter = function () {
  const C = window.CONFIG;
  if (!C) return;

  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const E = C.etsy || {};
  const A = C.amazon || {};
  const F = C.footer || {};
  const year = new Date().getFullYear();

  footer.innerHTML = `
<footer id="footer">
  <div class="wrap">

    <div class="footer-top">

      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon"><span>TG</span></div>
          <span>
            <span class="logo-toot">Toot</span><span class="logo-green">Green</span>
          </span>
        </div>

        <p class="footer-desc">${F.description || ""}</p>

        <a class="footer-etsy-btn" href="${E.shopUrl || "#"}" rel="noopener noreferrer">
          Shop on Etsy
        </a>
        ${A.enabled && A.searchUrl && A.searchUrl !== 'xxxxx' ? '<a class="footer-amz-btn" href="' + A.searchUrl + '" rel="noopener noreferrer" target="_blank">Shop on Amazon</a>' : A.enabled && A.searchUrl ? '<span class="amz-wrap"><a class="footer-amz-btn" style="opacity:0.6;pointer-events:none;cursor:default;">Shop on Amazon</a><span class="amz-coming-banner">Coming Soon</span></span>' : ""}

      <div>
        <div class="footer-col-head">Navigate</div>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop.html">Shop All</a></li>
          <li><a href="/custom.html">Custom Orders</a></li>          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/delivery.html">Delivery & Returns</a></li>
          <li><a href="/privacy.html">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-head">Categories</div>
        <ul class="footer-links">
          <li><a href="/shop.html?cat=Mugs">Mugs</a></li>
          <li><a href="/shop.html?cat=Badges">Badges</a></li>
          <li><a href="/shop.html?cat=Teddies">Teddies</a></li>
          <li><a href="/shop.html?cat=Clothing">Clothing</a></li>
          <li><a href="/shop.html?cat=Posters">Posters 🆕</a></li>
          <li><a href="/shop.html?cat=Cards">Greeting Cards 🆕</a></li>
          <li><a href="/shop.html?cat=WallDeco">Wall Decorations 🆕</a></li>
          <li><a href="/shop.html?cat=Slate">Slate & Boards</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-head">On Etsy</div>
        <ul class="footer-links" id="footerEtsyLinks"></ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="footer-copy">© ${year} TootGreen. All rights reserved.</p>
      <p class="footer-love">${(F.tagline || "").replace("♥", "<span>♥</span>")}</p>
    </div>

  </div>
</footer>
  `;

  const etsyLinks = document.getElementById("footerEtsyLinks");
  if (etsyLinks) {
    etsyLinks.innerHTML = `
      <li><a href="${E.shopUrl || "#"}" rel="noopener noreferrer">Shop on Etsy</a></li>
      ${A.enabled && A.searchUrl ? '<li><a href="' + A.searchUrl + '" rel="noopener noreferrer">Shop on Amazon</a></li>' : ""}
            <li><a href="/delivery.html">Delivery & Returns</a></li>
      <li><a href="${E.messageUrl || E.shopUrl || "#"}" rel="noopener noreferrer">Message Us</a></li>
    `;
  }
};