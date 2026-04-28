# FASE 03: Sistema CSS de texturas + aplicación al hero

> Pegar entero como primer mensaje en un chat nuevo, o decir *"ejecuta la fase 03"* en este chat.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual de verificación — el código compila programáticamente, pero solo el navegador certifica que se ve bien.

## Objetivo de esta fase
Crear el sistema CSS reutilizable que aplica las texturas como capas (papel base + grano + manchas + formas Bauhaus) usando `mix-blend-mode`, `mask-image` y pseudoelementos. Aplicarlo primero al **hero** como prueba — si el hero queda bien, el resto de secciones reutilizan el sistema.

## Precondiciones
- [ ] Fase 02 completada — `public/textures/` con todos los P1 + `MANIFEST.md`.
- [ ] Rama `feat/collage-textures` activa.
- [ ] Cambios pendientes en `index.html`/`src/main.js`/`src/styles/style.css` ya commiteados o stasheados desde el inicio del plan.
- [ ] `npm install` ya hecho (vite disponible).

## 🤖 Modelo y esfuerzo
- **Modelo**: Sonnet 4.6
- **Esfuerzo**: Medio — el sistema CSS se diseña una vez, después se reutiliza.

## 📝 Prompt ejecutable

1. **Crea un módulo CSS dedicado**: `src/styles/textures.css`. Importa este módulo desde `src/main.js` (después del import de `style.css`) o concaténalo al final de `style.css` si prefieres no añadir un import nuevo. Decide según la convención del repo — la primera importación CSS está en `src/main.js`, manténte consistente.

2. **Define el sistema de capas como variables CSS y clases utility**:
   - Variables nuevas en `:root`:
     ```css
     --tx-paper:   url('/textures/paper-base.webp');
     --tx-grain:   url('/textures/grain-overlay.webp');
     --tx-tear-t:  url('/textures/tear-edge-top.webp');
     --tx-tear-b:  url('/textures/tear-edge-bottom.webp');
     ```
   - Clase utility `.tx-layer` que se aplica como pseudoelemento `::before` o `::after` con `position: absolute; inset: 0; pointer-events: none;` y `mix-blend-mode` parametrizable vía variable CSS local.
   - Clase utility `.tx-paper` aplica la textura papel base como fondo de la sección con `background-blend-mode: multiply` sobre el color sólido existente.
   - Clase utility `.tx-grain` añade grano de impresión universal con `mix-blend-mode: overlay` y `opacity: 0.35`.
   - Clases `.tx-tear-top` y `.tx-tear-bottom` añaden el borde rasgado entre secciones usando `mask-image` para que la sección termine con bordes irregulares en vez de línea recta.

3. **Aplica el sistema al hero** (sección `id="hero"`, líneas ~43 de `index.html`, estilo en `src/styles/style.css`):
   - Mantener `public/hero-vitruvio.png` exactamente como está (es el retrato collage del usuario, no se toca).
   - Añadir capas detrás del retrato:
     - Capa 1: `paper-base.webp` con `background-blend-mode: multiply` sobre el color crema actual.
     - Capa 2: 2-3 formas Bauhaus (asset `hero-bauhaus-shapes.webp` que viene de Fase 02) posicionadas tras el retrato con `z-index` por debajo y `transform` ligero (rotación 2-4°, desplazamiento 30-60px) para sensación de collage.
     - Capa 3: `grain-overlay.webp` global del hero con `mix-blend-mode: overlay` y `opacity: 0.4`.
   - El retrato del Vitruvio queda **encima** de todas las capas, sin alterar.
   - Texto "ENRIKE SEGARRA" mantiene legibilidad — verificar contraste sobre la nueva textura, ajustar opacidades si hace falta.

4. **No toques otras secciones** — la integración de cine/actor/foto/etc. va en Fases 04-06.

5. **Verifica que el build compila**:
   ```bash
   npm run build
   ```
   Si falla, corrige antes de declarar la fase terminada.

6. **Verifica visualmente**:
   ```bash
   npm run dev
   ```
   Abre `http://localhost:5173`. El hero debe verse como un collage editorial con textura de papel rasgado al fondo, formas Bauhaus desplazadas, grano visible, retrato del Vitruvio nítido encima.

**Restricciones**:
- No reescribas el CSS existente del hero — añade capas, no sustituyas.
- No alteres `public/hero-vitruvio.png`.
- No toques `src/main.js` salvo para añadir el import del nuevo módulo CSS si decides crearlo.
- Si una textura no carga (404), revisa que el nombre del archivo en `public/textures/` coincide exactamente con el referenciado en CSS (Vite sirve `public/` desde la raíz `/`).

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `simplify` — al cerrar la fase, pasarla para detectar duplicación o variables CSS huérfanas.
  - `cinematic-portfolio-reviewer` — al verificar visualmente, valida que el hero respeta los principios del cine editorial.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno — toque CSS localizado, mejor secuencial.

## 🔗 Dependencias
- Depende de: Fase 02 (necesita los assets en disco).
- Paraleliza con: —

## 🛡️ Verificación
- [ ] `npm run build` pasa sin errores.
- [ ] `npm run dev` arranca y el hero se renderiza con las nuevas capas.
- [ ] Inspector de DevTools: confirmar que cada textura carga (Status 200 en Network, no 404).
- [ ] Texto "ENRIKE SEGARRA" mantiene contraste WCAG AA sobre la textura (usar extensión axe DevTools o color-contrast-checker).
- [ ] Performance: medir LCP en DevTools — si pasa de 2.5s, optimizar peso de los assets antes de avanzar.
- [ ] Inspección móvil simulada (DevTools responsive): el collage no rompe en 375px de ancho.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures`, working tree limpio (cambios previos commiteados).
- **Commit sugerido**: `feat: sistema CSS de texturas collage + aplicación al hero`.
- **Si verificación falla**: `git reset --hard HEAD` (descarta los cambios) y reintentar con prompt ajustado.

## ⚠️ Riesgos de esta fase
- El sistema CSS define el lenguaje para las 4 fases siguientes — un mal diseño aquí se paga 6 veces. **Mitigación**: probar el hero a fondo antes de declarar la fase cerrada.
- `mix-blend-mode` puede tener comportamiento inesperado en Safari iOS — verificar en navegador real, no solo Chrome.
- **Rollback**: `git reset --hard HEAD~1` si la fase ya está commiteada y el resultado no convence.

## ✅ Criterio de finalización
La fase termina cuando: build pasa, hero se ve correctamente en navegador con las capas integradas, contraste validado, commit hecho.
