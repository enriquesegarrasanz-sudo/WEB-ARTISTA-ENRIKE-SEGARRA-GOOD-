# Plan Maestro: Rediseño visual con texturas collage editorial

**Fecha**: 2026-04-27
**Proyecto**: enrike-segarra-web
**Plan-slug**: `collage-textures`

## 🎯 Objetivo general
Transformar el portfolio de Enrike Segarra en un collage editorial coherente — papel rasgado, grano de impresión, manchas y cintas, Bauhaus geométrico — usando imágenes generadas con ChatGPT (GPT Image 2.0) como base de texturas, integradas en CSS por capas (`mix-blend-mode`, `mask-image`, `background-blend-mode`). Cada una de las 9 secciones conserva su identidad cromática, pero la web entera se lee como un único collage roto.

## 🤖 Modelo y esfuerzo globales
- **Modelo principal**: Sonnet 4.6 para integración CSS; Opus 4.7 para la fase 01 (sistema visual + redacción de prompts creativos).
- **Esfuerzo total**: Alto (afecta a casi todos los `<section>` y al CSS global; requiere generación manual de ~25-30 assets en ChatGPT).
- **Justificación**: la fase 01 es trabajo de dirección de arte + ingeniería de prompts (Opus aporta criterio visual y precisión léxica); el resto es ejecución CSS sistematizada (Sonnet basta).

## 🗺️ Fases
| # | Fase | Modelo | Depende de | Paraleliza con | Documento |
|---|------|--------|------------|-----------------|-----------|
| 01 | Sistema visual + catálogo de prompts | Opus 4.7 | — | — | [./FASE_01_sistema_visual_y_prompts.md](./FASE_01_sistema_visual_y_prompts.md) |
| 02 | Generación de imágenes en ChatGPT *(manual)* | — | 01 | — | [./FASE_02_generacion_imagenes.md](./FASE_02_generacion_imagenes.md) |
| 03 | Sistema CSS de texturas + aplicación al hero (v1) | Sonnet 4.6 | 02 | — | [./FASE_03_sistema_css_y_hero.md](./FASE_03_sistema_css_y_hero.md) |
| 03v2 | **Hero elegante — prompts idóneos + re-integración** ⬅ activa | Sonnet 4.6 | 03 | — | [./FASE_03_v2_hero_elegante.md](./FASE_03_v2_hero_elegante.md) |
| 04 | Integración secciones cine + actor + foto | Sonnet 4.6 | 03v2 | — | [./FASE_04_cine_actor_foto.md](./FASE_04_cine_actor_foto.md) |
| 05 | Integración secciones escritor + música + A.I | Sonnet 4.6 | 03v2 | 04 | [./FASE_05_escritor_musica_ai.md](./FASE_05_escritor_musica_ai.md) |
| 06 | Roturas entre secciones + about + contact | Sonnet 4.6 | 04, 05 | — | [./FASE_06_roturas_about_contact.md](./FASE_06_roturas_about_contact.md) |
| 07 | Verificación visual + responsive *(manual)* | — | 06 | — | [./FASE_07_verificacion_visual.md](./FASE_07_verificacion_visual.md) |

> **Nota sobre la v2**: la Fase 03 v1 produjo un hero con halftone agresivo y salpicaduras de tinta — demasiado "fanzine sucio" frente a la dirección "editorial Bauhaus elegante" pedida por el usuario. La Fase 03 v2 sustituye el resultado v1 con prompts ChatGPT corregidos y limpieza del CSS. Las Fases 04-06 se ejecutan **solo cuando el hero v2 esté aprobado**, no antes — el hero define el lenguaje visual reutilizado en las demás secciones.

## 🔍 Análisis de automatización
| # | Fase | Clasificación | Razón |
|---|------|---------------|-------|
| 01 | Sistema visual + prompts | ⚠️ Manual | Entrega un documento que el usuario debe leer/aprobar antes de ir a ChatGPT — no hay verificación programática. |
| 02 | Generación imágenes ChatGPT | ⚠️ Manual | Requiere copiar prompts a ChatGPT externo, descargar PNGs y guardarlos en `public/textures/`. Imposible automatizar desde Claude Code. |
| 03 | Sistema CSS + hero | ⚠️ Manual | Toca CSS visible en navegador — la verificación final es ojo humano (`npm run build` solo certifica que compila, no que se vea bien). |
| 04 | Cine + actor + foto | ⚠️ Manual | Mismo motivo — verificación visual del navegador. |
| 05 | Escritor + música + A.I | ⚠️ Manual | Mismo motivo. Además toca `style.css` igual que la 04 → riesgo de conflicto de archivos si corren a la vez (ver §Paralelización). |
| 06 | Roturas + about + contact | ⚠️ Manual | Mismo motivo. |
| 07 | Verificación visual final | ⚠️ Manual | Inspección humana en navegador, móvil real, test de rendimiento. |

