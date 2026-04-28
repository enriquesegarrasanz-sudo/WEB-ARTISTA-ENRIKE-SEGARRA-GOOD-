# FASE 06: Roturas entre secciones + about + contact

> Pegar entero como primer mensaje en un chat nuevo, o decir *"ejecuta la fase 06"* en este chat.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual de verificación.

## Objetivo de esta fase
Cerrar el sistema visual: aplicar texturas a `about` y `contact`, e introducir las **roturas entre secciones** — la idea central del rediseño según el usuario: "que se notara esa rotura, esa textura, como un puzzle por capas". Cada transición entre secciones tendrá un borde rasgado (no recto) con `mask-image`, dando sensación de papeles superpuestos.

## Precondiciones
- [ ] Fases 04 y 05 completadas y commiteadas.
- [ ] `public/textures/` con `tear-edge-top.webp`, `tear-edge-bottom.webp`, `about-bg.webp`, `contact-bg.webp`.
- [ ] Rama `feat/collage-textures` activa.

## 🤖 Modelo y esfuerzo
- **Modelo**: Sonnet 4.6
- **Esfuerzo**: Medio-alto — las roturas entre secciones tocan a todas las secciones en su `::before`/`::after`, requiere cuidado.

## 📝 Prompt ejecutable

### Parte A — Texturas en about y contact

**Sección `.about`** (id="about", `index.html` línea 678):
- Fondo actual: papel crema.
- Capas:
  - `paper-base.webp` con `background-blend-mode: multiply`.
  - `about-bg-collage.webp` (asset específico — collage editorial sobrio: una cámara antigua, una hoja mecanografiada, sello de archivo). `mix-blend-mode: multiply`, `opacity: 0.6` (sutil, esta sección es de lectura).
  - `grain-overlay.webp` con `opacity: 0.3`.
- Decoración: pequeño sello "ARCHIVO" o número de página en una esquina (`about-stamp.webp`), rotado.

**Sección `.contact`** (id="contact", `index.html` línea 713):
- Fondo actual: oscuro o crema (verificar en `style.css`).
- Identidad: nota manuscrita, sobre, postal.
- Capas:
  - `contact-bg-envelope.webp` (asset específico — fondo tipo sobre/postal envejecido, esquinas dobladas, sello postal). Aplicación según fondo actual (multiply si crema, screen si oscuro).
  - `grain-overlay.webp` con `opacity` ajustada al fondo.
- Decoración: forma de sello postal en el bloque de email.

### Parte B — Roturas entre secciones (la pieza central)

Esto es lo que el usuario describió como *"que cada apartado tuviera como una rotura, que se notara esa textura, esa rotura, como si fuera una revista de editorial pero con rotura"*.

Implementación:
1. **Añadir un pseudoelemento `::after` a cada `<section>`** con el borde inferior rasgado:
   ```css
   section::after {
     content: '';
     position: absolute;
     left: 0; right: 0; bottom: -1px;
     height: 60px;
     background: inherit;  /* hereda el color de la sección */
     mask-image: var(--tx-tear-b);
     mask-size: cover;
     mask-repeat: no-repeat;
     -webkit-mask-image: var(--tx-tear-b);
     -webkit-mask-size: cover;
     pointer-events: none;
   }
   ```
   Resultado: el final de cada sección ya no es una línea recta — son fibras de papel rasgado que se proyectan sobre la sección siguiente.

2. **Añadir un `::before` a cada sección** con el borde superior, similar pero usando `tear-edge-top.webp`. Esto crea el efecto "papel superpuesto" — cada sección parece pegada encima de la anterior.

3. **Excepciones**:
   - El hero no necesita `::before` (es la primera sección).
   - El contact no necesita `::after` (es la última).
   - Las secciones consecutivas con el mismo color de fondo (si las hubiera) no necesitan rotura — la rotura solo aporta cuando hay cambio cromático.

