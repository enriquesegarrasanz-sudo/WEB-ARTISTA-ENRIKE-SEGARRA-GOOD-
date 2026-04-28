# PROMPT DE IMPLEMENTACIÓN — Hero de enrikesegarra.com

> Este prompt es para Claude Code. Describe con precisión lo que hay que construir en HTML + CSS partiendo del estado actual del proyecto (`hero.html` + `hero.css` + los assets existentes en `assets/`). La referencia visual que lo guía es la imagen adjunta.
>
> **Al pasar este prompt a Claude Code, adjunta también la imagen de referencia.**

---

## Contexto del proyecto

Estoy rediseñando el hero de mi portfolio personal. El stack es HTML + CSS plano + Vite + JS vanilla. No hay frameworks.

Los archivos de partida están en la carpeta `claude-design-hero/` dentro del repo:
- `hero.html` — markup actual del hero (aislado, con nav incluida)
- `hero.css` — CSS actual completo (variables de paleta, tipografías, todo el bloque hero)
- `assets/hero-vitruvio.png` — figura central (el "Vitruvio" con 6 brazos, 1:1)
- `assets/hero-bauhaus-canvas.webp` — canvas de fondo actual (papel + formas Bauhaus, 16:9)

Cuando Claude Code aplique el resultado al proyecto real, los archivos destino son:
- `index.html` (bloque hero, líneas 42-84)
- `src/styles/style.css` (bloque hero, aprox. líneas 182-444)
- `src/styles/textures.css`

---

## Lo que se construye: descripción precisa de la referencia visual

La imagen de referencia es la guía absoluta. Describe cada capa a continuación.

### 1 — Fondo: papel rasgado + formas Bauhaus de color

El fondo del hero es papel cremoso (`#F1EBDD`) con textura de rasgado visible. Sobre ese papel hay **formas geométricas planas y grandes** en los colores del sistema de diseño existente (`--red`, `--blue`, `--mustard`, `--green`, negro). Las características de estas formas:

- Son **irregulares, con bordes rasgados/orgánicos** — no rectángulos perfectos. El efecto es de collage: como si hubieran arrancado papel de colores y los hubieran pegado.
- Ocupan las **esquinas y bordes del viewport**, llegando hasta el filo de la pantalla (overflow: hidden en el hero las recorta).
- Distribución aproximada en la referencia:
  - **Arriba-izquierda:** bloque rojo (`--red`) grande que cubre esquina superior izquierda, con puntos de semitono (halftone) en negro superpuestos.
  - **Arriba-derecha:** bloque azul (`--blue`) en esquina superior derecha.
  - **Abajo-izquierda:** semicírculo / mancha negra grande y un bloque azul (`--blue`) recortado en el borde inferior izquierdo.
  - **Abajo-derecha:** bloque mostaza (`--mustard`) y bloque verde (`--green`) solapándose en la esquina inferior derecha, llegando al borde.
  - **Dispersos:** un círculo negro grande abajo-izquierda, un semicírculo negro en el centro-derecha.
- Las formas tienen entre sí **solapamientos parciales** que generan el efecto collage.
- Estas formas son **decorativas y no interactivas** (pointer-events: none).
- Se implementan como divs absolutamente posicionados con `border-radius` muy alto o SVG paths con curvas suaves para imitar el rasgado orgánico. Alternativamente con `clip-path` irregular.

### 2 — Figura central: el Vitruvio

- Se usa `assets/hero-vitruvio.png` exactamente igual que hoy: figura centrada, 1:1, transparente.
- Ocupa **el centro del hero** verticalmente, más hacia arriba que el centro exacto (unos 55% desde arriba).
- Tamaño: grande, que respire — en la referencia la figura ocupa aproximadamente el 50% del alto del viewport.
- **Conservar** la animación de entrada (`vitruvioEnter`) y la respiración (`vitruvioBreathe`).
- **Conservar** el canon SVG (círculo + cuadrado que se dibujan).

### 3 — Las 6 tarjetas de color detrás de cada herramienta

Esta es la diferencia más importante respecto al hero actual. En la referencia, **cada uno de los 6 brazos del Vitruvio sostiene un objeto sobre una tarjeta/polaroid de color**. Estas tarjetas hacen visibles las 6 disciplinas sin depender de las zonas de hover — son affordance permanente.

| Disciplina | Color de tarjeta | Objeto visible |
|---|---|---|
| FOTOGRAFÍA | Azul `--blue` | Cámara de foto |
| CINE | Rojo `--red` | Cámara de cine |
| ESCRITOR | Blanco/papel | Páginas de guion (sin tarjeta de color) |
| ACTOR | Mostaza `--mustard` | Máscara teatral |
| A.I | Negro `--ink` | Pantalla/tablet con "A.I" escrito |
| MÚSICA | Verde `--green` | Guitarra eléctrica |

**Implementación:** las tarjetas son los propios `div.hero-zone` a los que se añade un `background-color` semitransparente (o sólido) correspondiente a su `--section-accent`. En el hero actual son invisibles; en el nuevo son visibles con su color.

