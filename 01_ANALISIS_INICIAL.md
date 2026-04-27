# Análisis inicial — Rediseño de enrikesegarra.com

**Fecha:** 2026-04-17
**Autor:** Enrique Segarra (con Claude)
**Estado:** Fase de análisis / pre-diseño
**Referencias:** https://enrikesegarra.com (actual, Adobe Portfolio) · https://www.canadacanada.com (referencia visual/cinematográfica)

---

## 0 · Contexto y limitaciones del análisis

- Auditoría profunda realizada sobre **canadacanada.com** (modelo técnico: carruseles `translate3d`, variables CSS de viewport, múltiples bitrates de Vimeo, metadatos de créditos estructurados).
- De **enrikesegarra.com** se ha leído la estructura (HOME / PHOTOGRAPHY / FILMMAKER / ABOUT ME / CONTACT) pero **no el contenido interno**: Adobe Portfolio carga los proyectos dinámicamente por JS. Para un desmenuzado pieza por pieza pendiente hacer auditoría visual con herramienta de browser.
- Análisis basado también en perfil de memoria de Enrique (cineasta/productor, vibe coder, trabaja con FRAME, español, intuición fuerte de producto).

---

## 1 · Diagnóstico de la web actual

Problema clásico del Adobe Portfolio: **funciona pero no comunica autoría**. Es un contenedor de trabajo, no una declaración de intenciones.

- **La arquitectura divide en vez de unir.** HOME → PHOTOGRAPHY → FILMMAKER → ABOUT ME comunica "aquí hago una cosa / aquí otra". El visitante sale con la sensación de haber visto **dos portfolios cosidos**, no a un autor.
- **El tratamiento del vídeo es plano.** Thumbnails estáticas con click → play. Ningún lenguaje cinematográfico en *cómo* se presenta el cine. Techo bajo para alguien que vive de lo audiovisual.
- **La identidad visual es la del tema, no la tuya.** Tipografía genérica, paleta neutra de plantilla, sin voz propia.
- **Cero jerarquía de proyectos.** No hay pieza marquesina que diga *esto es lo que soy*.
- **Sin ecosistema.** No hay puente claro a redes, prensa, contacto profesional diferenciado (bookings actor / briefs cliente / colaboraciones). Añadir "actor" encima de esto sería parchear, no coser.

**Traducción:** la web actual es correcta. No es memorable. Y una web personal de autor no vende corrección — vende mirada.

---

## 2 · Qué hace que Canada funcione (mecanismos a reutilizar)

Tres mecanismos concretos, útiles para un portfolio personal:

1. **El vídeo *es* la página.** Grid de reproducciones constantes, sin autoplay ruidoso pero con movimiento permanente. La web respira como un montaje.
2. **Escala por densidad de crédito.** Cada proyecto lleva 30-50+ líneas de ficha técnica. Construye prestigio sin decirlo. Enrique trabaja con equipos reales, DPs, producciones — oro actualmente no mostrado.
3. **El creativo como marca, no anónimo.** Directors y Photographers tienen ficha propia con nombre. La web personal debería tratar a Enrique exactamente igual.

**Lo que NO copiar:** Canada es una productora con muchos directores. Enrique es **una persona**. Si imita un layout de catálogo-multi-talento parecerá vacío ("¿solo hay uno?"). Necesitamos el *lenguaje cinematográfico* de Canada aplicado a una **voz única**.

---

## 3 · La pregunta real: cómo unificar filmmaker + foto + actor

Este es el 80% del problema. La respuesta no es "tres pestañas bonitas".

**Clave: dejar de pensar en disciplinas y empezar a pensar en una mirada.**

El visitante no tiene que entender que hace tres cosas. Tiene que entender **por qué las hace**. Fotografía, dirección y actuación son la misma práctica desde tres ángulos: observar, componer, habitar. Si la web deja claro ese hilo, pasar de foto → corto → reel de actor no se siente como "ahora otra sección" — se siente como *seguir leyendo al mismo autor*.

### Tres decisiones arquitectónicas propuestas

1. **Una sola home, un solo feed.** No segregar por disciplina en la navegación principal. La home es corriente continua de trabajo — un videoclip, al lado una serie de foto, al lado un reel de actuación. Filtrar por tipo como opción, no como default.
2. **El proyecto es la unidad, no la disciplina.** Cada ítem del feed lleva tag (Film / Photography / Performance), año, rol (Director / DP / Actor / Photographer) y ficha técnica al estilo Canada. El mismo lenguaje cubre los tres mundos.
3. **Un manifiesto corto en lugar de "About Me".** Tres o cuatro frases que expliquen la mirada, no el CV. El CV va abajo, plegado.

---

## 4 · Dirección visual propuesta — *"Silent Cinema"*

> **Silent Cinema**: negro profundo, tipografía con autoría (una serif de display para el nombre + una sans neutra de peso editorial para UI), vídeo siempre en movimiento silencioso en loop, transiciones tipo fundido cinematográfico, cero decoración gratuita. Todo lo que no sea obra desaparece.

**Emoción diana:** *quedarse*. Que el visitante no quiera cerrar la pestaña.

### Sistema mínimo (borrador)

- **Color:** un solo negro (~#0A0A0A), un solo blanco roto para texto, un acento muy sutil (cálido apagado para links/hover). Nada más. Ningún gradiente.
- **Tipografía:** 1 display con carácter (tipo GT Sectra, Editorial New, Canela) + 1 sans neutra trabajada (tipo Söhne, ABC Diatype, o Inter bien usado). Dos fuentes, no tres.
- **Movimiento:** loops de vídeo suaves en el grid (como Canada), hover que *revela* metadato. Transiciones 300-500ms con easing cinematográfico.
- **Grid:** asimétrico. Jerarquía por escala. Una pieza marquesina, dos medianas, el resto respirando.

---

## 5 · Próximos pasos (antes de tocar una línea de código)

1. **Material base del usuario:** lista de proyectos (foto + filmmaker + actor), reels actuales, bio larga, 2-3 referencias más además de Canada.
2. **Auditoría visual frame-a-frame** de la web actual con herramienta de browser (capturas, anotaciones, diagnóstico por proyecto).
3. **Decisión de stack técnico:** Next.js + Vercel + CMS (Sanity/Payload) para añadir proyectos sin depender del desarrollador. Esta decisión condiciona todo.
4. **Cerrar dirección visual** con 2-3 mocks antes de construir.
5. **Construcción por fases** (workflow habitual de Enrique).

---

## 6 · Preguntas abiertas para Enrique

1. ¿Hacer ahora la auditoría visual con browser (análisis proyecto a proyecto) o ir primero a material y dirección?
2. ¿Existe ya material de "actor" (reel, fotos de casting, algún piloto) o es pestaña puramente futura?
3. Además de Canada, ¿1-2 webs más de referencia (aunque sean de otro sector)? Con tres referencias se triangula mejor el gusto.
