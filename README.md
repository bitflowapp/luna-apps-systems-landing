# Luna Systems — Landing

Landing comercial estática para **Luna Systems**. HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin dependencias pesadas. Publicada en Vercel.

**URL pública:** [https://luna-systems.vercel.app](https://luna-systems.vercel.app)

## Estructura

```
.
├── index.html        # Estructura semántica de la landing
├── styles.css        # Tema oscuro premium con variables y responsive
├── script.js         # Header scroll, menú móvil y reveal on scroll
├── README.md         # Esta guía
├── .nojekyll         # Marca histórica para GitHub Pages (Vercel la ignora)
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

La landing se publica con **Vercel** sobre el repo `bitflowapp/luna-apps-systems-landing`. Cada push a `main` dispara un deploy automático.

Configuración en Vercel:
- *Project name:* `luna-systems` (define `luna-systems.vercel.app`).
- *Framework Preset:* `Other`.
- *Build Command:* vacío.
- *Output Directory:* vacío (raíz del repo).
- *Install Command:* vacío.

## Personalización rápida

- **Colores y tipografía:** variables CSS en `:root` dentro de `styles.css`.
- **Marca:** el header y footer usan el monograma textual *LS* y el nombre Luna Systems.
- **Textos:** todo el copy vive en `index.html`.
- **WhatsApp:** los enlaces apuntan a `https://wa.me/542996209136`. Cambiar el número en los botones y el dato de contacto del HTML para actualizar.

## Contacto

- WhatsApp: [2996209136](https://wa.me/542996209136)
- Email: marcoantoniolunavillegas@gmail.com
- Ubicación: Neuquén, Argentina
