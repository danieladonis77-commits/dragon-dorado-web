# Cómo publicar el sitio de Restaurante Dragón Dorado

La carpeta **dragon-dorado-web** contiene el sitio completo, listo para subir:

- 4 páginas: `index.html` (Inicio), `quienes-somos.html`, `menu.html` y `contacto.html`
- `css/`, `js/` e `img/`: estilos, funciones y fotos
- `sitemap.xml`, `robots.txt` y `_redirects`: para Google y para que los enlaces viejos sigan funcionando

Para verlo en tu computadora, abre `index.html` con doble clic.

---

## Paso 1 — Tener un enlace (5 minutos, gratis)

1. Entra a **https://app.netlify.com/drop**.
2. Arrastra la carpeta **dragon-dorado-web** completa a la zona indicada.
3. En segundos tendrás un enlace como `nombre-al-azar.netlify.app`.
4. Crea una cuenta gratuita (o inicia sesión) para "reclamar" el sitio. Sin cuenta, el enlace queda protegido con contraseña temporal.
5. En **Project configuration → Change project name** puedes cambiarlo a algo como `dragondorado.netlify.app`.

Para actualizar el sitio más adelante: arrastra la carpeta actualizada en **Deploys** dentro del panel de Netlify.

> Opción recomendada a largo plazo: guardar la carpeta en GitHub y conectarla a Netlify. Así, cada cambio se publica solo y Claude puede hacer las actualizaciones directamente.

## Paso 2 — Usar el dominio restaurantedragondorado.com.sv

El dominio hoy apunta al sitio que hizo Publicar. Para usarlo con el sitio nuevo:

1. Averigua **quién administra el dominio y su DNS** (probablemente Publicar, o el registro .SV si el restaurante lo maneja directamente) y consigue acceso o pídeles el cambio.
2. En Netlify ve a **Domain management → Add a domain** y escribe `www.restaurantedragondorado.com.sv`.
3. Netlify te indicará los registros DNS a crear (normalmente un **CNAME** de `www` hacia tu dirección `.netlify.app` y un registro para el dominio sin `www`). Quien administre el DNS debe crearlos.
4. Netlify activa el candado de seguridad (HTTPS) automáticamente y gratis.
5. Cuando el sitio nuevo ya cargue en el dominio, puedes cancelar el plan del sitio anterior, **pero no el dominio**.

El cambio de DNS puede tardar desde unos minutos hasta 48 horas en verse en todas partes.

## Paso 3 — Que la gente lo encuentre en Google

El sitio ya está preparado para Google: cada página tiene título y descripción, la ficha del restaurante (dirección, horario, teléfono, ubicación) va incluida en un formato que Google entiende, y las direcciones viejas (`/quienes-somos`, `/menú`, `/contacto`) redirigen a las nuevas.

1. **Google Search Console** (https://search.google.com/search-console): agrega `restaurantedragondorado.com.sv`, verifícalo con el registro DNS que te pida y envía el mapa del sitio: `sitemap.xml`.
2. **Perfil de Empresa en Google** (la ficha que aparece en Maps con las 4.5 estrellas): revisa que el sitio web registrado sea `https://www.restaurantedragondorado.com.sv` y que el horario coincida.
3. **Facebook**: pon el enlace del sitio en la información de la página.

Como el dominio es el mismo de antes, Google ya lo conoce: irá mostrando las páginas nuevas en los días o semanas siguientes.

---

## Antes de publicar, revisa

- **Nombres de los platillos con foto** en Inicio y Quiénes somos: se dedujeron de las fotos; confírmalos.
- **Fotos**: las actuales se tomaron del sitio anterior a 800 px. Para mayor nitidez, reemplázalas por las originales con el **mismo nombre de archivo** dentro de `img/`.

## Dónde se cambian las cosas

| Qué | Dónde |
|---|---|
| Precios y platillos | `menu.html` (cada platillo es una línea `<li class="item">`) |
| Horario | Las 4 páginas (tarjetas y pie de página) y `js/main.js` (líneas `ABRE` y `CIERRA`) |
| Calificación de Google | `index.html`, `menu.html` y `contacto.html` (buscar "4.5" y "2,868") |
| Teléfonos, correo, dirección | Las 4 páginas |
| Fotos | Carpeta `img/` (mismo nombre de archivo) |

Si prefieres no tocar el código, envía los cambios a Claude y te devolverá la carpeta actualizada.
