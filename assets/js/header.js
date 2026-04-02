window.renderHeader = function () {
  const C = window.CONFIG;
  if (!C) return;

  const header = document.getElementById("site-header");
  if (!header) return;

  const E = C.etsy || {};
  const A = C.amazon || {};

  header.innerHTML = `
<nav id="nav">
  <div class="nav-inner">

    <a class="nav-logo" href="/">
      <div class="nav-logo-icon"><span>TG</span></div>
      <span class="nav-logo-word">
        <span class="logo-toot">Toot</span><span class="logo-green">Green</span>
      </span>
    </a>

    <ul class="nav-links">
      <li><a href="/" data-nav="/">Home</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/shop.html" data-nav="/shop.html">Shop</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/gift-finder.html" data-nav="/gift-finder.html">Gift Finder</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/custom.html" data-nav="/custom.html">Custom Orders</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/bulk.html" data-nav="/bulk.html">Bulk Orders</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/blog.html" data-nav="/blog.html">Blog</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/faq.html" data-nav="/faq.html">FAQ</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/contact.html" data-nav="/contact.html">Contact</a></li>
      <li class="nav-sep">|</li>
      <li><a href="/delivery.html" data-nav="/delivery.html">Delivery & Returns</a></li>
    </ul>

    <div class="nav-shop-btns" id="navShopBtns"></div>

    <button class="mob-menu" type="button" onclick="document.getElementById('mobNav').classList.toggle('open')">
      ☰
    </button>

  </div>
</nav>

<div class="mob-nav" id="mobNav">
  <a href="/">Home</a>
  <a href="/shop.html">Shop</a>
  <a href="/gift-finder.html">Gift Finder</a>
  <a href="/custom.html">Custom Orders</a>
  <a href="/bulk.html">Bulk Orders</a>
  <a href="/blog.html">Blog</a>
  <a href="/faq.html">FAQ</a>
  <a href="/contact.html">Contact</a>
  <a href="/delivery.html">Delivery & Returns</a>
  ${E.shopUrl ? `<a href="${E.shopUrl}" id="mobEtsyBtn" class="mob-etsy" rel="noopener noreferrer">Visit Etsy Shop</a>` : ""}
</div>
  `;

 const amzBtn = (function() {
  if (!A.enabled || !A.searchUrl) return '';
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#ff9900" d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 01-.76.074c-1.067-.887-1.258-1.298-1.842-2.144-1.76 1.795-3.006 2.333-5.288 2.333-2.7 0-4.8-1.667-4.8-5.002 0-2.604 1.41-4.378 3.42-5.243 1.742-.77 4.174-.905 6.034-1.117v-.417c0-.769.06-1.677-.392-2.339-.392-.593-1.148-.838-1.815-.838-1.232 0-2.33.632-2.6 1.94-.055.291-.269.578-.563.593l-3.155-.34c-.266-.06-.561-.275-.484-.683C5.894 2.71 8.913 2 11.618 2c1.395 0 3.22.371 4.323 1.428C17.24 4.614 17.144 6.185 17.144 7.9v5.069c0 1.524.631 2.195 1.225 3.019.208.292.254.641-.014.858l-1.211 1.949zm2.533 1.84C17.7 21.142 14.96 22 12.557 22c-3.326 0-6.33-1.23-8.597-3.277-.178-.161-.019-.381.196-.256 2.448 1.422 5.471 2.279 8.6 2.279 2.108 0 4.426-.438 6.557-1.343.321-.137.592.21.364.432z"/></svg>';
  if (A.searchUrl === 'xxxxx') {
    return '<span class="amz-wrap"><a class="nav-amz-btn" style="opacity:0.6;pointer-events:none;cursor:default;" title="Coming Soon">' + svg + '</a><span class="amz-coming-banner" style="font-size:0.42rem;top:-4px;right:-4px;">Soon</span></span>';
  }
  return '<a class="nav-amz-btn" href="' + A.searchUrl + '" rel="noopener noreferrer" target="_blank" title="Shop on Amazon">' + svg + '</a>';
})();

const btns = document.getElementById("navShopBtns");
if (btns) {
  btns.innerHTML = `
    ${E.shopUrl ? `<a class="nav-etsy-btn" href="${E.shopUrl}" rel="noopener noreferrer" title="Shop on Etsy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 6.5h-5v2h4l-.5 2h-3.5v2h3l-.5 2H8V8h8.5v.5z"/></svg></a>` : ""}
    ${amzBtn}
  `;
}

 const path = window.location.pathname;
 const currentPath = (path === "/" || path === "/index.html") ? "/" : path;
 const activeLink = header.querySelector('[data-nav="' + currentPath + '"]');
  if (activeLink) {
    activeLink.classList.add("active");
  }
};