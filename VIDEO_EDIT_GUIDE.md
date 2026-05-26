# Guía de edición de demos — Luna Systems

Guía concreta para producir versiones comerciales premium de cada demo. Si vas a re-grabar o re-editar, seguí estos cortes, textos y tiempos. Si solo querés re-comprimir lo que ya hay, usá los comandos FFmpeg del final.

## Estado actual de los videos (en repo)

| Archivo | Duración | Resolución | Peso |
| --- | ---: | --- | ---: |
| `assets/videos/luna-apps-demo.mp4` | 0:54 | 1280×720 H.264 | 1.2 MB |
| `assets/videos/caja-clara-demo.mp4` | 0:25 | 1280×720 H.264 | 433 KB |
| `assets/videos/bitflow-demo.mp4` | 0:30 | 1280×720 H.264 | 717 KB |

Los tres tienen `moov` al inicio (faststart aplicado, listos para streaming web). Bitrate ya muy bajo (~130–187 kbps); re-encodes más agresivos rompen calidad sin ganar peso.

## Estilo común para los tres

- Tipografía: Inter / SF Pro / Helvetica. Peso 600–700. Color #FFFFFF sobre velo oscuro o #0A0C12 sobre fondo claro.
- Velo de texto: rectángulo negro 70% opacidad, blur 12px detrás del texto si el fondo es ruidoso.
- Transiciones: corte directo o crossfade 200 ms. Nada de wipes ni flashes.
- Zoom: opcional, sutil (1.0 → 1.04 en 6 s) solo cuando el texto chico necesita leerse.
- Audio: sin música o música ambient muy bajo (-22 LUFS). El video tiene que entenderse en mute.
- Subtítulos: 1 línea, máx. 6 palabras, posición inferior, fondo negro semi-transparente.
- Cierre: 1.5 s con logo "Luna Systems" centrado sobre fondo #0A0C12.

## Caja Clara — guion (objetivo: 0:25)

| Tiempo | Visual | Texto en pantalla |
| --- | --- | --- |
| 0:00 – 0:03 | Pantalla principal de Caja Clara | **Controlá tu comercio sin planillas eternas.** |
| 0:03 – 0:10 | Flujo de venta + apertura de caja | Ventas, gastos y caja diaria en un solo lugar. |
| 0:10 – 0:18 | Vista de productos / stock + reporte | Reportes claros para decidir mejor. |
| 0:18 – 0:22 | Exportación a planilla / PDF | Exportá lo del día en un click. |
| 0:22 – 0:25 | Logo + tag | **Caja Clara — software simple para comercios reales.** |

Notas: el video actual ya cubre estos puntos en 25 s. Si querés re-grabar, mantené el ritmo pero asegurate que cada pantalla se sostenga 3–4 segundos para que se lea.

## BitFlow — guion (objetivo: 0:30)

| Tiempo | Visual | Texto en pantalla |
| --- | --- | --- |
| 0:00 – 0:03 | Planilla de relevamiento abierta | **Relevamientos técnicos sin papel desordenado.** |
| 0:03 – 0:12 | Carga de evidencia (fotos, GPS) en campo | Planillas, evidencia y ubicación en campo. |
| 0:12 – 0:22 | Sincronización + vista de informe | Trabaja offline. Sincroniza después. |
| 0:22 – 0:27 | Exportación de informe (PDF/CSV) | Exportá información lista para presentar. |
| 0:27 – 0:30 | Logo + tag | **BitFlow — trabajo técnico más ordenado.** |

## Luna Systems — demo general (objetivo: 0:40, hoy 0:54)

El video general dura 54 s, fuera del ideal 20–45 s. Recortar:

- Mantener intro fuerte (0:00 – 0:05).
- Mostrar Caja Clara (0:05 – 0:18, máx 13 s).
- Mostrar BitFlow (0:18 – 0:30, máx 12 s).
- Mostrar a medida / Estela (0:30 – 0:37).
- Cierre con logo (0:37 – 0:40).

