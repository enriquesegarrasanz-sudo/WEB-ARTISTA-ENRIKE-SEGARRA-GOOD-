# FASE 03 v2: Hero elegante — prompts idóneos + re-integración

> Reemplaza la Fase 03 v1. Pegar entero en chat nuevo, o decir *"ejecuta la fase 03 v2"*.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual de verificación.

## Por qué v2

La v1 quedó "sucia": patrón halftone agresivo encima de las formas, salpicaduras de tinta negra abajo, grunge tipo zine. Las referencias del usuario (posters "Introducing ChatGPT Images 2.0" y "GPT Image 2.0 — Coming soon") **no tienen ni una mancha**: papel cremoso muy sutilmente arrugado, formas Bauhaus planas y sólidas, roturas controladas, mucho aire. La v2 corrige el rumbo: quitar manchas, suavizar el papel, formas limpias, roturas elegantes.

## Objetivo de esta fase
1. Producir 3-4 nuevos assets en ChatGPT con la estética elegante correcta.
2. Sustituir los assets sucios del hero por los nuevos.
3. Limpiar el CSS del hero: quitar manchas de tinta, bajar/eliminar el halftone, dejar las formas planas.

## Precondiciones
- [ ] Fase 03 v1 ejecutada (hero ya tiene capas, aunque sucias).
- [ ] Acceso a ChatGPT con GPT Image 2.0 (o Midjourney/Flux como alternativa).
- [ ] Rama `feat/collage-textures` activa.

## 🤖 Modelo y esfuerzo
- **Modelo**: Sonnet 4.6 para la integración CSS; el usuario ejecuta los prompts en ChatGPT.
- **Esfuerzo**: Medio.

---

## 📐 Dirección creativa de la v2 (lo que cambia respecto a v1)

| Concepto | v1 (lo que ha pasado) | v2 (a dónde vamos) |
|---|---|---|
| Papel | Halftone visible, puntitos por toda la superficie | Papel cremoso liso con arrugas suaves controladas (crease lines), sombras blandas |
| Formas Bauhaus | Con halftone superpuesto, parecen sucias | Planas, sólidas, color uniforme, una sola textura sutil de papel impreso por debajo |
| Tinta | Salpicaduras de tinta negra grandes | Cero salpicaduras |
| Granos / manchas | Grunge generoso | Cero grunge — máximo, una mota muy sutil de polvo de impresión casi invisible |
| Bordes | Rotura desordenada con flecos | Rotura limpia, una sola línea irregular controlada (como rasgar una hoja con cuidado) |
| Inspiración | Zine sucio, fanzine punk | Editorial moderno, Bauhaus, Helvetica, suizo, Nouvelle Vague |

**Palabras clave que entran en los prompts**: *editorial, modernist, Bauhaus, Swiss design, clean, elegant, refined, soft paper crease, subtle, controlled tear, flat solid color blocks, museum poster, magazine cover.*

**Palabras clave que NO entran**: *grunge, splatter, ink stain, halftone, distressed, weathered, dirty, gritty, punk, zine, scratched, rough.*

---

## 🖼️ Prompts ChatGPT idóneos — copiar y pegar uno a uno

> Tira los del v1 (`paper-base.webp`, `grain-overlay.webp`, `hero-bauhaus-shapes.webp` que tengas) — usaremos estos cuatro nuevos. **Recomendación**: pídelos a ChatGPT con ratio 16:9 para el fondo del hero, máxima calidad PNG descargable. Si el primer intento no convence, usa la variación que va al final de cada prompt.

### Asset 1 — `paper-base-elegant.png`

```text
A high-resolution photograph of a single sheet of warm cream-colored matte paper, color #F1EBDD, lying flat against a neutral surface. The paper has very subtle natural creases and soft folds — gentle indentations that create delicate diagonal shadows under raking light. The surface is smooth, refined, museum-quality printmaking paper. No stains, no marks, no halftone dots, no grunge, no tears. Just paper with quiet character: a barely-there crease running diagonally, a soft fold near one corner, a faint dust of fiber visible only on close inspection. Lighting: soft natural daylight from the upper left, low contrast, no harsh shadows. Composition: the paper fills the frame, slightly off-center, leaving 5% margin of darker neutral surface around it. Aspect ratio 16:9, photorealistic, 4K, editorial photography style. Inspired by the Bauhaus posters from Lars Müller Publishers. No text, no graphics, no people.

Alternative version: same paper but with two soft crease lines forming a subtle X across the surface, even more restrained, almost flat.
```

