# PROMPTS_CHATGPT.md — Catálogo maestro de assets para ChatGPT Image 2.0

> **Plan**: `collage-textures` · **Fase**: 01 · **Fecha**: 2026-04-27
> **Destino final de los PNG**: `public/textures/` (Fase 02 los descarga; Fase 03+ los conecta al CSS).
> **Modelo objetivo**: ChatGPT Image 2.0 (GPT Image 2.0) — pegar un prompt = un PNG.
> **Idioma de los prompts**: inglés (rinde mejor en GPT Image). Las notas alrededor están en español.

---

## 1 · Sistema visual común

### 1.1 Paleta cerrada (HEX exactos del CSS)

Estos son los **únicos** colores admitidos en cualquier asset. No improvises matices nuevos: si necesitas un tono medio, mézclalos por superposición / opacidad, no inventando un HEX adicional.

| Token CSS         | HEX        | Rol en el collage                                              |
| ----------------- | ---------- | -------------------------------------------------------------- |
| `--paper`         | `#F1EBDD`  | Papel crudo base, fondo dominante de hero / about / contact    |
| `--paper-warm`    | `#E8DFCC`  | Papel un tono más cálido, capas medias y manchas suaves        |
| `--paper-edge`    | `#DDD3BD`  | Borde de página, sombra de papel, esquinas envejecidas         |
| `--ink`           | `#0E0E0E`  | Negro tinta (offset), tipografía recortada, sello de archivo   |
| `--ink-soft`      | `#1A1815`  | Negro de cuerpo, sombra de papel, escritor                     |
| `--red`           | `#C8311E`  | Rojo bermellón Bauhaus — cine + acentos                        |
| `--red-deep`      | `#9C2515`  | Rojo profundo, sombra del rojo                                 |
| `--blue`          | `#1F2D87`  | Azul ultramar Bauhaus — fotografía                             |
| `--blue-deep`     | `#141E5C`  | Azul nocturno, fondo profundo                                  |
| `--mustard`       | `#D4A82C`  | Amarillo mostaza Bauhaus — actor + A.I, cinta adhesiva         |
| `--mustard-deep`  | `#A47F1F`  | Mostaza envejecido, sombra ámbar                               |
| `--green`         | `#1B4332`  | Verde botella — música                                         |
| `--green-deep`    | `#0F2A1F`  | Verde negro, fondo profundo música                             |
| `--sky`           | `#7BB7E5`  | Azul cielo claro — único acento decorativo en A.I (línea 1405) |
| `--line`          | `rgba(14,14,14,0.12)` | Trazos finos translúcidos — equivale a `--ink` al 12% |

> **Regla**: cada prompt debe nombrar el HEX, no decir "red" a secas. GPT Image 2.0 respeta HEX si están escritos en formato `#RRGGBB`.
>
> **Cobertura completa**: estos 15 tokens son la paleta total de la web (verificada contra `src/styles/style.css`). Cualquier asset que necesite color debe escogerlos de aquí — no hay color fuera de esta lista. `--line` se usa solo como referencia de "trazo fino translúcido" en CSS y no se nombra en prompts (no es un color sólido).

### 1.2 Vocabulario de texturas (universal a toda la web)

Reúsa estos términos literalmente dentro de los prompts. Forman el "diccionario" del collage:

- **Paper substrate**: *aged cream paper* (`#F1EBDD`), visible cellulose fibers, slight cockling, faint coffee-like stain at one corner, frayed deckle edge on at least one side.
- **Print grain**: *heavy 1960s offset lithography grain*, halftone dot misregistration, faint CMYK fringe on hard edges.
- **Ink stains & marks**: *India ink splatter*, fingerprint smudge in `#0E0E0E`, dried ink ring left by a glass, ballpoint pen scribble in margin.
- **Adhesive tape**: *aged cellophane tape strip*, slightly yellowed (`#D4A82C` at 30% opacity), curled corner, casting a 1px shadow.
- **Archive marks**: *rubber-stamp impression in `#C8311E`*, ink unevenly applied, partial smear; *pencil annotation* in margin in cursive.
- **Magazine cutout**: *hand-torn paper edge*, white frayed fibers along the tear, 1mm cast shadow, sometimes a sliver of a half-cut letter.
- **Bauhaus geometric shapes**: *flat solid fill rectangles, circles and triangles* in red `#C8311E` / blue `#1F2D87` / mustard `#D4A82C`, no gradient, no bevel, slight halftone overlay to simulate offset print.
- **Photographic fragments**: *high-contrast black-and-white grain photo cutout*, August Sander / Henri Cartier-Bresson palette, deeply printed blacks, bleached highlights.

### 1.3 Lo que SIEMPRE se prohíbe en los prompts

Cierra cada prompt con esta cláusula (o equivalente literal). Es la línea más importante del catálogo: si un asset trae texto quemado, todo el sistema CSS se rompe.

```text
Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO captions, NO signatures unless explicitly part of this asset description. NO modern typography of any kind on the surface. NO faces unless explicitly described. Output as a flat PNG suitable for layering in CSS, transparent or solid background as specified.
```

### 1.4 Tipografías a evitar dentro de las imágenes

La web ya tiene su sistema tipográfico — **Bebas Neue** (display), **Fraunces** (editorial italic), **EB Garamond** (cuerpo). El texto vive en HTML/CSS, **no quemado en PNG**.

Excepciones explícitas (assets donde sí queremos tipografía recortada como decoración):
- `escritor-headline-cutout.png` — recorte de titular de revista años 60.
- `cine-archive-stamp.png` — sello tipo "ARCHIVO 1962" en rojo, parcialmente borroso.
- `ai-margin-note.png` — anotación a mano en lápiz, frase corta en cursiva.

Para esos tres, el prompt **especifica la tipografía** (Times New Roman amarillento, máquina de escribir Olivetti, manuscrita). Para el resto, prohibido.

---

## 2 · Inventario de slots

29 assets totales. Las dimensiones son orientativas — ChatGPT Image 2.0 entrega 1024×1024, 1024×1536 o 1536×1024 estables; cualquier otra ratio se pide explícitamente y se acepta el resultado más cercano. La columna *Dimensiones* indica el ratio objetivo para el uso CSS, no necesariamente el output literal del modelo.