4. **Variar la rotura entre secciones** para que no se vea repetitiva:
   - 3-4 variaciones de tear-edge (`tear-edge-top-1.webp`, `tear-edge-top-2.webp`, etc.) generadas en Fase 02.
   - Asignar una variación distinta a cada transición. Si solo hay 1-2 variaciones, rotar/espejar con `transform: scaleX(-1)` para multiplicar.

5. **Cuidado con el layout**: las secciones que tienen `overflow: hidden` cortarán las roturas. Asegúrate de que `section { overflow: visible; position: relative; }` en las que toquen rotura, o usa `padding-bottom` extra para acomodar los 60px de mask sin que pise el contenido.

### Parte C — Coherencia global del collage

Repaso final de toda la web, no solo about/contact:
1. Recorre las 9 secciones en navegador.
2. Verifica que las roturas casan visualmente: el final rasgado de cine debe encajar con el inicio rasgado de actor sin huecos blancos ni solapamientos feos.
3. Comprueba el navbar fijo: las texturas de fondo no deben emerger por encima del navbar (verificar `z-index` del nav).
4. Inspección móvil real: las roturas a 60px pueden ser desproporcionadas en 375px de ancho — usar `height: clamp(30px, 6vw, 60px)`.

**Restricciones**:
- No alterar el contenido HTML de las secciones — solo CSS.
- No reescribir las texturas aplicadas en fases anteriores.
- Mantener accesibilidad: las roturas decorativas no deben capturar clics (`pointer-events: none` siempre).

**Después**:
```bash
npm run build
npm run dev
```
Recorrido visual completo de la web. Iterar si las roturas no convencen.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `simplify` — pase final sobre `style.css` y `textures.css` para detectar duplicación tras 4 fases de adiciones.
  - `cinematic-portfolio-reviewer` — pase final sobre toda la web.
- **Skills a crear**: ninguna.
- **Subagentes**: `Explore` — opcional, para auditar el `style.css` final y detectar reglas huérfanas o conflictivas si el archivo ha crecido mucho.

## 🔗 Dependencias
- Depende de: Fase 04 y Fase 05.
- Paraleliza con: —

## 🛡️ Verificación
- [ ] `npm run build` pasa.
- [ ] About y contact renderizan con texturas.
- [ ] Las 7 roturas entre secciones (hero→cine, cine→actor, actor→fotografia, fotografia→escritor, escritor→musica, musica→ai, ai→about, about→contact) se ven correctamente — borde rasgado, sin huecos blancos.
- [ ] Roturas no capturan clics (verificar haciendo clic sobre la zona rasgada — debe llegar al elemento de debajo).
- [ ] Navbar fijo siempre por encima de las texturas.
- [ ] Inspección móvil real (no solo DevTools): las roturas se ven proporcionadas en 375px.
- [ ] Contraste WCAG AA validado en about y contact.
- [ ] Performance global: LCP < 2.5s, CLS < 0.1.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures`, Fases 04 y 05 commiteadas.
- **Commit sugerido**: `feat: roturas entre secciones + texturas en about y contact`.
- **Si verificación falla**: `git reset --hard HEAD` y reintentar.

## ⚠️ Riesgos de esta fase
- `mask-image` con `-webkit-` prefix puede comportarse diferente en Safari iOS vs Chrome. **Mitigación**: probar en navegador iOS real si es posible, o usar BrowserStack/Sauce Labs.
- Roturas mal alineadas pueden mostrar huecos blancos entre secciones. **Mitigación**: `bottom: -1px` (overlap deliberado de 1px), y verificar visualmente cada transición.
- Tras 4 fases de añadir CSS, `style.css` crece significativamente. Si baja la mantenibilidad, considerar partir en módulos por sección (no obligatorio en esta fase, mejor en una refactorización separada).
- **Rollback**: `git reset --hard HEAD~1`.

## ✅ Criterio de finalización
Las 7 roturas entre secciones renderizan correctamente, about y contact tienen sus texturas, navegador móvil real validado, contraste OK, build limpio, commit hecho. La web entera se lee como un collage editorial coherente.