### Asset 2 — `hero-bauhaus-canvas.png`

```text
Editorial Bauhaus poster background, photographed flat. Cream paper (#F1EBDD) with very subtle natural creases. Composition: large solid geometric shapes arranged with strong asymmetric balance — a vermillion red circle (#C8261D) in the upper-right quadrant, partially cropped by the frame edge; a deep ultramarine blue rectangle (#1E3A8A) on the right side, vertical, occupying about 25% of the frame; a mustard yellow rectangle (#D4A017) lower-center; a single thin black vertical line dividing the composition; a small black quarter-circle in the lower-right. All shapes are FLAT solid color, no halftone, no texture overlay on the shapes themselves — only the underlying paper crease shows through faintly. The center-left area is intentionally LEFT EMPTY (about 40% of the frame) for a portrait to be placed later in design software. Style: Swiss modernist poster, Lars Müller, Josef Müller-Brockmann, museum reproduction. Aspect ratio 16:9, 4K resolution, photorealistic photograph of the printed poster lying flat. Lighting: soft natural daylight, very low contrast. The right edge of the paper has a single clean controlled tear — one irregular line, refined, not chaotic. No splatter, no ink stain, no grunge, no halftone dots, no scratches, no tape, no stamps. Pure editorial elegance. No text, no people, no logos.

Alternative version: same composition but rotate the shape arrangement — blue rectangle on left, red circle bottom-right, yellow triangle upper-center, keep the empty zone in the right-center.
```

### Asset 3 — `tear-edge-clean.png`

```text
Close-up photograph of the torn edge of a single sheet of cream paper (#F1EBDD), shot against a transparent background (PNG with alpha). The tear is a single horizontal irregular line spanning the full width — the kind of tear made by carefully ripping a sheet by hand along a folded crease, controlled and refined, with thin paper fibers visible at the edge but no chaotic shredding. Subtle natural shadow under the torn fibers. Length: full width of the frame. Height: about 80 pixels of torn fibers. Style: editorial, museum-quality, similar to the torn edges visible in Bauhaus poster reproductions. Aspect ratio 20:1 (very wide and thin), 4K resolution, photorealistic. The bottom 90% of the frame is empty transparent — only the top 10% contains the torn edge fibers and their shadow. No grunge, no stains, no jagged punk-style tear. One controlled elegant tear line.

Alternative version: same idea but the tear is slightly less pronounced — almost a soft fold-and-rip rather than a full tear. Even more restrained.
```

### Asset 4 (opcional) — `paper-fiber-overlay.png`

```text
A subtle overlay texture: extreme close-up of cream paper fibers, almost invisible, just a hint of organic surface noise to break up flat digital color. White transparent background, only the faint fiber pattern in semi-transparent warm gray. Density: very low — about 5-10% coverage. The fibers should be barely perceptible, intended for use as a CSS overlay at low opacity (10-20%). No dots, no halftone pattern, no ink, no stains. Just paper fiber. Aspect ratio 1:1 (tileable square), 2K resolution, PNG with alpha channel. Inspired by the subtle paper texture you see in high-end art books printed on Munken or Arctic Volume paper.
```

> **Tip de iteración en ChatGPT**: si el primer resultado de cada asset trae halftone o grunge sin pedirlo (es un sesgo del modelo cuando le hablas de papel viejo), responde literalmente: *"Remove all halftone dots and any grunge texture. Keep only the soft paper crease. Pure flat color blocks. Editorial elegance, not zine aesthetic."* — el modelo corrige.

---

## 🛠️ Plan de re-integración CSS (después de tener los 4 assets en `public/textures/`)

1. **Convierte los PNG a WebP** (calidad 88) y guarda en `public/textures/`. Borra/archiva los assets sucios de v1: `paper-base.webp`, `grain-overlay.webp`, `hero-bauhaus-shapes.webp` (mueve a `public/textures/_v1_archived/`, no commitearlos).

