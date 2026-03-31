(function () {
  function renderSharedLayout() {
    if (typeof window.renderHeader === 'function') {
      window.renderHeader();
    }

    if (typeof window.renderFooter === 'function') {
      window.renderFooter();
    }
  }

  function initFooterSocialLinks() {
    var social = (window.CONFIG && window.CONFIG.social) || {};
    var pairs = [
      [social.instagram, '📸', 'Instagram'],
      [social.facebook, '📘', 'Facebook'],
      [social.tiktok, '🎵', 'TikTok'],
      [social.pinterest, '📌', 'Pinterest']
    ].filter(function (pair) {
      return pair[0];
    });

    if (!pairs.length) {
      return;
    }

    var container = document.querySelector('.footer-top > div');
    if (!container) {
      return;
    }

    if (container.querySelector('.social-links')) {
      return;
    }

    var div = document.createElement('div');
    div.className = 'social-links';
    div.innerHTML = pairs.map(function (pair) {
      return '<a class="social-link" href="' + pair[0] + '" rel="noopener noreferrer" aria-label="' + pair[2] + '">' + pair[1] + '</a>';
    }).join('');

    container.appendChild(div);
  }

  function initCookiePopup() {
    if (localStorage.getItem('tootgreen_cookie_ok')) {
      document.body.classList.remove('cookie-popup-open');
      return;
    }

    var existingPopup = document.querySelector('.cookie-popup');
    if (existingPopup) {
      document.body.classList.add('cookie-popup-open');
      return;
    }

    var popup = document.createElement('div');
    popup.className = 'cookie-popup';
    popup.innerHTML =
      '<div class="cookie-popup-inner">' +
        '<p>We use cookies to improve your experience on this website.</p>' +
        '<button type="button" class="cookie-accept">Accept</button>' +
      '</div>';

    document.body.appendChild(popup);
    document.body.classList.add('cookie-popup-open');

    var button = popup.querySelector('.cookie-accept');
    button.addEventListener('click', function () {
      localStorage.setItem('tootgreen_cookie_ok', 'yes');
      document.body.classList.remove('cookie-popup-open');
      popup.remove();
    });
  }

  function initWhatsAppButton() {
    var existingButtons = document.querySelectorAll('.floating-whatsapp, .whatsapp-float');
    if (existingButtons.length > 1) {
      for (var i = 1; i < existingButtons.length; i += 1) {
        existingButtons[i].remove();
      }
    }

    if (document.querySelector('.floating-whatsapp')) {
      return;
    }

    var social = (window.CONFIG && window.CONFIG.social) || {};
    var rawWhatsapp = social.whatsapp || '';
    if (!rawWhatsapp) {
      return;
    }

    var cleanPhone = String(rawWhatsapp).replace(/[^\d]/g, '');
    if (!cleanPhone) {
      return;
    }

    var link = document.createElement('a');
    link.className = 'floating-whatsapp';
    link.href = 'https://wa.me/' + cleanPhone;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Chat on WhatsApp');
    link.title = 'Chat on WhatsApp';
    link.style.position = 'fixed';
    link.style.right = '20px';
    link.style.left = 'auto';
    link.style.bottom = '20px';
    link.style.top = 'auto';
    link.style.zIndex = '2147483647';
    link.innerHTML =
      '<svg viewBox="0 0 32 32" aria-hidden="true" width="28" height="28">' +
        '<path fill="currentColor" d="M19.11 17.34c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.56-.35zM16.03 3.2c-6.99 0-12.65 5.66-12.65 12.64 0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.82-1.79a12.6 12.6 0 0 0 6 1.53h.01c6.98 0 12.64-5.66 12.64-12.65S23.01 3.2 16.03 3.2zm0 23.2h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-4.05 1.06 1.08-3.95-.25-.4a10.52 10.52 0 0 1-1.61-5.52c0-5.82 4.74-10.56 10.58-10.56 2.82 0 5.47 1.1 7.47 3.09a10.5 10.5 0 0 1 3.1 7.47c0 5.83-4.75 10.57-10.58 10.57z"/>' +
      '</svg>';

    document.body.appendChild(link);
  }

  function initLayout() {
    renderSharedLayout();
    initFooterSocialLinks();
    initCookiePopup();
    initWhatsAppButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
