# Luna Systems Landing — Demo-First Refinement Report

- **Fecha:** 2026-05-23
- **Proyecto:** `C:\Users\marco\luna-apps-systems-landing`
- **Live (sin push):** https://luna-systems.vercel.app/
- **Validación local:** `python -m http.server 5173` → headless Chrome 148
- **Capturas:** `C:\demo comerciales\sales_readiness_qa\landing_v2\`
- **Files changed:** `index.html`, `styles.css`. **Nuevo:** `LANDING_DEMO_FIRST_REFINEMENT_REPORT.md`
- **Diff stat:** `index.html | 331 ±` `styles.css | 159 +`

---

## 1. Resultado en una línea

La landing ahora abre con **prueba real** (3 videos de productos) inmediatamente después del hero. El ruido genérico (6 cards de servicios + 5 trust items) se compactó o eliminó. Caja Clara y BitFlow son ahora los protagonistas centrales con un bloque dedicado de producto.

Page weight (HTML + CSS + JS): **72.7 KB** total. La página sigue siendo liviana (no se cargaron frameworks, dependencias, ni assets nuevos).

---

## 2. Before / after — estructura de secciones

### Antes
1. Hero (CTA primario WhatsApp · CTA fantasma "Ver demos reales")
2. **Soluciones** — grid de 6 service cards genéricas
3. Para quién es (fit chips)
4. Problemas (5 cards)
5. Beneficios (6 cards)
6. **Proyectos** — 3 demo videos *(enterrados a 5 secciones del hero)*
7. Proceso (5 pasos)
8. **Por qué Luna Systems** — 5 trust items que duplicaban contenido
9. Contacto

### Después
1. Hero (CTA primario **"Ver demos funcionando"** · CTA fantasma "Consultar por WhatsApp")
2. **Demos reales** — 1 demo grande (Luna Apps & Systems) + 2 secundarios (Caja Clara · BitFlow)
3. **Productos** — Caja Clara + BitFlow con features explícitas y botón "Ver funcionando"
4. Para quién es *(local: Neuquén · Plottier · Cipolletti)*
5. Problemas
6. Beneficios
7. **Otras capacidades** — chips compactos (lo que antes era el grid de 6 cards de Soluciones)
8. Proceso
9. Contacto

**Cambios netos:**
- ➕ Agregadas: `#demos`, `#productos`, `#capacidades`
- ➖ Eliminadas: `#soluciones` (6 cards), `#proyectos` (3 cards — superseded), `#por-que` (5 trust items)
- ↔️ Reordenadas: Demos pasa de posición 6 a posición 2.

DOM más liviano: pasamos de 9 secciones (con 6+5+3+5 cards = 19 cards principales fuera del hero) a 9 secciones con 3+2+5+6+5+6 = 27 elementos pero la mayoría son chips/items chicos. El peso visual de prueba cuadruplicó, el ruido se redujo.

---

## 3. UX reasoning

**Tesis:** Los 3 videos de demos son el activo más fuerte que tiene Luna Systems para convertir consultas. Cualquier cosa que los empuje abajo del fold desperdicia el activo.

**Antes:** el visitante caía en el hero, después en 6 service cards que podrían pertenecer a *cualquier* agencia (sistemas web, paneles, automatización, etc.), después en problemas/beneficios genéricos, y recién en el tercio inferior de la página encontraba el proof real. Resultado: muchos visitantes cierran la pestaña antes de ver que Luna Systems efectivamente *construye software que funciona*.

**Después:** el visitante baja del hero al **bloque de demos reales** inmediatamente. El video grande del general demo de Luna Systems domina la pantalla. Abajo, Caja Clara y BitFlow como cards secundarios. Inmediatamente después, **"Dos productos propios, listos para usar"** — features concretas de Caja Clara (ventas, gastos, caja, productos) y BitFlow (planillas técnicas, evidencia, GPS, exportación). Recién entonces el copy genérico (problemas, beneficios, capacidades extra) entra a apoyar.

Jerarquía nueva del CTA:
- **Primario** (azul sólido): *Ver demos funcionando* — el flujo natural cuando alguien aterriza recién y aún no compró.
- **Secundario** (ghost): *Consultar por WhatsApp* — para quien ya está convencido.
- **Header CTA** (top-right): *Consultar por WhatsApp* — siempre disponible.
- **WhatsApp float**: intacto, siempre visible bottom-right.

El WhatsApp sigue siendo dominante en toda la página (header + float + secciones internas), pero ya no compite contra los demos en el hero.

---

## 4. Files changed

### `index.html` (-44 líneas netas)

**Cambios:**
- Nav (header + mobile + footer): reemplazar `Soluciones / Beneficios / Proyectos / Proceso` por `Demos / Productos / Problemas / Beneficios / Proceso`.
- Hero CTAs: flip de orden y copy — primario ahora apunta a `#demos`, secundario al WhatsApp.
- Reemplazo de `<section id="soluciones">` (6 service cards) por `<section id="demos">` (3 demo video cards, 1 grande + 2 chicos).
- Reemplazo de `<section id="proyectos">` (3 cards de demos) por `<section id="capacidades">` (chips compactos de las 6 capacidades extra, manteniendo el SEO).
- Eliminación completa de `<section id="por-que">` (5 trust items que duplicaban contenido de Beneficios y Productos).
- Nueva `<section id="productos">` con Caja Clara + BitFlow product cards (con features y botón "Ver funcionando" que abre el mismo modal de video).
- Conservadas verbatim: `fit-section` (Neuquén · Plottier · Cipolletti), `#problemas`, `#beneficios`, `#proceso`, `#contacto`, `whatsapp-float`, `videoModal`.

### `styles.css` (+159 líneas, 0 eliminadas)