### 2.1 Universales (reutilizados por varias secciones)

| Sección    | Asset ID                | Propósito CSS                                            | Dimensiones      | Formato | Notas blend mode                                   | Prio |
| ---------- | ----------------------- | -------------------------------------------------------- | ---------------- | ------- | -------------------------------------------------- | ---- |
| Universal  | `paper-base.png`        | `background-image` repeatable de fondos crema            | 1536×1024 (3:2)  | PNG     | sin blend, base; opacidad 1                        | P1   |
| Universal  | `grain-overlay.png`     | Capa de grano sobre cualquier sección                    | 1024×1024 tile   | PNG     | `mix-blend-mode: multiply`, opacity 0.35           | P1   |
| Universal  | `tear-edge-top.png`     | Borde rasgado entre dos secciones (parte superior)       | 1536×400 (banda) | PNG α   | `mask-image` o capa absoluta arriba de la sección  | P1   |
| Universal  | `tear-edge-bottom.png`  | Borde rasgado inferior de una sección                    | 1536×400 (banda) | PNG α   | capa absoluta inferior de la sección               | P1   |

### 2.2 Por sección

| Sección     | Asset ID                       | Propósito CSS                                                | Dimensiones      | Formato | Notas blend mode                                          | Prio |
| ----------- | ------------------------------ | ------------------------------------------------------------ | ---------------- | ------- | --------------------------------------------------------- | ---- |
| Hero        | `hero-bauhaus-bg.png`          | Fondo de capas detrás del retrato Vitruvio (no la figura)    | 1920×1080 (16:9) | PNG     | base de la sección — sin blend; el retrato va encima      | P1   |
| Hero        | `hero-shapes-overlay.png`      | 2-3 formas Bauhaus desplazadas (rojo/azul/mostaza)           | 1920×1080 α      | PNG α   | `mix-blend-mode: multiply` opacity 0.85                   | P1   |
| Hero        | `hero-ink-splatter.png`        | Manchas de tinta dispersas que rompen el orden               | 1920×1080 α      | PNG α   | `mix-blend-mode: multiply` opacity 0.6                    | P2   |
| Cine        | `cine-red-poster-bg.png`       | Fondo collage rojo bermellón con papel rasgado               | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Cine        | `cine-archive-stamp.png`       | Sello de archivo "ARCHIVO 1962" en rojo medio borroso        | 600×600 α        | PNG α   | `mix-blend-mode: multiply` opacity 0.75                   | P1   |
| Cine        | `cine-filmstrip-fragment.png`  | Trozo de tira de 35mm con perforaciones, blanco y negro      | 1200×400 α       | PNG α   | colocado absoluto, sin blend                              | P2   |
| Actor       | `actor-mustard-bg.png`         | Fondo papel cálido con triángulo y círculo mostaza           | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Actor       | `actor-tape-strip.png`         | Tira de cinta amarillenta diagonal con curl en una esquina   | 800×200 α        | PNG α   | sin blend, sombra natural                                 | P1   |
| Actor       | `actor-portrait-frame.png`     | Marco de fotografía polaroid envejecida, vacío al centro     | 800×1000 α       | PNG α   | sin blend, contiene retrato HTML dentro                   | P2   |
| Fotografia  | `foto-blue-poster-bg.png`      | Fondo azul ultramar profundo con manchas y rayón             | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Fotografia  | `foto-shapes-overlay.png`      | Cuadrado azul + círculo crema desplazados                    | 1920×1080 α      | PNG α   | `mix-blend-mode: screen` opacity 0.55                     | P1   |
| Fotografia  | `foto-contact-sheet.png`       | Hoja de contactos B/N, 6 fotogramas, marcas de chinagraph    | 1200×900 α       | PNG α   | sin blend, capa decorativa                                | P2   |
| Escritor    | `escritor-paper-bg.png`        | Papel crudo con líneas de cuaderno desvanecidas              | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Escritor    | `escritor-headline-cutout.png` | Recorte de titular de revista años 60 (Times) en `#0E0E0E`   | 1200×300 α       | PNG α   | sin blend, capa absoluta                                  | P1   |
| Escritor    | `escritor-typewriter-line.png` | Línea de texto en máquina de escribir Olivetti, parcial      | 1000×120 α       | PNG α   | `mix-blend-mode: multiply` opacity 0.85                   | P2   |
| Musica      | `musica-green-bg.png`          | Fondo verde botella profundo con grano y mancha mostaza      | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Musica      | `musica-vinyl-fragment.png`    | Trozo de vinilo cortado, surcos visibles, etiqueta central   | 1000×1000 α      | PNG α   | sin blend, capa decorativa                                | P1   |
| Musica      | `musica-staff-lines.png`       | Pentagrama desvanecido, notas dispersas, manuscrito          | 1200×400 α       | PNG α   | `mix-blend-mode: screen` opacity 0.4                      | P2   |
| AI          | `ai-mustard-bg.png`            | Fondo papel cálido con esquema técnico Bauhaus en mostaza    | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| AI          | `ai-circuit-diagram.png`       | Esquema técnico minimalista: líneas, círculos, sin texto     | 1400×900 α       | PNG α   | `mix-blend-mode: multiply` opacity 0.7                    | P1   |
| AI          | `ai-margin-note.png`           | Anotación cursiva a lápiz, frase corta en margen             | 700×200 α        | PNG α   | sin blend, opacity 0.85                                   | P2   |
| About       | `about-paper-soft-bg.png`      | Fondo papel cálido suave, marcas mínimas                     | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| About       | `about-photo-stack.png`        | Pila de 3 fotos polaroid B/N descentradas, vacías al centro  | 1200×900 α       | PNG α   | sin blend                                                 | P2   |
| Contact     | `contact-stamped-card-bg.png`  | Fondo papel con sello postal y matasellos rojo               | 1920×1080 (16:9) | PNG     | fondo de sección                                          | P1   |
| Contact     | `contact-airmail-stripes.png`  | Tira de avión rojo/azul tipo correo aéreo, lateral           | 200×1080 α       | PNG α   | sin blend, capa absoluta lateral                          | P2   |

