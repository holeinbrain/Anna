(function () {
  function hidePlaceholders() {
    document.querySelectorAll('.feature-card').forEach(function (el) {
      var text = el.textContent
        .replace('✔', '')
        .replace(/\u00a0/g, '') // убирает &nbsp;
        .trim();
      if (!text || text.startsWith('#?')) {
        el.style.display = 'none';
      }
    });

    document.querySelectorAll('.product-bullets li').forEach(function (el) {
      var text = el.textContent
        .replace(/\u00a0/g, '')
        .trim();
      if (!text || text.startsWith('#?')) {
        el.style.display = 'none';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePlaceholders);
  } else {
    hidePlaceholders();
  }
})();
