# FASE 02: Generación de imágenes en ChatGPT

> ⚠️ Fase manual — la ejecuta el usuario fuera de Claude Code, en chat.openai.com con GPT Image 2.0. Claude no puede automatizar este paso.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

## Objetivo de esta fase
Producir todos los PNG de textura listados en `PROMPTS_CHATGPT.md`, optimizarlos a WebP/AVIF, y depositarlos en `public/textures/` con nombres exactos que la Fase 03 espera encontrar.

## Precondiciones
- [ ] Fase 01 completada — `PROMPTS_CHATGPT.md` existe y aprobado.
- [ ] Acceso a ChatGPT Plus/Pro con modelo de imagen activado (GPT Image 2.0 o equivalente).
- [ ] Herramienta de conversión instalada — opciones: `squoosh.app` (drag-drop, sin instalar), `cwebp` (CLI), o el plugin Squoosh dentro del propio Claude Code si se prefiere.

## 🤖 Modelo y esfuerzo
- **Modelo**: ninguno (manual del usuario).
- **Esfuerzo**: Alto en tiempo (1-3 horas según iteraciones), bajo en complejidad técnica.

## 📝 Instrucciones para el usuario

1. **Crea la carpeta de assets**:
   ```bash
   mkdir -p "C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE/public/textures"
   ```

2. **Para cada asset listado en `PROMPTS_CHATGPT.md`**:
   1. Abre un chat nuevo en ChatGPT con el modelo de imagen activado.
   2. Pega el prompt exacto del documento.
   3. Si el primer resultado no convence, usa la variación incluida o pide ajustes específicos ("keep composition, change red shape to a smaller circle, lower the grain intensity").
   4. Descarga el PNG en máxima resolución.
   5. Renómbralo al `Asset ID` exacto del inventario (ej. `paper-base.png`, `cine-bg-collage.png`).
   6. Guárdalo en `public/textures/`.

3. **Optimización (al final, en lote)**:
   - Convierte cada PNG a WebP con calidad 82-88. Mantén el PNG original solo si la imagen tiene transparencia crítica o detalles que WebP destruye visualmente.
   - Resultado: `paper-base.webp`, `cine-bg-collage.webp`, etc.
   - Tamaño objetivo por asset: ≤ 250 KB. Si pesa más, baja calidad o reduce dimensiones (no necesitamos 4K para fondos detrás de texto).
   - Conserva los PNG originales en `public/textures/_originals/` (Git-ignored) por si hay que volver a optimizar.

4. **Verificación visual de cada asset antes de dar la fase por cerrada**:
   - Abre cada WebP en el navegador (drag-drop sobre Chrome).
   - ¿La paleta cuadra con la del CSS? Si no, regenera o corrige en Photoshop/Affinity.
   - ¿El centro queda mayoritariamente vacío para que entre el texto encima? Si no, regenera con el prompt ajustado.

5. **Inventario final**:
   - Crea `public/textures/MANIFEST.md` con: `nombre del archivo | sección | propósito | dimensiones reales | peso final`. La Fase 03 lo lee para saber qué archivos integrar.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**: ninguna directamente — esta fase es manual del usuario fuera de Claude Code.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🔗 Dependencias
- Depende de: Fase 01 (necesita los prompts).
- Paraleliza con: —

## 🛡️ Verificación
- [ ] `public/textures/` contiene todos los assets P1 listados en `PROMPTS_CHATGPT.md` con los nombres exactos.
- [ ] Cada asset pesa ≤ 250 KB (excepciones documentadas en `MANIFEST.md`).
- [ ] `public/textures/MANIFEST.md` existe y lista todos los archivos.
- [ ] Test rápido en navegador: abrir 3-4 assets aleatorios y verificar paleta + composición.
- [ ] **Añadir `public/textures/_originals/` al `.gitignore`** antes de commitear.

## 🌿 Git en esta fase
- **Antes**: rama `feat/collage-textures` creada desde `master` (si no existe).
- **Commit sugerido**: `assets: añadir texturas collage generadas con ChatGPT`. Si el peso total supera 5 MB, considera Git LFS o servir desde CDN (decidir antes de commitear).
- **Si verificación falla**: regenerar los assets que no cumplan, no avanzar a Fase 03 hasta que el inventario esté completo.

## ⚠️ Riesgos de esta fase
- **Tiempo**: las iteraciones en ChatGPT son lentas. Reserva una sesión dedicada de 2 horas mínimo.
- **Inconsistencia entre assets**: si los generas en sesiones diferentes y con muchas iteraciones, la "voz visual" puede divergir. **Mitigación**: empieza por los 4 universales (`paper-base`, `grain-overlay`, `tear-edge-top`, `tear-edge-bottom`) — definen el lenguaje base; los demás se generan después referenciando explícitamente esos.
- **Peso del repo**: si añades 30 PNG a 1 MB cada uno, el repo crece 30 MB. **Mitigación**: WebP obligatorio, considera CDN si pesa demasiado.
- **Rollback**: borrar `public/textures/` y volver a empezar.

## ✅ Criterio de finalización
La fase termina cuando `public/textures/` contiene todos los assets P1 con sus nombres canónicos, `MANIFEST.md` está actualizado, y el usuario confirma visualmente que la dirección creativa es coherente entre assets.
