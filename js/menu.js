/* Restaurante Dragón Dorado — filtros y buscador del menú */
(function () {
  var segs = Array.prototype.slice.call(document.querySelectorAll('.seg'));
  var chipGroups = Array.prototype.slice.call(document.querySelectorAll('[data-chips]'));
  var secs = Array.prototype.slice.call(document.querySelectorAll('.msec'));
  var input = document.getElementById('buscar');
  var result = document.getElementById('resultado');
  var empty = document.getElementById('vacio');
  var filtros = document.getElementById('filtros');
  var state = { group: location.hash === '#bebidas' ? 'bebidas' : 'comida', cat: 'all', q: '' };

  function norm(t) { return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }

  function scrollToMenu() {
    var top = filtros.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > top) window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function apply() {
    var q = norm(state.q.trim());
    segs.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.group === state.group ? 'true' : 'false'); });
    chipGroups.forEach(function (g) {
      g.hidden = !!q || g.dataset.chips !== state.group;
      g.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.cat === state.cat ? 'true' : 'false'); });
    });
    var total = 0;
    secs.forEach(function (s) {
      var visible;
      var items = s.querySelectorAll('.item');
      if (q) {
        var n = 0;
        items.forEach(function (it) {
          var hit = norm(it.querySelector('.iname').textContent).indexOf(q) !== -1;
          it.hidden = !hit; if (hit) n++;
        });
        visible = n > 0; total += n;
      } else {
        items.forEach(function (it) { it.hidden = false; });
        visible = s.dataset.group === state.group && (state.cat === 'all' || s.dataset.cat === state.cat);
      }
      s.hidden = !visible;
    });
    result.hidden = !q;
    if (q) result.textContent = total === 1 ? '1 resultado para “' + state.q.trim() + '”' : total + ' resultados para “' + state.q.trim() + '”';
    empty.hidden = !(q && total === 0);
  }

  segs.forEach(function (b) {
    b.addEventListener('click', function () { state.group = b.dataset.group; state.cat = 'all'; apply(); scrollToMenu(); });
  });
  chipGroups.forEach(function (g) {
    g.addEventListener('click', function (e) {
      var c = e.target.closest('.chip'); if (!c) return;
      state.cat = c.dataset.cat; apply(); scrollToMenu();
    });
  });
  input.addEventListener('input', function () { state.q = input.value; apply(); });

  apply();
})();