**Resumen**: 4 universales + 25 por sección = **29 assets** (16 P1 + 13 P2).

---

## 3 · Prompts por asset

> Cada bloque está listo para copiar a ChatGPT Image 2.0. Después del prompt principal hay una **variación** breve por si el primer resultado no convence. Los HEX están escritos en formato `#RRGGBB` para que el modelo los respete literalmente.

---

### 3.1 Universales

#### 01 · `paper-base.png`

```text
A flat-lay photograph of a single sheet of aged cream paper, color #F1EBDD, with visible cellulose fibers, slight cockling, faint warm-toned stain (#E8DFCC) bleeding from the upper-left corner. Frayed deckle edge along the right side, the rest cleanly cut. Heavy 1960s offset lithography grain across the entire surface, faint dust specks. Soft, even daylight from above-left, casting a 2mm natural shadow along the right and bottom edges. Composition: paper fills the frame at 95%, centered, no objects on top. Mood reference: editorial magazine spread, Saul Bass production design, August Sander archival quality.

Output: photorealistic, 4K, aspect ratio 3:2, top-down camera angle perpendicular to surface.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO captions, NO signatures, NO modern typography of any kind on the surface, NO faces. Output as a flat PNG suitable for layering as a CSS background-image.

Alternative version: same paper but with a more pronounced coffee-ring stain in the lower-right and one horizontal fold crease across the middle.
```

#### 02 · `grain-overlay.png`

```text
A square seamless tile of pure 1960s offset lithography print grain, halftone dot misregistration, faint CMYK fringe artifacts, intended for use as a multiply-blend overlay in CSS. Background neutral gray #888888 (will be neutralized by blend mode), grain particles in dark warm gray #2A2620 with subtle ink density variations. The pattern must tile seamlessly when repeated horizontally and vertically. No directional bias, no large dust specks, no scratches — only fine, even printing grain. Density: medium-heavy, simulating a 150 lpi offset press from 1965.

Output: 1024×1024 square, seamless tileable, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO geometric shapes, NO recognizable patterns beyond the natural randomness of print grain.

Alternative version: shift the grain density to slightly heavier, with occasional micro ink-blot clusters of #0E0E0E.
```

#### 03 · `tear-edge-top.png`

```text
A horizontal banner, ratio 16:4 wide and short, showing the bottom edge of a sheet of cream paper #F1EBDD that has been hand-torn unevenly. The torn edge runs across the full width, irregular peaks and valleys, white frayed cellulose fibers visible along the rip, 2-3mm cast shadow below the tear. The top 75% of the banner is solid paper #F1EBDD with light offset grain; the bottom 25% is fully transparent — only the torn fibers and the shadow extend slightly into that area. The tear is more aggressive on the left half (deeper rips, more frayed fibers) and slightly cleaner on the right.

Output: PNG with alpha channel, transparent below the tear line, photorealistic, 1536×400, top-down view.

Strictly NO text, NO logos, NO objects on the paper, NO faces, NO color other than the cream paper, the warm cellulose fibers, and the natural cast shadow.

Alternative version: invert the bias — cleaner tear on the left, more aggressive on the right.
```

#### 04 · `tear-edge-bottom.png`

```text
A horizontal banner, ratio 16:4 wide and short, showing the top edge of a sheet of cream paper #F1EBDD that has been hand-torn unevenly. The torn edge runs across the full width, irregular peaks and valleys, white frayed cellulose fibers visible along the rip, 2-3mm cast shadow above the tear (paper sitting on top of something darker). The bottom 75% of the banner is solid paper #F1EBDD with light offset grain; the top 25% is fully transparent — only the torn fibers and the shadow extend slightly into that area. Mirrors `tear-edge-top.png` for use as the closing edge of a section.

Output: PNG with alpha channel, transparent above the tear line, photorealistic, 1536×400, top-down view.

Strictly NO text, NO logos, NO objects on the paper, NO faces.

Alternative version: heavier shadow above the tear (suggesting a deeper layered stack of paper underneath).
```

---

### 3.2 Hero

#### 05 · `hero-bauhaus-bg.png`

```text
Editorial collage poster background, top-down flat lay of a torn cream paper sheet (#F1EBDD) with visible cellulose fibers and aged deckle edges, occupying the full frame. Layered geometric Bauhaus shapes positioned to leave the central 40% of the frame deliberately empty for a portrait that will be placed on top later: a vermillion red rectangle (#C8311E) anchored to the right third, an ultramarine blue square (#1F2D87) tucked into the upper-left corner, a mustard yellow triangle (#D4A82C) at the lower-right, all rendered as flat solid fills with subtle halftone overlay simulating 1960s offset print. Heavy print grain across the entire composition, India ink splatter (#0E0E0E) near the corners, one small dried ink ring near the bottom-left. Slight paper curl at the upper-right corner casting a soft natural shadow.

Mood: Bauhaus 1928 + Nouvelle Vague poster + Saul Bass title sequence. Composition: Swiss editorial grid, asymmetric balance, generous breathing room at the center.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO faces, NO photographic figures. The center must be EMPTY — only paper texture and grain.

Alternative version: rotate the shapes slightly (5-8 degrees off-grid) for a more torn-and-pasted feel.
```

#### 06 · `hero-shapes-overlay.png`

```text
A transparent-background composition of 3 Bauhaus geometric shapes intended to be overlaid on top of a hero image: a vermillion red circle (#C8311E) at 30% from the left and 40% from the top, slightly cropped by the upper edge; an ultramarine blue rectangle (#1F2D87) rotated 12 degrees at the right edge; a mustard yellow triangle (#D4A82C) pointing downward at the lower-left. Each shape rendered as a flat solid fill with subtle halftone print overlay (1960s offset texture), torn paper edges (white frayed fibers visible along each shape's outline as if cut from colored paper), 1mm cast shadow below each. Background fully transparent.

Mood: Bauhaus 1928, Saul Bass, hand-cut colored paper collage.

Output: PNG with alpha channel, transparent background, 1920×1080, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO additional shapes beyond the three described.

Alternative version: replace the triangle with a half-circle at the lower-left, same mustard color.
```

