// Mouse reveal background effect
(function () {
  function initMouseReveal() {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    var reveal = document.getElementById('mouse-reveal');
    if (!reveal) {
      reveal = document.createElement('div');
      reveal.id = 'mouse-reveal';
      document.body.insertBefore(reveal, document.body.firstChild);
    }

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var currentRadius = 0;
    var targetRadius = 0;
    var hasPointer = false;
    var rafId = null;

    function setMask() {
      var maskValue =
        'radial-gradient(circle ' + currentRadius + 'px at ' + currentX + 'px ' + currentY + 'px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)';

      reveal.style.webkitMaskImage = maskValue;
      reveal.style.maskImage = maskValue;
    }

    function animate() {
      if (hasPointer) {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
      }

      currentRadius += (targetRadius - currentRadius) * 0.12;
      setMask();
      rafId = window.requestAnimationFrame(animate);
    }

    document.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') {
        return;
      }

      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasPointer) {
        currentX = targetX;
        currentY = targetY;
        hasPointer = true;
      }

      targetRadius = 180;
      reveal.style.opacity = '0.18';
    });

    document.addEventListener('pointerleave', function () {
      targetRadius = 0;
    });

    window.addEventListener('blur', function () {
      targetRadius = 0;
    });

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal.style.transition = 'opacity 0.2s ease';
      document.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch') {
          return;
        }

        var maskValue =
          'radial-gradient(circle 180px at ' + e.clientX + 'px ' + e.clientY + 'px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)';
        reveal.style.webkitMaskImage = maskValue;
        reveal.style.maskImage = maskValue;
        reveal.style.opacity = '0.18';
      });
      document.addEventListener('pointerleave', function () {
        reveal.style.opacity = '0';
      });
      return;
    }

    if (rafId === null) {
      animate();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMouseReveal);
  } else {
    initMouseReveal();
  }
})();