2. **Edita `src/styles/textures.css`** (creado en v1):
   - Renombra/sustituye las variables:
     ```css
     --tx-paper:        url('/textures/paper-base-elegant.webp');
     --tx-hero-canvas:  url('/textures/hero-bauhaus-canvas.webp');
     --tx-tear-clean:   url('/textures/tear-edge-clean.webp');
     --tx-fiber:        url('/textures/paper-fiber-overlay.webp');  /* opcional */
     ```
   - **Elimina** la variable `--tx-grain` (era el halftone agresivo) y la utility `.tx-grain`.
   - Si quieres mantener un grano súper sutil, añade `.tx-fiber` con `mix-blend-mode: multiply` y `opacity: 0.15` (no más).

3. **Edita el bloque CSS del hero en `src/styles/style.css`**:
   - Sustituye la imagen de fondo por `--tx-hero-canvas` directamente (un solo asset que ya trae las formas Bauhaus integradas y el papel arrugado de fondo).
   - **Quita** las formas Bauhaus que estabas pintando con `::before`/`::after` y rotaciones — ahora vienen dentro del PNG. Esto simplifica el CSS y elimina el riesgo de "formas planas + halftone encima" que provocó el aspecto sucio de v1.
   - **Quita** cualquier `background-image` o `::after` que pintara salpicaduras de tinta. Cero manchas.
   - El retrato `public/hero-vitruvio.png` queda exactamente como está, posicionado encima del canvas con `z-index: 2`.
   - Aplica `--tx-tear-clean` solo en el borde inferior del hero como `::after` con `mask-image`, altura 60-80px, para la transición elegante a la siguiente sección. Una sola línea de rotura, no dos.

4. **Tipografía del título**: revisa que "ENRIKE / SEGARRA" mantenga el contraste. Sobre el papel cremoso liso, el negro y el rojo del v1 ya funcionan — no se toca.

5. **Verifica build y navegador**:
   ```bash
   npm run build
   npm run dev
   ```

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `cinematic-portfolio-reviewer` — pase final sobre el hero v2.
  - `simplify` — al cerrar, para asegurar que han desaparecido las reglas CSS huérfanas del v1 (formas Bauhaus pintadas con pseudoelementos, manchas, halftone).
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🔗 Dependencias
- Reemplaza a: Fase 03 v1.
- Bloquea: Fases 04, 05, 06 — antes de avanzar a integrar las demás secciones, el hero v2 debe quedar aprobado, porque define el lenguaje base.

## 🛡️ Verificación
- [ ] `npm run build` pasa.
- [ ] Hero en navegador: papel cremoso muy sutilmente arrugado, formas Bauhaus planas y limpias, **cero halftone**, **cero salpicaduras**, retrato del Vitruvio nítido encima.
- [ ] Borde inferior del hero con una rotura limpia controlada (no dos líneas, no flecos desordenados).
- [ ] Contraste del título WCAG AA mantenido.
- [ ] Inspección móvil 375px: la composición Bauhaus sigue legible y proporcionada.
- [ ] Comparativa lado a lado con los posters de referencia: el hero **debe sentirse del mismo idioma visual**. Si todavía se siente "fanzine", iterar prompts en ChatGPT y volver a este paso.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures`, commit de Fase 03 v1 ya en el historial.
- **Commit sugerido**: `style: hero v2 — papel elegante, Bauhaus limpio, sin manchas`.
- **Si verificación falla**: `git reset --hard HEAD` y reintentar prompts en ChatGPT.

## ⚠️ Riesgos de esta fase
- **Sesgo de ChatGPT hacia grunge**: cuando le pides "papel viejo" o "editorial", suele añadir halftone y manchas por defecto. **Mitigación**: los prompts ya incluyen exclusiones explícitas; si igual viene sucio, usa la frase de iteración del Tip.
- **Pérdida de "alma"**: una composición demasiado limpia puede sentirse genérica. **Mitigación**: la pequeña arruga del papel y la rotura inferior aportan carácter sin ensuciar. Si al final queda demasiado plano, se puede subir un punto la opacidad de `.tx-fiber` a 0.20.
- **Rollback**: `git reset --hard HEAD~1` vuelve al hero v1.

## ✅ Criterio de finalización
La fase termina cuando: el hero v2 se ve elegante y editorial (cero manchas, papel sutil, formas planas, rotura limpia), build limpio, comparativa con los posters de referencia es satisfactoria, y el usuario da OK explícito. Solo entonces se desbloquean las Fases 04-06.
