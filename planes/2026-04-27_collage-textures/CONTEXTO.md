# Contexto compartido del plan

**Proyecto**: enrike-segarra-web — portfolio personal (cine · foto · actor · escritor · música · A.I)
**Ruta absoluta del repo**: `C:/Users/i-gamer/Documents/CODEX/PÁGINA WEB ENRIKE`
**Stack**: Vite 5 + JS modular + CSS plano (sin framework). Sin TypeScript, sin tests automáticos.
**Estructura relevante**:
- `index.html` — single-page con 9 `<section>` (hero, cine, actor, fotografia, escritor, musica, ai, about, contact).
- `src/main.js` — render dinámico de proyectos/series (importa `src/data/*.js`).
- `src/styles/style.css` — todos los estilos, ~2.800 líneas, una sección CSS por bloque.
- `public/` — assets servidos tal cual (ya contiene `hero-vitruvio.png`, la imagen del retrato del hero).

**Convenciones del repo**:
- Commits estilo: `feat:`, `perf:`, `fix:` en minúscula con scope opcional (ej. `perf: extraer imagen hero base64 → public/hero-vitruvio.png`).
- Variables CSS ya definidas: `--paper`, `--paper-warm`, `--paper-edge`, `--ink`, `--red`. Cada sección tiene su color de fondo (cine/about: papel crema; foto: azul profundo; música: verde oscuro; etc.).
- Cada `<section id="X">` tiene su propia clase CSS hermana — patrón: `.X .eyebrow`, `.X .section-title`, fondo aplicado al `<section>` directamente.

**Estado inicial**:
- Rama base: `master`. Último commit relevante: `eb00837 perf: extraer imagen hero base64 → public/hero-vitruvio.png`.
- Hay cambios sin commitear en `index.html`, `src/main.js`, `src/styles/style.css` — el plan asume que esos cambios se commitean (o se descartan) **antes** de arrancar la Fase 03.
- Hero ya tiene la imagen del retrato collage de Enrike. No hay todavía texturas de fondo "rotura/papel envejecido" — eso es lo que añade este plan.

**Idea creativa que vertebra el rediseño**:
- Cada sección tiene su color y su lenguaje visual, pero la web entera debe leerse como **un mismo collage editorial roto** — papel rasgado, grano de impresión, manchas de tinta, cintas adhesivas, formas geométricas Bauhaus (rojo/azul/amarillo) sobre fondos crudos, tipografía editorial densa.
- Inspiración explícita: posters "Introducing ChatGPT Images 2.0" y "GPT Image 2.0 — Image generation with a point of view" (Bauhaus + Nouvelle Vague + papel rasgado).
- Los assets de textura **no se generan con CSS puro** — se generan con ChatGPT (GPT Image 2.0) como PNG, se descargan y se montan en `public/textures/` como capas que el CSS combina con `mix-blend-mode`, `mask-image` y `background-blend-mode`.

**Entorno de ejecución**:
- Windows 11 con bash disponible (Git Bash). Los comandos de espera en cola autónoma usan sintaxis bash — funcionan en Git Bash, **no** en PowerShell nativo.

Este documento se referencia desde cada `FASE_*.md`. Si algo transversal cambia, edítalo aquí — no dupliques contexto en las fases.
