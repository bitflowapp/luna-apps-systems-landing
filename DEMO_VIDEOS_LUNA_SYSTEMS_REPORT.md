# Demo videos Luna Systems report

## Repo detectado

- Repo: `luna-apps-systems-landing`
- Tipo de web: HTML/CSS/JavaScript vanilla, sin framework y sin build.
- Rama de trabajo: `feature/add-demo-videos-section`
- Remote: `https://github.com/bitflowapp/luna-apps-systems-landing.git`
- Deploy conocido: Vercel sobre el repo `bitflowapp/luna-apps-systems-landing`; cada push a `main` dispara deploy automatico.

## Assets integrados

Videos copiados a `assets/videos/`:

| Archivo web | Fuente usada | Tamano | Resolucion | Duracion |
| --- | --- | ---: | --- | ---: |
| `assets/videos/luna-apps-demo.mp4` | `luna_apps_whatsapp_720p.mp4` | 1.45 MB | 1280x720 | 91.83 s |
| `assets/videos/caja-clara-demo.mp4` | `caja_clara_whatsapp_720p.mp4` | 1.00 MB | 1280x720 | 54.83 s |
| `assets/videos/bitflow-demo.mp4` | `bitflow_whatsapp_720p.mp4` | 0.47 MB | 1280x720 | 38.83 s |

Thumbnails copiados a `assets/projects/`:

- `assets/projects/luna-apps-demo.jpg`
- `assets/projects/caja-clara-demo.jpg`
- `assets/projects/bitflow-demo.jpg`

No se copiaron los ZIP, notas, captions, technical review ni videos 16:9 mas pesados porque no hacian falta para la web. No se recomprimieron videos: los tres archivos finales elegidos ya tienen tamano razonable para Git y para carga web.

## Archivos modificados

- `index.html`: nueva seccion `Proyectos reales`, tres cards con posters reales y modal de video.
- `styles.css`: estilos responsive para cards, boton play, modal 16:9, bloqueo de scroll de fondo y proteccion contra overflow horizontal.
- `script.js`: logica de modal, cierre por fondo, boton X y Escape; pausa y descarga del video al cerrar.
- `DEMO_VIDEOS_LUNA_SYSTEMS_REPORT.md`: este reporte.

## Performance y privacidad

- Los videos no se cargan completos al inicio.
- El elemento `<video>` vive en el modal, usa `preload="metadata"` y recibe `src` solo al abrirse.
- No hay `autoplay`.
- Se usan posters JPG en las cards.
- No quedaron rutas locales de Windows en `index.html`, `styles.css` ni `script.js`.
- No se agregaron datos personales nuevos al codigo.

## Comandos ejecutados

- `git branch --show-current`
- `git status --short`
- `git remote -v`
- `git switch -c feature/add-demo-videos-section`
- `ffprobe` sobre los tres videos web.
- `git diff --check`
- Servidor local: `python -m http.server 5173 --bind 127.0.0.1`
- QA con Playwright temporal fuera del repo usando Chrome instalado.

## Resultado de validacion

- `git diff --check`: OK, sin errores de whitespace.
- Servidor local: OK, respuesta HTTP 200 en `http://127.0.0.1:5173/`.
- QA desktop 1440x1000: OK.
- QA mobile 390x844: OK.
- Cards detectadas: 3.
- Titulo detectado: `Proyectos reales`.
- Modal: abre con `Luna Apps & Systems`, carga `assets/videos/luna-apps-demo.mp4`, cierra con Escape.
- Consola: sin errores ni warnings relevantes.
- Overflow horizontal mobile: no detectado.

## Como probar localmente

```bash
python -m http.server 5173 --bind 127.0.0.1
```

Abrir:

```text
http://127.0.0.1:5173/
```

Revisar la seccion `Proyectos reales`, abrir cada demo y cerrar con X, fondo o Escape.

## Como deployar

El flujo conocido es Vercel automatico:

1. Subir la rama y abrir PR, o mergear a `main`.
2. Hacer push a `main`.
3. Vercel publica automaticamente `https://luna-systems.vercel.app/`.

No ejecute deploy manual porque el repo no define un script local de deploy y el flujo documentado es automatico por Vercel.

## Pendientes / advertencias

- No hay pendientes bloqueantes.
- Quedan las imagenes antiguas `assets/projects/caja-clara.jpg` y `assets/projects/bitflow.jpg` porque ya existian y no se borro contenido existente.
