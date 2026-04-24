(function () {
  function hidePlaceholders() {
    document.querySelectorAll('.feature-card').forEach(function (el) {
      var text = el.textContent
        .replace(/[^\w\u0400-\u04FF]/g, '') // убирает всё кроме букв (латиница + кириллица)
        .trim();
      if (!text || text.startsWith('#?')) {
        el.style.display = 'none';
      }
    });

    document.querySelectorAll('.product-bullets li').forEach(function (el) {
      var text = el.textContent
        .replace(/[^\w\u0400-\u04FF]/g, '')
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