#### 07 · `hero-ink-splatter.png`

```text
A transparent-background composition of scattered India ink (#0E0E0E) splatter and drops, irregularly distributed across a 16:9 frame, leaving the central 40% sparse so a portrait placed underneath remains readable. Mix of fine micro-droplets, 2-3 medium splatters, one larger smear in the lower-right with a dry-brush trailing edge. One faint coffee-like ring (#9C2515 at low opacity) in the upper-left. Each splatter has natural soaking into invisible paper (slight feathering at edges), no perfect circles. Background fully transparent.

Mood: 1960s editorial printmaking accident, Robert Frank contact sheet margin.

Output: PNG with alpha channel, transparent background, 1920×1080, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO geometric shapes.

Alternative version: shift the densest cluster from lower-right to upper-right.
```

---

### 3.3 Cine

#### 08 · `cine-red-poster-bg.png`

```text
Editorial collage poster background for a cinema section. Base layer: hand-torn cream paper (#F1EBDD) with frayed fibers along all edges, occupying 70% of the frame. Dominant element: a large vermillion red rectangle (#C8311E) covering roughly the right two-thirds of the composition, rendered as flat solid fill with heavy 1960s offset halftone overlay, torn paper edge along its left boundary (as if a red sheet was glued onto the cream base). Smaller accent: an ultramarine blue triangle (#1F2D87) pointing left from the upper-right corner. India ink splatter (#0E0E0E) scattered across the cream area. One faint rubber-stamp impression in red at the lower-left, partially smeared, illegible. Heavy print grain across the entire composition. Soft top-down lighting.

Mood reference: Saul Bass title card for "Anatomy of a Murder", Polish film poster school, Henri Langlois Cinémathèque archive.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO faces. The stamp impression should be a circular smudge of red ink, NOT contain readable letters.

Alternative version: swap the red rectangle to occupy the LEFT two-thirds instead, mirroring the layout.
```

#### 09 · `cine-archive-stamp.png`

```text
A single rubber-stamp impression on a transparent background, ink color vermillion red #C8311E, unevenly applied with one side darker (#9C2515) where more ink pooled. The stamp shape is a rectangular frame with the all-caps text "ARCHIVO 1962" rendered in an aged condensed sans-serif, partially smeared and partially missing where the rubber didn't make contact, as if pressed by hand on textured paper. Slight rotation, 7 degrees clockwise. The ink shows the texture of paper fibers underneath. Background fully transparent.

Mood: 1960s film archive cataloging stamp, Cinémathèque Française, post-production cue stamp.

Output: PNG with alpha channel, transparent background, 600×600, photorealistic.

EXCEPTION: this asset DOES contain text — specifically "ARCHIVO 1962" in red rubber-stamp style, partial and smudged. NO other text, NO logos, NO faces, NO additional graphic elements.

Alternative version: change the year to "ARCHIVO 1968" with a heavier smear on the right side.
```

#### 10 · `cine-filmstrip-fragment.png`

```text
A horizontal fragment of 35mm film strip on a transparent background, showing 3 frames side by side, each frame containing a high-contrast black-and-white photographic still (abstract — a doorway in shadow, a hand reaching, an empty street; deep blacks #0E0E0E, bleached highlights toward #F1EBDD). The film perforations along top and bottom are clearly visible, with subtle physical wear (one perforation slightly torn). The film base has a faint orange-brown tint (#A47F1F at 20%) along the unexposed edges. Slight curl at the right end. One scratch runs diagonally across the second frame.

Mood: Cinémathèque archive fragment, Cartier-Bresson contact sheet, 1965 European cinema.

Output: PNG with alpha channel, transparent background, 1200×400, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO frame numbers along the perforations, NO faces (the photographic stills must remain abstract — silhouettes, hands, doorways, never recognizable people).

Alternative version: replace the diagonal scratch with two short horizontal scratches across the first and third frames.
```

---

### 3.4 Actor

#### 11 · `actor-mustard-bg.png`

```text
Editorial collage poster background for an actor section. Base layer: warm cream paper (#E8DFCC) with frayed deckle edges, occupying the full frame. Bauhaus shapes: a large mustard yellow triangle (#D4A82C) pointing upward, anchored to the lower-left third; a smaller vermillion red circle (#C8311E) at the upper-right; a thin ultramarine blue horizontal bar (#1F2D87) crossing the middle-left. All shapes rendered as flat solid fills with subtle halftone print overlay, torn paper edges (white frayed fibers along each shape's outline). Light India ink splatter (#0E0E0E) in the upper-left. One curled corner in the lower-right with natural shadow. Heavy 1960s offset print grain.

Mood: Bauhaus theater poster, August Sander portrait studio, Henri Langlois archive.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO photographic elements. The center-right area must remain visually open for a portrait to be placed on top via CSS.

Alternative version: replace the blue horizontal bar with a thin black ink line drawn freehand.
```

#### 12 · `actor-tape-strip.png`

```text
A single strip of aged cellophane adhesive tape on a transparent background, slightly yellowed (base tone #D4A82C at 30% opacity), positioned diagonally across the canvas at a 15-degree angle. The tape is approximately 60mm wide and 700mm long in scale. Visible dust specks trapped inside the adhesive, faint air bubbles at one end, slight curl at the right tip lifting away from the surface and casting a 2mm soft shadow. The tape is semi-transparent — anything underneath would faintly show through. Background fully transparent.

Mood: archival photo album, 1965 family scrapbook, evidence dossier.

Output: PNG with alpha channel, transparent background, 800×200, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO patterns on the tape itself.

Alternative version: tape positioned horizontally with both ends curling (instead of diagonal with one curl).
```

#### 13 · `actor-portrait-frame.png`