**Cadena automática posible**: ninguna. **Plan 100% manual** — cada fase necesita ojo humano antes de seguir. No tiene sentido el mecanismo de tags/cola autónoma para este plan; se omite.

**Sobre la "paralelización" 04 ∥ 05**: técnicamente las dos tocan `src/styles/style.css`, así que NO se ejecutan en paralelo en chats simultáneos (conflicto de merge en el archivo). La paralelización marcada en la tabla es **conceptual** — el usuario puede ejecutar 04 y 05 en cualquier orden, pero **secuencialmente**, no a la vez. La razón de marcarlas con la misma dependencia (03) y no encadenadas es dejar libertad al usuario sobre qué triada de secciones quiere ver primero pintada.

## 🛡️ Verificación global
- `npm run build` debe pasar sin errores tras cada fase de código (03-06).
- `npm run dev` y revisión visual en navegador después de cada fase.
- Inspección en móvil real (no solo DevTools) en la fase 07.
- Performance: medir LCP del hero antes y después — los PNG de textura no deben empujarlo por encima de 2.5s en conexión normal.
- Accesibilidad: contraste de texto sobre las texturas (mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para títulos grandes).

## 🌿 Estrategia de Git
- Rama sugerida: `feat/collage-textures`. Crear desde `master` después de commitear o stashear los cambios actuales (`index.html`, `src/main.js`, `src/styles/style.css` modificados).
- Commits: uno por fase de código completada y verificada visualmente. Estilo del repo: `feat:`, `perf:`, `style:` en minúscula.
- Rollback global: `git checkout master && git branch -D feat/collage-textures` descarta el rediseño entero. Para rollback parcial, `git revert <sha-de-la-fase>`.

## 🚀 Despliegue
Fuera de alcance de este plan. La web no parece tener pipeline CI/CD configurado (no hay `.github/workflows/`, no hay `vercel.json`). Cuando quieras desplegar, decide hosting (Vercel/Netlify/GitHub Pages) y abrimos un plan aparte.

## ⚠️ Riesgos globales
- **Peso de assets**: 25-30 PNG de textura pueden inflar el bundle > 5 MB. Mitigación: convertir a WebP/AVIF antes de integrar (lo cubre la Fase 02), preload solo del hero, lazy-load del resto.
- **Contraste de texto**: las texturas reducen contraste — algún título o párrafo puede volverse ilegible. Mitigación: la Fase 06 incluye chequeo de contraste, y cada sección puede llevar un overlay sólido entre textura y texto si hace falta.
- **Coherencia visual**: 9 secciones con texturas distintas pueden romper la lectura de "una sola web". Mitigación: la Fase 01 define un **vocabulario común** (mismas formas geométricas, misma paleta Bauhaus, mismo papel base) que se reutiliza en todas las secciones.
- **Dependencia de ChatGPT**: si GPT Image 2.0 no está disponible o devuelve calidad pobre, la Fase 02 se atasca. Mitigación: los prompts incluyen alternativas (Midjourney, Flux) por si hay que cambiar de generador.
- **Generación inconsistente**: ChatGPT puede devolver texturas que no encajan a la primera. La Fase 02 prevé 2-3 iteraciones por asset — el usuario refina prompts hasta que el resultado es coherente con las referencias.

## 📌 Cómo usar este plan
1. Lee `CONTEXTO.md` para situarte.
2. Como **todas las fases son manuales**, no se aplica el mecanismo de cola autónoma por tags. Ejecuta una fase, verifica visualmente, decide si continuas a la siguiente.
3. **Opción A — chats separados**: pega el contenido entero de cada `FASE_XX_*.md` como primer mensaje en un chat nuevo. La skill `ejecutor-plan` se activará y ejecutará el prompt con criterio.
4. **Opción B — mismo chat**: dile a Claude *"ejecuta la fase 01"* / *"adelante con la fase 03"* y trabajará secuencialmente sobre este chat. Más cómodo si quieres iterar conmigo en tiempo real entre fases.
5. **Recomendación para esta web**: Opción B. Las fases visuales necesitan conversación viva ("esta textura no me convence, pídeme otra"), no ejecución autónoma.