| Tiempo | Visual | Texto |
| --- | --- | --- |
| 0:00 – 0:05 | Logo + pantallas en mosaico | **Software real. No maquetas.** |
| 0:05 – 0:18 | Caja Clara: venta + cierre de caja | Caja Clara · Comercios |
| 0:18 – 0:30 | BitFlow: planilla + evidencia en campo | BitFlow · Trabajo técnico |
| 0:30 – 0:37 | Captura de panel a medida / asistente Estela | Sistemas a medida cuando hace falta |
| 0:37 – 0:40 | Logo + WhatsApp | **luna-systems.vercel.app** |

Si no querés re-grabar, basta con cortar el original a 40 s (ver comando abajo).

## Comandos FFmpeg listos para usar (PowerShell o bash)

### 1. Recortar el demo general a 0:40 (sin re-encode, lossless)

```powershell
ffmpeg -ss 00:00:00 -to 00:00:40 -i "assets\videos\luna-apps-demo.mp4" `
  -c copy -movflags +faststart `
  "assets\videos\luna-apps-demo-40s.mp4"
```

### 2. Generar poster real del primer segundo de cada demo

Ya hecho — están en `assets/videos/posters/`. Para regenerar:

```powershell
ffmpeg -y -ss 00:00:01 -i "assets\videos\luna-apps-demo.mp4" `
  -frames:v 1 -q:v 3 "assets\videos\posters\luna-apps-demo.jpg"
```

### 3. Re-comprimir si la fuente nueva es pesada (>5 MB)

```powershell
ffmpeg -y -i "INPUT.mp4" `
  -c:v libx264 -preset slow -crf 24 -profile:v high -level 4.0 -pix_fmt yuv420p `
  -movflags +faststart `
  -c:a aac -b:a 96k `
  -vf "scale='min(1280,iw)':'-2'" `
  "assets\videos\NOMBRE-demo.mp4"
```

CRF 24 = calidad alta para web. Subí a 26–28 si necesitás menos peso (degradación notable arriba de 28).

### 4. Quemar subtítulos sobre el video (cuando el original no los tiene)

Crear `subs.srt`:

```srt
1
00:00:00,000 --> 00:00:03,000
Controlá tu comercio sin planillas eternas.

2
00:00:03,000 --> 00:00:10,000
Ventas, gastos y caja diaria en un solo lugar.
```

Quemar (hardsub, queda dentro del video):

```powershell
ffmpeg -y -i "input.mp4" `
  -vf "subtitles=subs.srt:force_style='Fontname=Inter,Fontsize=22,PrimaryColour=&Hffffff&,BackColour=&H80000000&,BorderStyle=4,Outline=0,Shadow=0,MarginV=40'" `
  -c:a copy "output-con-subs.mp4"
```

### 5. Versión ultra-liviana 720p para previsualización mobile (opcional)

```powershell
ffmpeg -y -i "assets\videos\luna-apps-demo.mp4" `
  -c:v libx264 -preset slow -crf 28 -profile:v high -pix_fmt yuv420p `
  -movflags +faststart -an `
  -vf "scale=960:-2" `
  "assets\videos\luna-apps-demo-preview.mp4"
```

Sin audio, escalado a 960px, ~150 KB.

## Reglas que no se rompen

- No inventar pantallas que no existen en el producto.
- No usar IA generativa para "rellenar" UI faltante.
- Si un producto no tiene demo real (Ojo Claro IA / Estela), no se filma. Se deja como "En desarrollo" en la landing.
- No agregar mockups falsos al video general.
- No usar música de stock con vocals.

## Próximos pasos sugeridos

1. **Acortar el demo general** a 40 s (comando 1 arriba). Es el cambio de mayor impacto.
2. **Grabar el cierre con logo** (3 s) si no está, e insertarlo en los tres demos.
3. **Quemar los textos del guion** sobre los videos para que se entiendan en mute (la mayoría ve la web sin sonido).
4. Cuando esté listo Ojo Claro IA / Estela, grabar su demo siguiendo el mismo formato 0:30.