```text
An empty Polaroid SX-70 photograph on a transparent background, top-down flat-lay view. The photograph is fully blank in its central image area (the area where a photo would be), filled with a flat solid color #DDD3BD to simulate a faded blank Polaroid that will later have a portrait inserted via CSS. The classic white Polaroid border is visible on all four sides, the bottom border being thicker (the iconic "memo" strip). The white frame is slightly aged (#E8DFCC), with one bent corner (lower-right), one small piece of cellophane tape on the upper-left corner attaching it to invisible paper, and a 2mm cast shadow under the entire object. Slight rotation, 4 degrees counterclockwise.

Mood: 1970s family album, archival material, evidence board.

Output: PNG with alpha channel, transparent background outside the Polaroid, 800×1000, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO handwritten captions on the bottom strip (it must remain blank), NO faces inside the photograph area.

Alternative version: change the bent corner to the upper-right and remove the tape (replace with a small thumbtack hole).
```

---

### 3.5 Fotografía

#### 14 · `foto-blue-poster-bg.png`

```text
Editorial collage poster background for a photography section. Base layer: deep ultramarine blue (#1F2D87) covering the full frame, with subtle gradient toward darker blue (#141E5C) in the lower-right quadrant. Heavy 1960s offset print grain across the entire surface. Layered elements: a torn strip of cream paper (#F1EBDD) with frayed fibers running diagonally from upper-left to mid-right at -8 degrees; one mustard yellow circle (#D4A82C) cropped by the right edge, halftone-overlaid; faint white scratches scattered (as if from a darkroom negative). Slight ink splatter (#0E0E0E) in the lower-left. The composition leaves the upper-right third open for typography overlay in HTML.

Mood: Saul Leiter color photography palette, Henri Cartier-Bresson contact sheet, Magnum Photos editorial.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO faces, NO photographic figures.

Alternative version: invert the diagonal — the cream paper strip runs from upper-right to mid-left instead.
```

#### 15 · `foto-shapes-overlay.png`

```text
A transparent-background composition of two Bauhaus shapes intended to overlay a deep blue background: a large cream paper square (#F1EBDD) rotated 6 degrees clockwise, positioned at 25% from the left and 50% from the top, with torn paper edges and visible fibers, halftone overlay; a smaller ultramarine blue circle (#141E5C, slightly darker than the assumed background to remain visible after screen blend) at 75% from the left and 30% from the top, flat solid fill, torn edge. Each shape has a 1mm cast shadow. Background fully transparent.

Mood: Bauhaus collage, Aleksander Rodchenko, Magnum cover composition.

Output: PNG with alpha channel, transparent background, 1920×1080, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO additional shapes.

Alternative version: swap the positions — circle on the left, square on the right.
```

#### 16 · `foto-contact-sheet.png`

```text
A high-contrast black-and-white photography contact sheet on a transparent background, showing 6 frames arranged in a 3-column 2-row grid, each frame containing an abstract photographic still (a window with curtain, a road horizon, a hand on a railing, a shadow on a wall, an empty chair, a doorway). All in deep blacks (#0E0E0E) and bleached highlights (#F1EBDD), heavy silver-gelatin print grain. Around frame 3 and frame 5, red chinagraph pencil marks (#C8311E) — a circle around frame 3, an X over frame 5 — applied as if by an editor selecting the keepers. The contact sheet paper has a slight cream tint (#E8DFCC) at the borders and a 2mm cast shadow under the whole sheet. Slight rotation, 3 degrees clockwise.

Mood: Magnum Photos editing session, Cartier-Bresson archive, 1968 photojournalism.

Output: PNG with alpha channel, transparent background outside the contact sheet, 1200×900, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO captions under the frames, NO faces in the photographic stills (only abstract architectural / object compositions).

Alternative version: change the chinagraph marks — replace the circle with a horizontal slash and add a checkmark on frame 6.
```

---

### 3.6 Escritor

#### 17 · `escritor-paper-bg.png`

```text
Editorial collage background for a writer section. Base layer: aged cream paper (#F1EBDD) covering the full frame, with very faint horizontal blue ruling lines (#1F2D87 at 15% opacity) suggesting a notebook page, but irregularly fading in and out as if the paper is composite. One coffee ring stain (#A47F1F at 40% opacity) in the lower-right. Light pencil scribble in the left margin (illegible doodles, abstract loops, no actual letters), in graphite #0E0E0E. One vertical fold crease running down the middle. Heavy print grain. Slight paper curl at the upper-right corner with natural shadow.

Mood: Joan Didion working notebook, 1968 writer's desk, archival manuscript.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces. The pencil scribble in the margin must be ABSTRACT loops and dashes — NOT readable letters or words.

Alternative version: replace the coffee ring with a small drop of black ink in the upper-left corner.
```

#### 18 · `escritor-headline-cutout.png`

```text
A magazine headline cutout on a transparent background. The headline is a single short Spanish word or short phrase rendered in a 1960s editorial serif typeface (Times New Roman or Bodoni Bold), in deep ink black #0E0E0E, on a piece of hand-torn cream paper (#F1EBDD) with frayed fibers along all four edges. The torn paper has slight aging tint (#E8DFCC) at the edges and one folded corner. Halftone print overlay on the typography. The cutout has a 2mm cast shadow.

Suggested phrase to render: "EL OFICIO" (in Spanish, all caps, two words). If the model cannot render that exact phrase, use any short evocative Spanish phrase in the same style — but keep it editorial, not slogan-like.

Output: PNG with alpha channel, transparent background outside the torn paper, 1200×300, photorealistic, top-down view.

EXCEPTION: this asset DOES contain text — specifically a short Spanish editorial phrase in serif type, on torn paper. NO other text on the asset, NO logos, NO faces.

Alternative version: render the phrase "LA PALABRA" instead, with a more aggressive tear along the bottom edge.
```

#### 19 · `escritor-typewriter-line.png`

```text
A single line of typewritten text on a transparent background, rendered as if struck on cream paper by an Olivetti Lettera 32 mechanical typewriter circa 1968. The typeface should resemble Pica-10 monospace, ink color uneven black (#0E0E0E to #1A1815 variation) with classic typewriter "ghosting" — some letters slightly lighter, some darker, occasional misalignment of 0.5mm vertical drift. The line is partial — it appears to be the start or end of a sentence, ending with a typewriter-style ellipsis "..." and trailing off. Slight roller-mark across the line.

Suggested phrase: "y entonces escribo" (in Spanish, lowercase). If the model cannot render that exact phrase, use any short Spanish lowercase phrase ending in ellipsis.

Output: PNG with alpha channel, transparent background, 1000×120, photorealistic, top-down view.

EXCEPTION: this asset DOES contain text — a short typewritten Spanish phrase in monospace. NO other text, NO logos, NO faces, NO paper visible (only the inked text floating on transparency, as if the paper underneath has been masked away).

Alternative version: render the phrase "página tras página" with stronger ink ghosting on the second word.
```

