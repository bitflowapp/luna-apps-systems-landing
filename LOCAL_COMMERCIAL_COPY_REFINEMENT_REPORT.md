# Local Commercial Copy Refinement Report

Fecha: 2026-05-22

## Objetivo

Mejorar el mensaje comercial de Luna Systems para Neuquen, Plottier y Cipolletti, manteniendo la estetica premium actual, las demos y los modales existentes.

## Textos cambiados

- Hero:
  - Nuevo foco local: "Neuquen · Plottier · Cipolletti".
  - Headline: "Software real para ordenar tu negocio y tu trabajo tecnico."
  - Subtitulo orientado a ventas, caja, productos, planillas, evidencias y procesos.
  - CTAs: "Consultar por WhatsApp" y "Ver demos reales".
- Navegacion:
  - Se agrego "Inicio".
  - Se mantuvieron labels en castellano: Soluciones, Beneficios, Proyectos, Proceso, Contacto.
- Soluciones:
  - Copy mas directo sobre ventas, caja, digitalizacion, reportes, procesos y trabajo de campo.
  - "Apps para trabajo diario" se cambio a "Aplicaciones para trabajo diario".
- Bloque "Para quien es":
  - Se agrego contexto local para Neuquen, Plottier y Cipolletti.
  - Se reforzaron casos de planillas, caja, evidencia y reportes.
- Nuevo bloque:
  - Titulo: "Problemas que podemos ordenar".
  - Cards: ventas y caja desordenadas, planillas dificiles, procesos manuales, relevamientos sin evidencia y reportes lentos.
- Proyectos:
  - Caja Clara: "Ventas, gastos, caja y productos en un solo lugar para comercios locales."
  - Caja Clara: beneficios sobre caja diaria, ventas rapidas, productos, movimientos y desorden administrativo.
  - BitFlow: "Planillas tecnicas con evidencia de campo para tecnicos, relevamientos y empresas."
  - BitFlow: beneficios sobre datos tecnicos, evidencia, planillas y reportes.
  - CTAs de demos: "Ver demo real".
- Confianza y contacto:
  - CTA: "Necesito una herramienta a medida".
  - CTA final: "Quiero ordenar mi negocio".
  - "Email" visible se cambio por "Correo".
  - Ubicacion: "Neuquen, Plottier y Cipolletti · Trabajo remoto".
- WhatsApp:
  - Se agrego boton flotante elegante: "Hablemos por WhatsApp".
  - Se uso verde WhatsApp solo en ese boton.
  - Los enlaces abren con mensajes prellenados coherentes con cada CTA.

## Archivos tocados

- `index.html`
- `styles.css`
- `LOCAL_COMMERCIAL_COPY_REFINEMENT_REPORT.md`

No se tocaron videos ni assets multimedia.

## Validaciones realizadas

Servidor local:

- `python -m http.server 4173`
- URL local validada: `http://localhost:4173/`

Validacion automatizada con Playwright temporal fuera del repo:

- Desktop 1440x1000: OK.
- Mobile 390x844: OK.
- Sin overflow horizontal en desktop: OK.
- Sin overflow horizontal en mobile: OK.
- Menu mobile abre: OK.
- Menu mobile cierra al navegar: OK.
- Modal Luna Apps & Systems carga video: OK.
- Modal Caja Clara carga video: OK.
- Modal BitFlow carga video: OK.
- Escape cierra los modales: OK.
- Boton flotante de WhatsApp abre URL de WhatsApp con texto prellenado: OK.
- Consola sin errores: OK.

Peso observado:

- HTML + CSS + JS: 74,081 bytes.
- Assets sin videos: 666,348 bytes.
- Videos existentes: 2,363,654 bytes.
- Carga inicial medida por navegador local: ~39 KB de recursos transferidos antes de lazy media.

## Capturas

- `.tmp_shots/local_commercial_desktop.png`
- `.tmp_shots/local_commercial_mobile.png`

## Recomendacion sobre push

Commit local recomendado si el diff final es aprobado. No hacer push sin aprobacion explicita.

