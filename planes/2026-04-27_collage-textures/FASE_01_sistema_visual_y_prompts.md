# FASE 01: Sistema visual + catálogo de prompts ChatGPT

> Pegar entero como primer mensaje en un chat nuevo, o decir *"ejecuta la fase 01"* en este chat. La skill `ejecutor-plan` se activará automáticamente.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual — entrega un documento (`planes/2026-04-27_collage-textures/PROMPTS_CHATGPT.md`) que el usuario debe leer y aprobar antes de ir a ChatGPT. No toca código del producto.

## Objetivo de esta fase
Producir el documento maestro de prompts para ChatGPT Image 2.0. El doc define el **vocabulario visual común** (paleta Bauhaus, papel base, formas geométricas, grano de impresión, manchas, cintas, recortes), lista los **slots de assets por sección** con dimensiones y propósito CSS, e incluye un **prompt textual completo** por asset listo para copiar y pegar en ChatGPT.

## Precondiciones
- [ ] `CONTEXTO.md` cargado o accesible.
- [ ] Referencias visuales del usuario revisadas (los dos posters "ChatGPT Images 2.0" y "GPT Image 2.0 — point of view").
- [ ] Identidad cromática actual de cada sección leída en `src/styles/style.css` (paper crema, azul foto, verde música, etc.).

## 🤖 Modelo y esfuerzo
- **Modelo**: Opus 4.7
- **Esfuerzo**: Medio-alto — es trabajo de dirección de arte + ingeniería de prompts; precisión léxica importa.

## 📝 Prompt ejecutable

Genera el archivo `planes/2026-04-27_collage-textures/PROMPTS_CHATGPT.md` con esta estructura exacta:

1. **Sistema visual común** (1 página)
   - Paleta Bauhaus exacta con códigos HEX: rojo bermellón, azul ultramar, amarillo mostaza, negro tinta, papel crudo. Reusar los HEX que ya existen en `src/styles/style.css` para `--paper`, `--paper-warm`, `--paper-edge`, `--ink`, `--red`.
   - Texturas base universales: papel envejecido, grano de offset, mancha de tinta, cinta adhesiva amarillenta, sello de archivo, recorte de revista, esquina rasgada.
   - Tipografías a evitar dentro de las imágenes (queremos texto en CSS, no quemado en PNG) — salvo en assets que sean explícitamente "recorte de titular" decorativo.

2. **Inventario de slots por sección** (tabla)
   - Columnas: `Sección | Asset ID | Propósito CSS | Dimensiones recomendadas | Formato final | Notas de blend mode`.
   - Mínimo 2 assets por sección y máximo 4. Total objetivo: 25-30 assets.
   - Incluye una columna `prioridad` (P1 imprescindible, P2 deseable). Las P2 se generan si sobra tiempo.
   - Slots universales reutilizables: `paper-base.png` (textura papel grande, se repite), `grain-overlay.png` (grano fino para `mix-blend-mode: overlay`), `tear-edge-top.png` y `tear-edge-bottom.png` (bordes rasgados que se ponen entre secciones para la "rotura").