---

### 3.7 Música

#### 20 · `musica-green-bg.png`

```text
Editorial collage poster background for a music section. Base layer: deep bottle green (#1B4332) covering the full frame, with subtle gradient toward darker green (#0F2A1F) in the lower-left quadrant. Heavy 1960s offset print grain across the entire surface. Layered elements: a mustard yellow circle (#D4A82C) cropped by the upper-right corner, halftone-overlaid; a torn strip of cream paper (#F1EBDD) with frayed fibers running horizontally near the bottom, slightly tilted; one vermillion red small triangle (#C8311E) at the mid-left. Faint India ink splatter (#0E0E0E) scattered. Slight scratches in the green field as if from old vinyl sleeve wear.

Mood: Blue Note Records cover art (Reid Miles), 1965 jazz label, dust jacket of a worn LP.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO watermarks, NO faces, NO musical instruments.

Alternative version: replace the cream paper strip with a thin diagonal mustard line cutting across the lower-right.
```

#### 21 · `musica-vinyl-fragment.png`

```text
A fragment of a 12-inch vinyl record on a transparent background, top-down view, slightly cropped (about 70% of the disc visible, the rest extending past the canvas edge). Deep glossy black surface (#0E0E0E with subtle reflection highlights toward #1A1815), concentric grooves clearly visible with light catching some rings. The label at the center is a flat solid vermillion red (#C8311E), with no readable text, no logos — just abstract red color. Subtle dust specks across the disc. One scratch arc running across the upper third. The disc has a 3mm cast shadow.

Mood: Blue Note Records, ECM, 1968 jazz album archive.

Output: PNG with alpha channel, transparent background outside the disc, 1000×1000, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO catalog codes on the label, NO faces. The label must remain a flat red color with NO printed information.

Alternative version: change the label color to mustard yellow #D4A82C and add a faint circular ring shadow at the spindle hole.
```

#### 22 · `musica-staff-lines.png`

```text
A fragment of a hand-written music manuscript on a transparent background. Five horizontal staff lines drawn freehand in faded India ink (#1A1815 at 60% opacity), slightly wavy and uneven as if drawn with a dip pen. Six or seven musical notes scattered along the staff (whole notes, half notes, two beamed eighth notes), all hand-drawn with slight imperfection, no clef, no time signature, no bar lines. The composition feels like a fragment from a notebook — the staff doesn't extend to the full width, fading out at both ends. One small ink blot near the lower-right note. Slight cream paper tint visible behind the lines (#F1EBDD at 10% opacity, very faint).

Mood: Erik Satie manuscript, Federico Mompou notebook, archival music sketch.

Output: PNG with alpha channel, transparent background, 1200×400, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO clefs, NO time signatures, NO faces. Just abstract musical notes on hand-drawn staff lines.

Alternative version: shift the notes to the right half of the frame and leave the left half with empty staff lines fading in.
```

---

### 3.8 A.I

#### 23 · `ai-mustard-bg.png`

```text
Editorial collage poster background for an A.I / technology section. Base layer: warm cream paper (#E8DFCC) covering the full frame, with light grid (#0E0E0E at 10% opacity) suggesting graph paper. Layered elements: a large mustard yellow rectangle (#D4A82C) anchored to the upper-third, rendered as flat solid fill with halftone overlay and torn paper edges; a small ultramarine blue circle (#1F2D87) at the lower-right, halftone-overlaid; faint hand-drawn schematic lines in #0E0E0E running across the lower-left (abstract circuit-like geometry, no readable notation). Heavy print grain, light ink splatter. One pencil-drawn arrow in the upper-right margin pointing inward.

Mood: Bauhaus Vorkurs technical drawing, Bell Labs 1962 research notebook, Otl Aicher diagram aesthetic.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO recognizable computer iconography (no laptops, no robots, no neural net diagrams). The schematic lines must remain ABSTRACT geometry.

Alternative version: replace the mustard rectangle with a mustard half-circle at the top, sun-like.
```

#### 24 · `ai-circuit-diagram.png`

```text
A hand-drawn abstract technical schematic on a transparent background, rendered as if sketched in a 1962 engineering notebook. Black ink lines (#0E0E0E) drawn freehand, slightly wavy: a network of horizontal and vertical lines connected by small filled circles (nodes), with one or two larger empty circles serving as junctions. Composition is asymmetric, occupying about 70% of the canvas, leaving the upper-right and lower-left areas open. Two short red ink underlines (#C8311E) emphasizing certain nodes, and one or two small sky-blue accent dots (#7BB7E5) marking variable nodes (echoing the `.ai-visual .var` color already used in the site). Light pencil sketch marks (#1A1815 at 25%) underneath the inked lines, as if the drawing was first drafted in graphite. Halftone print grain overlay.

Mood: Bell Labs research diagram, MIT AI Lab notebook 1965, Otl Aicher pictogram studies (but abstract).

Output: PNG with alpha channel, transparent background, 1400×900, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces, NO recognizable computer or AI iconography. Pure abstract geometric network of lines and nodes.

Alternative version: tilt the entire diagram 4 degrees clockwise and add one faint pencil arrow pointing to a node.
```

#### 25 · `ai-margin-note.png`

```text
A short hand-written cursive note on a transparent background, rendered as if scribbled with a soft graphite pencil (HB to 2B) in a notebook margin. The handwriting is fluid, slightly slanted to the right, lowercase, in Spanish, in a personal script — not calligraphic. Pencil tone variation from #1A1815 to #4A4540 across strokes. One small underline below the note. Slight smudge along the lower edge as if the writer's hand brushed over fresh graphite.

Suggested phrase: "una herramienta más" (in Spanish, lowercase, cursive). If the model cannot render that exact phrase, use any short Spanish lowercase phrase of 3-4 words in cursive.

Output: PNG with alpha channel, transparent background, 700×200, photorealistic, top-down view.

EXCEPTION: this asset DOES contain text — a short Spanish phrase in handwritten cursive pencil. NO other text, NO logos, NO faces.

Alternative version: render the phrase "no es magia" instead, with a heavier underline.
```

