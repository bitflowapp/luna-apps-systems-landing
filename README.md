# Luna Systems — Landing

Landing comercial estática para **Luna Systems**. HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin dependencias pesadas. Publicada en GitHub Pages con dominio propio.

**URL pública:** [https://lunasystems.com.ar](https://lunasystems.com.ar) · también disponible en `https://www.lunasystems.com.ar`

## Estructura

```
.
├── index.html        # Estructura semántica de la landing
├── styles.css        # Tema oscuro premium con variables y responsive
├── script.js         # Header scroll, menú móvil y reveal on scroll
├── README.md         # Esta guía
├── CNAME             # Dominio personalizado para GitHub Pages (lunasystems.com.ar)
├── .nojekyll         # Evita el procesamiento Jekyll en GitHub Pages
└── assets/
    ├── favicon.svg   # Favicon con monograma LS
    ├── og/           # Imagen social preview
    └── projects/     # Capturas reales de Caja Clara y Bit Flow
```

## Desarrollo local

No requiere instalación. Abrir `index.html` directamente o levantar un servidor local:

```bash
# Python 3
python -m http.server 5173

# Node (npx)
npx serve .
```

Luego abrir `http://localhost:5173`.

## Publicación

La landing se publica con **GitHub Pages** sobre el repo `bitflowapp/luna-apps-systems-landing`, sirviéndose desde el dominio propio **lunasystems.com.ar** (registrado en NIC Argentina).

El archivo `CNAME` en la raíz fija el dominio personalizado. La configuración DNS apunta el ápice a las IPs de GitHub Pages y `www` a `bitflowapp.github.io` (CNAME).

En **Settings → Pages** debe quedar:
- *Source:* rama `main`, carpeta `/ (root)`.
- *Custom domain:* `lunasystems.com.ar`.
- *Enforce HTTPS:* activado una vez emitido el certificado.

## Personalización rápida

- **Colores y tipografía:** variables CSS en `:root` dentro de `styles.css`.
- **Marca:** el header y footer usan el monograma textual *LS* y el nombre Luna Systems.
- **Textos:** todo el copy vive en `index.html`.
- **WhatsApp:** los enlaces apuntan a `https://wa.me/542996209136`. Cambiar el número en los botones y el dato de contacto del HTML para actualizar.

## Contacto

- WhatsApp: [2996209136](https://wa.me/542996209136)
- Email: marcoantoniolunavillegas@gmail.com
- Ubicación: Neuquén, Argentina