Cada `.hero-zone` pasa de ser un div transparente a tener:
```css
background: var(--section-accent);
border-radius: 4px;
opacity: 0.85; /* Ligeramente translúcida para que el Vitruvio se vea debajo */
```

El `data-label` (FOTOGRAFÍA, CINE, etc.) sigue apareciendo en hover con el comportamiento actual, pero ahora hay contexto visual permanente.

### 4 — Puntos de semitono (halftone) en el área roja

En la zona roja superior-izquierda hay **puntos de semitono en negro**, efecto clásico de impresión offset/Bauhaus. Se implementan con CSS:
```css
background-image: radial-gradient(circle, #0E0E0E 1px, transparent 1px);
background-size: 8px 8px;
opacity: 0.25;
mix-blend-mode: multiply;
```
Solo en la capa roja superior-izquierda.

### 5 — Líneas finas de registro (crosshairs)

En la referencia aparecen finas líneas negras (cruces/crosshairs de registro tipográfico) en las áreas de color, que refuerzan la estética de impresión Bauhaus. Se implementan como SVG inline o pseudo-elementos. Son decorativas.

### 6 — Bloque tipográfico: ENRIKE / SEGARRA

- **Posición:** abajo-izquierda del hero, anclado al borde inferior. Padding lateral generoso.
- **Fuente:** Bebas Neue (`--font-display`).
- **"ENRIKE"** en negro (`--ink`), tamaño enorme: `clamp(80px, 13vw, 200px)`.
- **"SEGARRA"** en rojo bermellón (`--red`), mismo tamaño.
- Las dos palabras van en líneas separadas, sin espacio entre ellas (line-height muy ajustado).
- A la derecha del bloque de nombre hay el grupo editorial: la tagline en Fraunces itálica + el barcode. Separados por una línea vertical fina (el `border-left` actual funciona bien).

### 7 — Navegación (no cambiar)

La nav actual (`nav.top`, `mix-blend-mode: difference`, Bebas Neue, E.S. logo) se conserva exactamente. No es objeto de este rediseño.

---

## Comportamiento responsive

### Desktop (> 1024px)
El hero tal como lo describe la referencia visual.

### Tablet (768px – 1024px)
- Las formas de color se reducen en tamaño un 20-30% para no tapar la figura.
- El Vitruvio se mantiene centrado y grande (mínimo 70% del viewport de ancho, sin exceder el viewport).
- El bloque tipográfico baja el font-size con `clamp` pero mantiene la posición abajo-izquierda.
- Las zonas clickables (`.hero-zone`) aumentan su área táctil mínima a 44px de alto × 44px de ancho.

### Mobile portrait (< 768px)
- Las formas de color se simplifican: solo 3-4 manchas más pequeñas, sin solaparse con la figura.
- El Vitruvio ocupa el **70-75% del ancho del viewport**, centrado horizontalmente.
- Debajo del Vitruvio (no solapado), el bloque tipográfico se recoloca en el eje horizontal: `ENRIKE / SEGARRA` a ancho completo, tamaño `clamp(52px, 14vw, 80px)`.
- La tagline y el barcode van debajo del nombre, también a ancho completo.
- Las 6 `.hero-zone` en mobile pasan a ser una **fila de 6 iconos/labels debajo de la figura** en lugar de estar superpuestos sobre ella — para respetar los tap targets mínimos.
- La respiración del Vitruvio permanece desactivada en mobile (ya está así).

---

## Restricciones técnicas

1. **Paleta cerrada.** Sólo los hex definidos en `:root` en `hero.css`. No añadir colores nuevos.
2. **Tres fuentes, no más.** Bebas Neue, Fraunces, EB Garamond. Ya están cargadas por Google Fonts.
3. **No hay frameworks ni librerías JS.** Todo en CSS puro + HTML semántico.
4. **El asset `hero-vitruvio.png` se usa tal cual.** Si la composición propuesta necesita una versión siluetada/recortada del Vitruvio (sin fondo blanco), especificarlo — pero la imagen original ya tiene fondo transparente.
5. **Las 6 zonas clickables deben conservar** su `data-target` y `data-label`, y el JS del spotlight (`is-spotlight`) sigue funcionando.
6. **Las animaciones CSS existentes** (`vitruvioEnter`, `vitruvioBreathe`, `canonDraw`, `canonAppear`) se conservan salvo indicación explícita de sustituirlas.

---

## Entregable esperado

Código HTML + CSS listo para reemplazar:
- El bloque `<section class="hero">` en `index.html`.
- Las reglas CSS del hero en `src/styles/style.css` (desde `.hero {` hasta el final del bloque hero).
- `src/styles/textures.css` actualizado si hay cambios en la capa de textura.

Con comentarios claros que indiquen qué líneas del original se sustituyen o se añaden.

---

**Al ejecutar este prompt, adjunta la imagen de referencia del hero para que Claude Code pueda verla directamente y comparar mientras implementa.**
