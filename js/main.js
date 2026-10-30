/* Restaurante Dragón Dorado — funciones comunes */
(function () {
  // Horario: todos los días de 11:00 a. m. a 9:00 p. m. (hora de El Salvador, UTC-6)
  var ABRE = 11, CIERRA = 21;

  // Menú de navegación en celular
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('navegacion');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
    });
  }

  // Hora actual en El Salvador
  var sv = new Date(Date.now() - 6 * 3600 * 1000);
  var dia = sv.getUTCDay();
  var hora = sv.getUTCHours() + sv.getUTCMinutes() / 60;
  var abierto = hora >= ABRE && hora < CIERRA;

  var largo = abierto
    ? 'Abierto ahora · cerramos a las 9:00 p. m.'
    : (hora < ABRE ? 'Cerrado ahora · abrimos hoy a las 11:00 a. m.' : 'Cerrado ahora · abrimos mañana a las 11:00 a. m.');
  var corto = abierto ? 'Abierto ahora' : 'Cerrado ahora';

  document.querySelectorAll('[data-status]').forEach(function (el) {
    el.classList.add(abierto ? 'is-open' : 'is-closed');
    var txt = el.querySelector('.status-text');
    if (txt) txt.textContent = el.getAttribute('data-status') === 'short' ? corto : largo;
    el.hidden = false;
  });

  // Resaltar el día de hoy en las listas de horario
  document.querySelectorAll('.hours li[data-day]').forEach(function (li) {
    if (Number(li.getAttribute('data-day')) === dia) {
      li.classList.add('today');
      var n = li.querySelector('span');
      if (n) n.textContent += ' (hoy)';
    }
  });

  // Año en el pie de página
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