3. **Prompts por asset** (uno por uno)
   - Cada prompt en su propio bloque ` ```text ` listo para copiar.
   - Estructura del prompt: estilo + contenido + composición + paleta + textura + técnica + ratio + restricciones ("no text", "no logos", "no human faces unless specified").
   - Ejemplo de patrón para un fondo de sección:
     > *"Editorial collage poster background, torn cream paper texture (#F1EBDD) with visible fibers and aged edges, large geometric shapes in Bauhaus primary palette: vermillion red rectangle (#C8261D) on the right, ultramarine blue square top-left, mustard yellow triangle bottom. Heavy offset print grain, ink stains, faint scratches. Composition leaves the center mostly empty for typography overlay. Shot of a flat-lay magazine page, slight paper curl, natural shadow. No text, no faces. Aspect ratio 16:9, 4K resolution, photorealistic."*
   - Incluye al final de cada prompt una **variación** breve por si el primer resultado no convence ("alternative version: …").

4. **Sección "Cómo iterar en ChatGPT"** (½ página)
   - Cómo decirle al modelo que ajuste sin volver a tirar el prompt entero ("keep composition, change palette to…").
   - Cómo pedir variaciones tipográficas si un asset es decorativo.
   - Recordatorio de pedir siempre el archivo PNG en alta resolución descargable.

5. **Sección "Slots por sección — guía rápida"** (resumen final)
   - Para cada sección de la web (hero, cine, actor, fotografia, escritor, musica, ai, about, contact), 2-3 líneas con la **dirección creativa** de esa sección. Ejemplo:
     > *Hero: collage estilo "anuncio de revista años 60", retrato del Vitruvio collage ya existente (no regenerar), añadir capa de papel rasgado al fondo (paper-base.png) + grano de impresión + 2-3 formas Bauhaus desplazadas detrás del retrato.*
   - **Importante**: el hero ya tiene `public/hero-vitruvio.png` (el retrato collage). NO se regenera la figura — solo se generan las **capas de fondo** que la rodean.

**Restricciones**:
- No toques `src/`, `index.html`, `public/` durante esta fase. Solo escribes el MD del plan.
- No uses palabras vagas en los prompts ("creative", "artistic", "modern") — sé específico (Bauhaus, Nouvelle Vague, Saul Bass, August Sander, papel offset 1960).
- Cada prompt debe ser autosuficiente — copiar uno solo a ChatGPT debe producir el asset descrito sin contexto adicional.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `cinematic-portfolio-reviewer` — para validar que la dirección creativa respeta los principios del cine/fotografía editorial al cerrar la fase.
  - `app-design-visionary` — opcional, para una segunda mirada al sistema visual antes de mandar prompts a ChatGPT.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno. Trabajo concentrado de dirección de arte que se hace mejor en el chat principal con Opus, no delegado.

## 🔗 Dependencias
- Depende de: —
- Paraleliza con: —

## 🛡️ Verificación
- [ ] `planes/2026-04-27_collage-textures/PROMPTS_CHATGPT.md` existe y está completo.
- [ ] Mínimo 25 prompts numerados, cada uno en bloque `text` listo para copiar.
- [ ] Tabla de inventario incluye dimensiones, formato y blend mode sugerido por asset.
- [ ] Paleta usa exactamente los HEX de `src/styles/style.css` (no inventar colores nuevos).
- [ ] El usuario lee el documento y da el OK explícito antes de ir a la Fase 02.

## 🌿 Git en esta fase
- **Antes**: rama `master` con o sin cambios sin commitear (no afecta — esta fase no toca el código del producto).
- **Commit sugerido**: `docs: catálogo de prompts ChatGPT para texturas collage` — opcional, podría no commitearse si prefieres mantener `planes/` fuera del repo (revisar `.gitignore` antes).
- **Si verificación falla**: editar el MD hasta que cuadre. No hay rollback porque no hay cambios en el producto.

## ⚠️ Riesgos de esta fase
- Que el documento sea demasiado teórico y no produzca buenos assets en ChatGPT. **Mitigación**: cada prompt debe estar probado mentalmente — si dudas de un prompt, marca con `<!-- DECIDIR -->` y deja al usuario refinar.
- Que la paleta del documento se desvíe de la del CSS. **Mitigación**: leer `src/styles/style.css` antes de escribir la sección de paleta.
- **Rollback**: `rm planes/2026-04-27_collage-textures/PROMPTS_CHATGPT.md` y reescribir.

## ✅ Criterio de finalización
La fase termina cuando `PROMPTS_CHATGPT.md` está creado, contiene 25-30 prompts copiables, tabla de inventario completa, guía rápida por sección, y el usuario ha dado OK explícito.
