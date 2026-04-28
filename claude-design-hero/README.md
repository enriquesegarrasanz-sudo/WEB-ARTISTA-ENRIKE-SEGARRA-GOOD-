# Paquete para Claude Design — Rediseño del HERO

Esta carpeta es **autocontenida**. Todo lo que Claude Design necesita para entender el hero actual, el porqué del rediseño y las restricciones está aquí dentro. No hace falta abrir el resto del repo.

---

## Orden sugerido al pegar el contexto en Claude Design

1. **`BRIEF.md`** — empezar aquí. Es el documento que dice qué quiero, qué no quiero, qué se queda y qué está abierto. El más importante.
2. **`CONTEXTO.md`** — el *por qué* detrás del proyecto entero ("Silent Cinema", una mirada en seis lenguajes, referencia a canadacanada.com). Explica la dirección creativa.
3. **`hero.html`** — el HTML aislado del hero actual, con la nav incluida sólo como contexto visual.
4. **`hero.css`** — el CSS aislado del hero actual. Incluye paleta cerrada, tipografías, animaciones y todas las reglas del bloque hero. Combina lo extraído de `style.css` y `textures.css`.
5. **`assets/hero-vitruvio.png`** — la ilustración del Vitruvio contemporáneo (1:1, ~564KB). Es el ancla visual del hero, no se sustituye.
6. **`assets/hero-bauhaus-canvas.webp`** — el canvas de fondo Bauhaus (16:9, ~143KB). Papel + formas planas + rasgado inferior horneados en el asset.

---

## Lo que se espera de Claude Design

Está descrito en la sección 8 de `BRIEF.md`:

- Mock(s) de hero rediseñado para **desktop**.
- Mock equivalente para **mobile** (no como afterthought).
- Notas de composición.
- Listado de cambios técnicos que implicaría implementar la propuesta.

---

## Lo que Enrike añadirá fuera de este paquete

- Referencias visuales propias (frames, posters, otras webs) — las pega directamente en la conversación con Claude Design.
- Iteraciones de feedback sobre las propuestas.
