// Mobile menu
(function () {
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form: preselect a service when arriving from a "Ask about this" link
  var select = document.getElementById('interest');
  if (select) {
    var wanted = new URLSearchParams(window.location.search).get('service');
    if (wanted) {
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.dataset.slug === wanted) { select.value = o.value; }
      });
    }
  }
})();
