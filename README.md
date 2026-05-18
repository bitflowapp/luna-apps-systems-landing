# Luna Systems — Landing

Landing comercial estática para **Luna Systems**. HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin dependencias pesadas. Lista para publicar en GitHub Pages.

## Estructura

```
.
├── index.html        # Estructura semántica de la landing
├── styles.css        # Tema oscuro premium con variables y responsive
├── script.js         # Header scroll, menú móvil y reveal on scroll
├── README.md         # Esta guía
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

## Publicar en GitHub Pages

### Opción 1 — desde la rama principal

1. Crear un repositorio en GitHub (por ejemplo `luna-apps-systems`).
2. Subir el contenido de esta carpeta a la rama `main`.
3. En el repositorio: **Settings → Pages**.
4. En *Source* seleccionar **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/ (root)`.
6. Guardar. En 1–2 minutos la página queda publicada en:
   `https://<tu-usuario>.github.io/<nombre-repo>/`

### Opción 2 — desde una rama de feature

Esta versión vive en la rama `feat/luna-apps-systems-landing`. Para publicarla directamente:

1. Subir la rama al remoto: `git push -u origin feat/luna-apps-systems-landing`
2. En **Settings → Pages**, elegir esa rama como *Source*.

### Opción 3 — dominio de usuario/organización

Si el repositorio se llama `<tu-usuario>.github.io`, la página queda en `https://<tu-usuario>.github.io/` automáticamente.

## Personalización rápida

- **Colores y tipografía:** variables CSS en `:root` dentro de `styles.css`.
- **Marca:** el header y footer usan el monograma textual *LS* y el nombre Luna Systems.
- **Textos:** todo el copy vive en `index.html`.
- **WhatsApp:** los enlaces apuntan a `https://wa.me/542996209136`. Cambiar el número en los botones y el dato de contacto del HTML para actualizar.

## Contacto

- WhatsApp: [2996209136](https://wa.me/542996209136)
- Email: Marcoantoniolunavillegas@gmail.com
- Ubicación: Neuquén, Argentina
