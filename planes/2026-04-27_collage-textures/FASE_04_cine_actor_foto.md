# FASE 04: Integración secciones cine + actor + foto

> Pegar entero como primer mensaje en un chat nuevo, o decir *"ejecuta la fase 04"* en este chat.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual de verificación — el código compila programáticamente, pero solo el navegador certifica que se ve bien.

## Objetivo de esta fase
Aplicar el sistema CSS de texturas (creado en Fase 03) a las secciones `cine`, `actor` y `fotografia`, respetando la identidad cromática actual de cada una (papel crema, papel cálido, azul ultramar respectivamente).

## Precondiciones
- [ ] Fase 03 completada y commiteada — sistema CSS de texturas funcional, hero validado.
- [ ] `public/textures/` contiene los assets específicos para cine/actor/foto listados en `MANIFEST.md`.
- [ ] Rama `feat/collage-textures` activa.

## 🤖 Modelo y esfuerzo
- **Modelo**: Sonnet 4.6
- **Esfuerzo**: Medio.

## 📝 Prompt ejecutable

Aplica el sistema de texturas a estas tres secciones, en este orden:

### 1. Sección `.cine` (id="cine", `index.html` línea 111)
- Fondo actual: papel crema (`var(--paper)`).
- Capas a añadir:
  - `paper-base.webp` con `background-blend-mode: multiply` sobre el crema existente.
  - `cine-bg-collage.webp` (asset específico de Fase 02 — collage editorial cinematográfico, esquinas rasgadas, mancha de tinta roja en una esquina) como pseudoelemento `::before` con `mix-blend-mode: multiply` y `opacity: 0.85`.
  - `grain-overlay.webp` universal con `mix-blend-mode: overlay`, `opacity: 0.3`.
- Decoración geométrica: una forma Bauhaus roja sutil (rectángulo o semicírculo) detrás del eyebrow "01 / FILMS", desplazada -20px y rotada 3°, `z-index: -1`.

### 2. Sección `.actor` (id="actor", `index.html` línea 305)
- Fondo actual: papel cálido (`var(--paper-warm)`).
- Capas a añadir:
  - `paper-base.webp` con `background-blend-mode: multiply`.
  - `actor-bg-collage.webp` (asset específico — recortes de obra teatral, máscaras, papel rasgado más oscuro). Misma técnica que cine.
  - `grain-overlay.webp` con `opacity: 0.35` (un punto más fuerte, da textura "papel viejo de programa de teatro").
- Decoración: cinta adhesiva amarillenta diagonal en la esquina superior izquierda (`actor-tape.webp`), rotada -8°, `position: absolute`, `top: 40px`, `left: 30px`.

### 3. Sección `.fotografia` (id="fotografia", `index.html` línea 426)
- Fondo actual: azul ultramar profundo (verificar HEX en `style.css` línea ~709).
- Capas a añadir:
  - `foto-bg-paper-blue.webp` (asset específico — papel rasgado teñido de azul oscuro, NO el papel crema universal porque chocaría con el fondo). `mix-blend-mode: multiply`, `opacity: 0.9`.
  - `grain-overlay.webp` con `mix-blend-mode: screen` (sobre fondo oscuro, screen funciona mejor que overlay), `opacity: 0.25`.
- Decoración: clip de cámara o tira de negativos (`foto-negatives.webp`), posicionado en el lateral derecho de la cabecera de sección, rotado 5°.
- **Cuidado especial con el grid de fotos**: las miniaturas tienen su propio fondo — verificar que el grano global no se aplica encima de las imágenes (usar `pointer-events: none` y posicionar la capa de grano detrás del grid con `z-index`).

### Patrón común para las tres
- Reutiliza las clases utility `.tx-paper`, `.tx-grain`, `.tx-layer` del módulo `textures.css` creado en Fase 03. **No dupliques CSS** — si necesitas un blend mode distinto, usa una variable CSS local (`--tx-blend: multiply`) sobre la utility.
- Verifica contraste de cada `.section-title` y `.eyebrow` sobre la nueva textura. Si el grano vuelve ilegible un texto, baja la opacidad del grano localmente con `--tx-grain-opacity: 0.2`.

**Restricciones**:
- No tocar el grid de proyectos/fotos en sí — solo el fondo de las secciones que los contienen.
- No tocar las secciones escritor/musica/ai/about/contact en esta fase.
- No regenerar el sistema base — reúsalo desde `textures.css`.
- Mantén coherencia con la Fase 03: mismas variables CSS, mismas utilities.

**Después de aplicar las tres**:
```bash
npm run build
npm run dev
```
Verifica las tres secciones en navegador. Si una no convence, ajusta `opacity` o `blend-mode` antes de commitear.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `simplify` — pasarla al final para detectar duplicación CSS entre secciones.
  - `cinematic-portfolio-reviewer` — verificar al cierre.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno — toque CSS, secuencial.

## 🔗 Dependencias
- Depende de: Fase 03.
- Paraleliza con: Fase 05 — pero **conceptualmente**, no a la vez (ambas tocan `style.css`). Ejecuta una después de la otra en el orden que prefieras.

## 🛡️ Verificación
- [ ] `npm run build` pasa.
- [ ] Cada una de las tres secciones se ve en navegador con la nueva textura sin romper la layout existente.
- [ ] Contraste de títulos validado (WCAG AA).
- [ ] El grid de fotos en `.fotografia` no tiene grano superpuesto sobre las miniaturas.
- [ ] No hay regresión en hero (sigue viéndose como tras Fase 03).
- [ ] Inspección móvil (DevTools) en cada sección.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures`, Fase 03 commiteada.
- **Commit sugerido**: `feat: integrar texturas collage en cine, actor y fotografía`.
- **Si verificación falla**: `git reset --hard HEAD` y reintentar.

## ⚠️ Riesgos de esta fase
- Sección `.fotografia` tiene fondo oscuro y grid denso — los blend modes que funcionan en cine/actor (papel crema) no funcionan igual aquí. **Mitigación**: el asset es específico (`foto-bg-paper-blue`), no se reutiliza el papel crema.
- Tres secciones a la vez aumenta riesgo de duplicación CSS. **Mitigación**: pasar `simplify` al final.
- **Rollback**: `git reset --hard HEAD~1`.

## ✅ Criterio de finalización
Las tres secciones renderizan correctamente con sus texturas, contraste validado, no hay regresión en hero, build limpio, commit hecho.