---

### 3.9 About

#### 26 · `about-paper-soft-bg.png`

```text
Editorial collage background for an "about" section. Base layer: warm cream paper (#F1EBDD blending into #E8DFCC) covering the full frame, very gentle and minimal — this section is calmer than the others. One faint coffee ring (#A47F1F at 30%) in the upper-left. A single thin vermillion red horizontal line (#C8311E) running across the lower-third, hand-drawn freehand. Light ink splatter (#0E0E0E) in the lower-right corner only. Heavy 1960s offset print grain across the surface. Slight paper curl at the upper-left corner with natural shadow. Composition leaves the central 60% deliberately empty for biographical text overlay in HTML.

Mood: Joan Didion's working desk, archival biographical file, August Sander studio paper.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces. Minimal composition — restraint is the goal.

Alternative version: replace the red line with a vertical thin blue line on the right edge.
```

#### 27 · `about-photo-stack.png`

```text
A flat-lay top-down view of three Polaroid SX-70 photographs stacked with deliberate offset, on a transparent background. Each Polaroid has the classic white border (slightly aged to #E8DFCC) with the thicker bottom strip. The image areas of all three Polaroids are flat solid color #DDD3BD (faded blank, NO actual photographs printed) so that the area can later be replaced or overlaid with portraits via CSS. The three Polaroids are rotated at -7°, +3°, and -2° respectively, stacked from bottom to top with each one offset by about 80mm horizontally and 60mm vertically. Each casts a 2mm shadow on the one below. One has a small piece of yellowed cellophane tape (#D4A82C at 30%) on the upper-right corner. One has a slightly bent lower-right corner.

Mood: 1975 family album, archival memorabilia, evidence stack.

Output: PNG with alpha channel, transparent background outside the Polaroids, 1200×900, photorealistic.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO handwritten captions on the bottom strips, NO faces inside the photograph areas.

Alternative version: change the rotations to be more aggressive — first Polaroid at -15°, second at +12°, third at -5°.
```

---

### 3.10 Contact

#### 28 · `contact-stamped-card-bg.png`

```text
Editorial collage background for a contact section. Base layer: aged cream paper (#F1EBDD) covering the full frame, treated as if it were the front of a postcard or correspondence card from 1965. Elements: one vermillion red rubber-stamp circular impression (#C8311E) at the upper-right corner, partially smudged, abstract circular smear with NO readable letters; one ultramarine blue ink stamp rectangle (#1F2D87) at the lower-left, also smudged and abstract; faint pencil writing lines (illegible loops, no actual letters) suggesting an address area in the lower-right quadrant; light ink splatter (#0E0E0E) scattered. Heavy print grain. Slight paper curl at the upper-left.

Mood: 1965 air mail postcard, archival correspondence, Chris Marker travel notes.

Output: photorealistic, 4K, aspect ratio 16:9, top-down view.

Strictly NO text, NO words, NO letters, NO numbers, NO logos, NO faces. Both stamps must be abstract ink smudges WITHOUT readable lettering. The pencil writing must remain abstract loops.

Alternative version: replace the upper-right stamp with a hand-drawn red circle (no smear) and shift the blue stamp to the lower-right.
```

#### 29 · `contact-airmail-stripes.png`

```text
A vertical strip of classic air mail border pattern on a transparent background, oriented vertically as if running along the left or right edge of a postcard. The pattern consists of alternating diagonal slashes in vermillion red (#C8311E) and ultramarine blue (#1F2D87), each slash about 40mm long at a 45-degree angle, separated by 8mm of cream paper (#F1EBDD). The strip is about 80mm wide and runs the full vertical height. Edges of the strip are slightly torn (frayed paper fibers visible on both sides). Halftone print overlay, light dust specks. One small section in the middle has a slight ink bleed (#9C2515) into the cream gap.

Mood: 1962 air mail envelope border, "Par Avion" classic correspondence pattern.

Output: PNG with alpha channel, transparent background outside the strip, 200×1080, photorealistic, top-down view.

Strictly NO text, NO words, NO letters, NO numbers ("PAR AVION" must NOT appear), NO logos, NO postal markings beyond the abstract red/blue diagonal pattern, NO faces.

Alternative version: invert the pattern — start with blue at the top and alternate, instead of starting with red.
```

---

## 4 · Cómo iterar en ChatGPT

### 4.1 Si el resultado es casi correcto pero con un detalle off

No vuelvas a tirar el prompt entero — pide ajuste delta:

> *"Keep the composition, palette and texture exactly as they are. Change only [X]. Re-export at the same resolution."*

Ejemplos reales:
- *"Keep everything. Change the red rectangle to be slightly smaller and shift it 10% to the left."*
- *"Keep everything. Reduce the grain density by half — too noisy."*
- *"Keep everything. Remove the coffee ring stain and add an ink drop in the same area."*

### 4.2 Si necesitas más variedad de un mismo tipo

Pide variaciones explícitas:

> *"Generate 3 variations of this asset. Variation A: same composition, palette and mood, but flip the layout horizontally. Variation B: same composition but rotate the dominant shape 15 degrees. Variation C: same composition but shift the dominant color from `#C8311E` to `#9C2515` (deeper red)."*

### 4.3 Si el resultado tiene texto no pedido (problema típico)

GPT Image 2.0 a veces alucina texto. Si pasa:

> *"Re-export the same image but remove ALL text, letters, numbers and logos. The image should contain ONLY the visual elements I described — no typography of any kind."*

Si insiste en meter texto, repite el prompt original con la cláusula prohibitiva movida al **principio** y al **final** (doble énfasis).

### 4.4 Cómo pedir variaciones tipográficas (assets 09, 18, 19, 25)

