(function () {
  document.querySelectorAll('.feature-card').forEach(function (el) {
    var text = el.textContent.replace('✔', '').trim();
    if (!text || text.startsWith('#?')) {
      el.style.display = 'none';
    }
  });

  document.querySelectorAll('.product-bullets li').forEach(function (el) {
    var text = el.textContent.trim();
    if (!text || text.startsWith('#?')) {
      el.style.display = 'none';
    }
  });
})();