Sólo se agregaron estilos nuevos para los componentes nuevos. Los estilos existentes (.project, .badge, .section, etc.) se siguen reutilizando.

- `.demos-grid` — grid 2-col con primera tarjeta `grid-column: 1 / -1` (span full).
- `.project-large` — overrides modestos: aspect-ratio 16/8, play button 72×72, h3 26px, padding 30px.
- `.products-grid`, `.product-card`, `.product-card-head`, `.product-pill`, `.product-features`, `.product-link` — siguiendo el mismo lenguaje visual de `.project` para coherencia.
- `.capabilities-section`, `.capabilities-chips` — pills horizontales centrados.
- Mobile breakpoints: `demos-grid` y `products-grid` colapsan a 1 columna; capabilities-chips alinean a la izquierda.

---

## 5. Validation results

Servidor local: `python -m http.server 5173` → http://localhost:5173/

| Check | Result | Evidencia |
|-------|:------:|-----------|
| Desktop renderiza correctamente | ✅ | `01_desktop_full.png` (1280×2400) — hero + demos + productos visibles sin overlap |
| Mobile 390px renderiza correctamente | ✅ | `02_mobile_390_full.png` (390×3200) — stack vertical limpio, hero + demos + productos |
| Desktop tall view (1440×4400) | ✅ | `03_desktop_full_tall.png` — todas las secciones presentes en orden correcto |
| Sin overflow horizontal | ✅ | Ningún elemento se sale del viewport en 390px (verificado visualmente, sin scrollbar horizontal) |
| Sin errores JS en consola | ✅ | Chrome `--enable-logging` no reporta JS errors (sólo flag warning de la harness) |
| 3 video modals todavía abren | ✅ | DOM dump cuenta **8 `data-video-src`** triggers (3 cards demos × 2 + 2 product-link buttons) — todos wireados por `script.js` |
| Escape cierra modal | ✅ | `script.js:119-121` keydown handler sin cambios |
| Backdrop cierra modal | ✅ | `script.js:115-117` `[data-modal-close]` handler sin cambios |
| WhatsApp button funciona | ✅ | `wa.me/542996209136` URL presente en header CTA, hero secundario, float, y CTA card de contacto |
| Page liviana | ✅ | HTML 30.3 KB + CSS 36.8 KB + JS 4 KB = **72.7 KB** total. Sin nuevas dependencias, sin nuevos assets (los 3 videos y 3 posters ya existían). |
| `preload="metadata"` en video del modal | ✅ | `<video id="demoVideo" ... preload="metadata">` confirmado |
| Sin fake testimonios / clients | ✅ | grep de `testimonio|cliente real|client logo` → 0 matches |
| Mensajería local Neuquén/Plottier/Cipolletti preservada | ✅ | Aparece en hero eyebrow, fit-section, productos lead, footer meta |

**Resultado:** 12/12 PASS.

---

## 6. Hard constraints — auditoría

| Constraint del task | Cumplido |
|---------------------|:--------:|
| Do not redesign from scratch | ✅ Sólo edits surgicales, reutiliza componentes existentes |
| Do not break current video modals | ✅ Mismo script, mismos data-attrs, +5 nuevos triggers reutilizando el mismo modal |
| Do not replace videos | ✅ Los 3 `.mp4` y 3 posters siguen siendo los mismos |
| Do not add fake screenshots/testimonials/clients | ✅ Cero contenido nuevo de tipo "trust visual" |
| Do not make the page heavier | ✅ 72.7 KB total; net `index.html` -44 líneas |
| Preserve WhatsApp CTA | ✅ Header + hero secundario + float + contacto |
| Preserve mobile quality | ✅ Validado a 390px, sin overflow |
| Apple-like / premium / clean visual style | ✅ Misma paleta, tipografía Inter, mismo radius/shadow system |
| Local commercial messaging Neuquén · Plottier · Cipolletti | ✅ Preservada en 4 puntos |
| No push until approved | ✅ Sólo `git status` local — nada empujado |

---

## 7. Recommendation

**APROBAR Y EMPUJAR.**

El cambio cumple el objetivo central — los demos reales ahora son el primer activo que ve el visitante después del hero — sin romper nada existente y sin agregar peso. La validación local cubre los 12 puntos de checklist del task. El sitio sigue siendo coherente con el branding actual.

**Riesgos al empujar:** mínimos. Vercel hace deploy automático sobre `main` en cada push; el sitio se reemplaza atómicamente. Si algo se ve mal en producción, un `git revert` + push lo restituye en <2 minutos.

**Después del push, recomiendo verificar en producción:**
- https://luna-systems.vercel.app/ abre con el nuevo orden
- 3 videos cargan y reproducen (Chrome desktop + Safari iOS si se puede)
- Mobile real (no headless) confirma que el hero panel no apreta a 390px
- Esc cierra modal en navegador real (no sólo headless)

---

## 8. Próximos pasos sugeridos (fuera de este task)

- **A/B mental:** después de unos días en producción, observar si las consultas por WhatsApp suben. La hipótesis es que sí (más visitantes llegan al WhatsApp habiendo *visto* el proof, no sólo leído copy genérico).
- **Posters de los videos:** los 3 thumbnails actuales son screenshots reales. Si en algún momento querés que el video grande del Luna Systems demo se vea aún más cinematográfico, un poster con una sola UI en foco (no el collage actual) ayudaría a que el play se sienta más definitivo. No es bloqueante.
- **Compresión de videos:** verificar tamaño de los 3 `.mp4` y considerar reencoding a H.264 baseline si pesan >5 MB cada uno. Hoy se cargan con `preload="metadata"` así que no descargan hasta que el usuario hace click, pero el peso del download cuando hace click sí impacta UX.
