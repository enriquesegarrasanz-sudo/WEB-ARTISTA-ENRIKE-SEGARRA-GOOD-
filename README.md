# Enrike Segarra — Web

Web personal de Enrike Segarra. Una sola mirada en distintos lenguajes: cine, fotografía, escritura, interpretación, música y construcción con IA.

## Stack

- **Vite** (vanilla JS, sin framework)
- **HTML / CSS / JS modular** — la maqueta original (`enrike-web-v10.html`) está repartida en archivos editables sin tocar el diseño.
- Tipografías: Bebas Neue · Fraunces · EB Garamond (Google Fonts).

## Estructura

```
.
├── index.html                  # HTML estructural (nav, secciones, lightbox)
├── package.json
├── vite.config.js
├── public/                     # Assets estáticos (favicon, imágenes pesadas, fuentes locales)
└── src/
    ├── main.js                 # Punto de entrada — orquesta toda la lógica
    ├── styles/
    │   └── style.css           # Sistema visual completo (paleta, tipografía, todas las secciones)
    ├── data/
    │   ├── projects.js         # PROJECTS — fichas técnicas de proyectos cinematográficos
    │   ├── series.js           # SERIES — series fotográficas con páginas tipo libro
    │   └── scripts.js          # SCRIPTS — guiones (sección Escritor)
    └── modules/                # (vacío por ahora, listo para extraer funciones a su archivo)
```

## Comandos

```bash
npm install          # Instala dependencias
npm run dev          # Servidor de desarrollo en http://localhost:5173
npm run build        # Build de producción → dist/
npm run preview      # Preview del build
```

## Cómo modificar contenido

| Quiero cambiar… | Edito… |
|---|---|
| Añadir/editar proyecto de cine | `src/data/projects.js` |
| Añadir/editar serie de fotografía | `src/data/series.js` |
| Añadir/editar guion | `src/data/scripts.js` |
| Cambiar paleta, tipografía, espaciado | `src/styles/style.css` (variables `:root` al inicio) |
| Cambiar estructura de una sección | `index.html` (busca `<!-- ============== 0X / NOMBRE ==============` ) |
| Cambiar lógica del lightbox / filtros / archivo | `src/main.js` |

## Maqueta de referencia

El diseño parte del archivo `enrike-web-v10.html` (4429 líneas, paleta cerrada v3, dirección "Silent Cinema"). Esa maqueta es la verdad visual: cualquier cambio debe respetarla salvo decisión explícita.
