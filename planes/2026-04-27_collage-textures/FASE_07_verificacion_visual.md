# FASE 07: Verificación visual + responsive

> ⚠️ Fase manual del usuario — la inspección visual final no la puede hacer Claude. Esta fase la ejecutas tú con el navegador.

**Plan-slug**: `collage-textures`
**Ruta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`

## Objetivo de esta fase
Cierre del rediseño: verificación humana en navegador real (desktop + móvil), ajustes finos de opacidad/posición/peso de assets, decisión sobre merge a `master`.

## Precondiciones
- [ ] Fases 03-06 completadas y commiteadas en `feat/collage-textures`.
- [ ] `npm run build` pasa sin errores.
- [ ] Acceso a un navegador de escritorio (Chrome/Firefox/Safari) y a un móvil real (iOS o Android).

## 🤖 Modelo y esfuerzo
- **Modelo**: ninguno.
- **Esfuerzo**: Medio (1-2 horas de inspección + ajustes).

## 📝 Checklist de verificación

### A. Desktop — recorrido completo
1. `npm run dev` y abrir `http://localhost:5173` en Chrome y Firefox.
2. Recorrer las 9 secciones de arriba a abajo. Por cada una, anotar:
   - ¿La textura aporta o estorba?
   - ¿Hay zonas donde el grano vuelve ilegible un texto?
   - ¿Las formas Bauhaus se sienten intencionales o aleatorias?
   - ¿Las roturas entre secciones se ven naturales?
3. Si algo no convence, abre un chat con Claude y dile *"ajusta la opacidad del grano en la sección X"* o *"prueba otra forma Bauhaus en la sección Y"*. **No vuelvas a regenerar todo** — son retoques.

### B. Móvil real
1. Despliega temporalmente con `npm run build && npx serve dist`, accede desde el móvil con la IP local de tu PC, o usa ngrok para exponerlo.
2. Recorre las 9 secciones en el móvil.
3. Foco en:
   - Roturas entre secciones — ¿se ven o quedan demasiado pequeñas?
   - Texturas — ¿se cargan o quedan blancas (pueden indicar `mask-image` no soportado en Safari iOS antiguo)?
   - Performance — ¿scroll fluido o tartamudea?

### C. Performance
1. DevTools → Lighthouse en modo móvil 3G.
2. Métricas objetivo:
   - LCP < 2.5s
   - CLS < 0.1
   - Total bundle size < 3 MB (texturas incluidas)
3. Si LCP pasa el umbral: reducir peso de los assets o lazy-loadear los de secciones bajo el fold.

### D. Accesibilidad
1. DevTools → Lighthouse → Accessibility.
2. Score objetivo: ≥ 90.
3. Foco en contraste de texto sobre texturas — extensión axe DevTools señala los fallos.

### E. Cross-browser
- Chrome (Win/Mac)
- Firefox (Win/Mac)
- Safari (Mac + iOS)
- Edge (Win)
- `mix-blend-mode` y `mask-image` están bien soportados en navegadores modernos pero verifica.

### F. Commit final y merge
Cuando todo esté OK:
```bash
git -C "C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE" checkout master
git -C "C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE" merge feat/collage-textures
```
O abrir PR si la web está hospedada en GitHub con revisión.

## 🧩 Skills y subagentes
- **Skills existentes que aplican**:
  - `cinematic-portfolio-reviewer` — pase final sobre la web entera.
  - `security-auditor` — opcional si vas a desplegar a producción tras esta fase.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno — verificación humana.

## 🔗 Dependencias
- Depende de: Fase 06.
- Paraleliza con: —

## 🛡️ Verificación
- [ ] Recorrido completo en desktop sin issues.
- [ ] Recorrido completo en móvil real sin issues.
- [ ] Lighthouse Performance ≥ 80 móvil.
- [ ] Lighthouse Accessibility ≥ 90.
- [ ] Cross-browser OK.
- [ ] Decisión tomada: merge a master, mantener en rama, o iterar más.

## 🌿 Git en esta fase
- **Antes**: todas las fases anteriores commiteadas.
- **Commit sugerido**: solo si haces ajustes menores — `style: ajustes finos de opacidad y posición en texturas`.
- **Si verificación falla en un punto concreto**: volver a la fase específica (ej. *"vuelve a la fase 05 y baja el grano de música"*) sin rehacer todo.

## ⚠️ Riesgos de esta fase
- Que descubras un problema de fondo (peso excesivo, mask no soportado en iOS) que requiera regenerar assets en Fase 02. **Mitigación**: aceptar el coste, volver a Fase 02 con prompts ajustados.
- Que el resultado conjunto no convenza aunque cada sección por separado sí. **Mitigación**: chat de iteración con Claude para retoques.

## ✅ Criterio de finalización
La fase termina cuando: la web entera se ve coherente en desktop y móvil, performance OK, accesibilidad OK, y has decidido si haces merge a master o sigues iterando.
