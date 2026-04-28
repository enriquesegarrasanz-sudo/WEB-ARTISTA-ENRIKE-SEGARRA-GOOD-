# FASE 05: Integración secciones escritor + música + A.I

> Pegar entero como primer mensaje en un chat nuevo, o decir *"ejecuta la fase 05"* en este chat.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

> ⚠️ Fase manual de verificación.

## Objetivo de esta fase
Aplicar el sistema de texturas a las secciones `escritor`, `musica` y `ai`, respetando sus identidades (papel crema con tipografía editorial; verde profundo música; tonos tecnológicos para A.I). Estas tres tienen personalidad más fuerte, así que los assets son más específicos.

## Precondiciones
- [ ] Fase 03 completada y commiteada (sistema CSS funcional).
- [ ] Recomendable: Fase 04 también commiteada — para no provocar conflicto en `style.css`.
- [ ] `public/textures/` con assets específicos para escritor/musica/ai listados en `MANIFEST.md`.
- [ ] Rama `feat/collage-textures` activa.

## 🤖 Modelo y esfuerzo
- **Modelo**: Sonnet 4.6
- **Esfuerzo**: Medio.

## 📝 Prompt ejecutable

### 1. Sección `.escritor` (id="escritor", `index.html` línea 514)
- Fondo actual: papel crema con tipografía densa.
- Identidad: máquina de escribir, manuscrito, página rasgada con anotaciones a mano.
- Capas a añadir:
  - `paper-base.webp` con `background-blend-mode: multiply`.
  - `escritor-bg-manuscript.webp` (asset específico — página de manuscrito mecanografiado borroso al 40%, manchas de tinta, tachones, esquinas dobladas). `mix-blend-mode: multiply`, `opacity: 0.7` (debe quedar muy sutil para no competir con el texto).
  - `grain-overlay.webp` global con `opacity: 0.25`.
- Decoración: una mancha de café o tinta (`escritor-stain.webp`) en una esquina, rotada al gusto.
- **Cuidado**: esta sección probablemente lleva mucho texto narrativo. Verificar legibilidad en lectura larga, no solo titulares.

### 2. Sección `.musica` (id="musica", `index.html` línea 564)
- Fondo actual: verde profundo (verificar HEX en `style.css` línea ~1175).
- Identidad: caja de discos, vinilo, partitura, disco rayado.
- Capas a añadir:
  - `musica-bg-paper-green.webp` (asset específico — papel rasgado teñido de verde oscuro). `mix-blend-mode: multiply`, `opacity: 0.85`.
  - `grain-overlay.webp` con `mix-blend-mode: screen` (fondo oscuro, mismo truco que `.fotografia`), `opacity: 0.2`.
- Decoración: forma circular tipo vinilo o etiqueta de disco (`musica-vinyl-label.webp`) detrás del player, opacidad baja, `z-index: -1`.
- **Cuidado especial con el player de audio embebido**: no aplicar grano encima del player; mantener la zona del player con `position: relative; z-index: 2` para que quede por delante de las capas de textura.

### 3. Sección `.ai` (id="ai", `index.html` línea 641)
- Fondo actual: cromática mixta (verificar en `style.css`).
- Identidad: collage tecno-editorial, formas geométricas digitales mezcladas con papel rasgado — *exactamente* el lenguaje de los posters de referencia que el usuario mostró ("Introducing ChatGPT Images 2.0").
- Capas a añadir:
  - `paper-base.webp` con `background-blend-mode: multiply`.
  - `ai-bg-bauhaus.webp` (asset específico — composición geométrica Bauhaus rojo/azul/amarillo sobre papel rasgado, exactamente referenciando los posters compartidos). `mix-blend-mode: multiply`, `opacity: 0.85`.
  - `grain-overlay.webp` con `opacity: 0.3`.
- Decoración: 1-2 formas geométricas adicionales sueltas (rectángulo rojo, círculo amarillo) posicionadas con CSS, rotadas 4-7°, fuera del flujo del texto.
- **Esta sección es la "joya"** del rediseño — la dirección creativa de los posters de referencia se materializa aquí más que en ninguna otra. Iterar hasta que recuerde a los posters.

### Patrón común
- Reusa las utilities de `textures.css`. No tirar CSS nuevo que ya existe.
- Si el grano vuelve ilegible un párrafo, baja `--tx-grain-opacity` en esa sección.
- Mantén `z-index` ordenado: textura de fondo (-1), contenido (1), elementos interactivos como player o lightbox (2+).

**Restricciones**:
- No tocar las secciones hero/cine/actor/fotografia/about/contact en esta fase.
- No reescribir el sistema base de `textures.css`.
- Mantener identidad cromática actual de cada sección — solo añadir capas, no cambiar el color base.

**Después de aplicar las tres**:
```bash
npm run build
npm run dev
```
Verifica navegador. Itera con el usuario si una sección no convence — sobre todo `.ai`, que debe alcanzar el nivel visual de los posters de referencia.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `simplify` — al cerrar.
  - `cinematic-portfolio-reviewer` — sobre la sección `.escritor` y `.musica` específicamente.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🔗 Dependencias
- Depende de: Fase 03.
- Paraleliza con: Fase 04 (conceptualmente — secuencial en archivos).

## 🛡️ Verificación
- [ ] `npm run build` pasa.
- [ ] Las tres secciones renderizan en navegador con sus texturas.
- [ ] El player de música queda por encima de las capas (clic funciona, no está oculto).
- [ ] Contraste de texto largo en `.escritor` validado para lectura cómoda.
- [ ] La sección `.ai` evoca visualmente los posters de referencia.
- [ ] No hay regresión en hero/cine/actor/fotografia.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures`, Fase 04 commiteada (recomendado, evita conflictos).
- **Commit sugerido**: `feat: integrar texturas collage en escritor, música y A.I`.
- **Si verificación falla**: `git reset --hard HEAD` y reintentar.

## ⚠️ Riesgos de esta fase
- `.escritor` tiene texto largo — texturas demasiado fuertes lo hacen ilegible. **Mitigación**: opacidad muy baja en grano y manuscrito (`opacity: 0.25`-`0.4`).
- `.ai` carga la mayor expectativa visual del rediseño. Si no queda como los posters, hay que iterar varias veces. **Mitigación**: dedicar tiempo a esta sección; aceptar 2-3 rondas de prompt+regenerar en ChatGPT si hace falta volver a Fase 02.
- **Rollback**: `git reset --hard HEAD~1`.

## ✅ Criterio de finalización
Las tres secciones renderizan correctamente, contraste validado, sin regresiones, build limpio, commit hecho. La sección `.ai` evoca los posters de referencia.