Para los 4 assets que sí llevan texto, puedes pedir alternativas léxicas sin tocar el resto:

> *"Keep the typography style, ink density, paper, shadow and rotation identical. Change only the phrase to: '[nuevo texto]'. Same language (Spanish), same case, same length range."*

### 4.5 Recordatorio de exportación

Siempre cierra la sesión de un asset con:

> *"Export this as a high-resolution PNG file, downloadable. If the asset has transparent areas, ensure the alpha channel is preserved."*

ChatGPT entrega en 1024×1024, 1024×1536 o 1536×1024. Para ratios 16:9 (los fondos de sección), pide explícitamente *"aspect ratio 16:9"* — el modelo aproxima a 1536×864 o similar; aceptable para fondos.

---

## 5 · Slots por sección — guía rápida (dirección creativa)

### Hero
Collage estilo *"anuncio de revista años 60"* sobre el retrato Vitruvio collage que **ya existe** en `public/hero-vitruvio.png`. **NO se regenera la figura.** Solo se generan las **capas de fondo**: papel rasgado base (`hero-bauhaus-bg.png`) + formas Bauhaus desplazadas (`hero-shapes-overlay.png`) + manchas de tinta (`hero-ink-splatter.png`). El retrato Vitruvio se monta encima vía CSS. Centro vacío, esquinas con peso visual, asimetría Bauhaus.

### Cine
Sección **roja**. Poster polaco + Saul Bass + archivo cinematheque. Fondo dominado por rectángulo bermellón (`cine-red-poster-bg.png`), sello de archivo en rojo medio borroso (`cine-archive-stamp.png`), trozo de tira 35mm con perforaciones (`cine-filmstrip-fragment.png`). El texto de la sección queda sobre el rojo en blanco crudo. El sello refuerza el tono "carpeta vieja" sin caer en pastiche.

### Actor
Sección **mostaza/cálida**. Cartel de teatro Bauhaus + August Sander. Fondo papel cálido con triángulo amarillo (`actor-mustard-bg.png`), tira de cinta amarillenta diagonal (`actor-tape-strip.png`) sobre el retrato HTML, marco Polaroid vacío opcional para el portrait (`actor-portrait-frame.png`). Sensación de "ficha de casting" sobre mesa de trabajo.

### Fotografía
Sección **azul ultramar profunda**. Magnum + Saul Leiter. Fondo azul con grano y tira diagonal de papel crema (`foto-blue-poster-bg.png`), formas Bauhaus crema/azul (`foto-shapes-overlay.png`), hoja de contactos B/N con marcas de chinagraph rojo (`foto-contact-sheet.png`). El texto en blanco roto sobre el azul. Aire de "sesión de edición sobre mesa de luz".

### Escritor
Sección **ink/papel**. Joan Didion + manuscrito 1968. Fondo papel cuaderno con líneas azules desvanecidas (`escritor-paper-bg.png`), un titular recortado de revista en serif negro (`escritor-headline-cutout.png`), línea Olivetti parcial (`escritor-typewriter-line.png`). La tipografía recortada sirve como contrapunto al sistema tipográfico de la web — único sitio donde "el papel habla". Atmósfera de mesa de escritura, no de despacho.

### Música
Sección **verde botella**. Blue Note Records + ECM. Fondo verde profundo con grano, tira de papel crema y triángulo rojo (`musica-green-bg.png`), fragmento de vinilo cortado con etiqueta roja sin texto (`musica-vinyl-fragment.png`), pentagrama manuscrito desvanecido (`musica-staff-lines.png`). El texto en crema sobre verde. Aire de "funda de LP gastada", no de rave digital.

### A.I
Sección **mostaza/cálida** (paralela a actor pero diferente lenguaje). Bell Labs 1962 + Otl Aicher. Fondo papel grid con rectángulo mostaza (`ai-mustard-bg.png`), esquema técnico abstracto (`ai-circuit-diagram.png`), nota cursiva a lápiz en el margen (`ai-margin-note.png`). Cero pastiche cyberpunk: la IA aquí es un cuaderno de investigación analógico, no una pantalla. Diferenciación con actor: en actor manda el triángulo + cinta + Polaroid; en AI mandan grid + diagrama + lápiz.

### About
Sección **calma**, papel. Joan Didion + archivo biográfico. Fondo papel suave con marcas mínimas (`about-paper-soft-bg.png`), pila de Polaroids vacías que el CSS rellena con retratos de archivo (`about-photo-stack.png`). El texto biográfico respira — esta sección es **menos collage que las demás** porque el about es donde la voz se vuelve íntima.

### Contact
Sección **postal**. Tarjeta de correspondencia 1965 + Chris Marker. Fondo papel con sello rojo y matasellos azul abstracto (`contact-stamped-card-bg.png`), tira lateral de correo aéreo rojo/azul (`contact-airmail-stripes.png`). Los datos de contacto (email, teléfono) viven sobre la tarjeta como si fueran los campos de una postal. Sensación de "envíame una carta" más que "completa un formulario".

---

## 6 · Checklist final antes de pasar a Fase 02

- [ ] Los 16 assets P1 están claros y no tienes dudas sobre su prompt.
- [ ] La paleta usada en los prompts coincide 1:1 con los HEX de `src/styles/style.css`.
- [ ] Las 4 excepciones de texto (09, 18, 19, 25) están aceptadas — el resto va sin tipografía quemada.
- [ ] Sabes en qué orden vas a generarlos en ChatGPT (sugerencia: universales primero, luego por sección de mayor a menor presencia visual: hero → cine → fotografía → música → actor → AI → escritor → about → contact).
- [ ] Los prompts P2 quedan reservados como "extras" — solo generar si hay tiempo en Fase 02.
- [ ] Confirmado con el usuario antes de pasar a la Fase 02 (descarga + montaje en `public/textures/`).

> **Nota final**: si al ejecutar un prompt en ChatGPT el resultado es claramente peor que la dirección descrita aquí, no aceptes el asset — itera con la sección 4 antes de dejarlo. Es preferible 25 assets sólidos que 30 mediocres. La Fase 03 va a poner mucha responsabilidad visual en estos PNG.
