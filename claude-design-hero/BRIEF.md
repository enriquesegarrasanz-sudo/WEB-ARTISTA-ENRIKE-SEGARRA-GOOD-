# BRIEF — Rediseño del HERO de enrikesegarra.com

> Documento para Claude Design.
> Lo que hay hoy + lo que quiero + lo que NO se toca.
> Rellenado por Claude (Code) a partir del estado del repo. Si algo no encaja con la cabeza de Enrike, él lo corrige antes de enviar.

---

## 1 · Quién soy y qué es esta web

Soy **Enrike Segarra**: cineasta, fotógrafo, escritor, intérprete, músico y *vibe coder* con IA. Esta web es mi portfolio personal. Su trabajo es muy concreto: que quien entre entienda en menos de cinco segundos que **no soy seis profesionales distintos, soy una sola mirada en seis lenguajes**.

La dirección visual del proyecto se llama internamente **"Silent Cinema"** — papel cremoso, tinta negra profunda, tipografía con autoría, cero decoración gratuita, todo lo que no sea obra desaparece. La paleta es cerrada y la tengo bien.

---

## 2 · Qué hay hoy en el HERO (estado actual)

El hero actual ya hace cosas que me gustan y otras que no. Resumen objetivo de lo que está construido:

- **Fondo:** un canvas Bauhaus elegante (`hero-bauhaus-canvas.webp`) — papel cremoso con formas planas geométricas integradas, ya con el rasgado inferior horneado dentro del propio asset.
- **Centro:** una ilustración del **Hombre de Vitruvio contemporáneo** (yo, con seis brazos sosteniendo cámara de foto, cámara de cine, guion, máscara, guitarra y tablet de IA) sobre la que se dibuja el canon (círculo + cuadrado) en SVG durante la entrada.
- **Animaciones:** el Vitruvio entra con `vitruvioEnter` (fade + scale + rotación leve) y luego respira con `vitruvioBreathe` (translateY infinito de 6s). El círculo y el cuadrado se trazan con stroke-dashoffset.
- **Interacción:** sobre la imagen hay **6 zonas clickables transparentes** — una por oficio (FOTOGRAFÍA, CINE, ESCRITOR, A.I, ACTOR, MÚSICA). Cada zona tiene `data-target` (ancla a su sección) y `data-label` (etiqueta tipográfica que aparece en hover, Bebas Neue bermellón). Al hover se aplica un spotlight (overlay crema) sobre el resto.
- **Footer del hero:** abajo a la izquierda — `ENRIKE SEGARRA` enorme en Bebas Neue (con "Segarra" en bermellón), bloque editorial en Fraunces itálica con la tagline ("Cine, foto, escritura, interpretación, música, IA. Una sola mirada en distintos lenguajes."), y un mini código de barras decorativo.

---

## 3 · Qué me chirría / qué quiero cambiar

Lo digo crudo:

1. **El centro pesa más que el mensaje.** El Vitruvio funciona como concepto pero se come la composición. Quiero que la primera lectura no sea *"qué bonita ilustración"* sino *"este tío me está mirando a la cara y me está diciendo algo"*. Necesito jerarquía editorial: primero la voz, después el icono.
2. **No siento el cine.** El hero hoy huele más a editorial impreso que a cinematógrafo. Quiero que respire **lenguaje audiovisual** — letterboxing, ficha técnica, tipografía que recuerde a títulos de crédito, una sensación de *frame congelado*.
3. **Las 6 zonas clickables se notan poco.** Sin hover, no hay pista de que la imagen es interactiva. Necesito un *affordance* sutil pero presente — algo que diga "esto se toca" sin gritarlo.
4. **El bloque ENRIKE SEGARRA está bien tipográficamente pero compite con el Vitruvio en lugar de orquestarse con él.** Quiero composición, no convivencia forzada.
5. **Móvil sin resolver.** Hoy en pantallas estrechas el hero pierde fuerza: el Vitruvio se queda pequeño, las zonas clickables son demasiado pequeñas para dedo, el footer se rompe en cualquier orden. **Necesito que el rediseño llegue cerrado en desktop Y mobile.**

---

## 4 · Lo que SÍ quiero conservar (no negociable)

- **La paleta cerrada.** Los hex de `:root` están en `hero.css`. No introducir colores nuevos. Cada oficio tiene su acento (rojo cine, azul foto, mostaza actor/AI, verde música, tinta escritor).
- **Las tres tipografías.** Bebas Neue (display), Fraunces (editorial itálica), EB Garamond (cuerpo). No añadir una cuarta.
- **El concepto del Vitruvio como núcleo.** Es la metáfora — una persona, seis brazos. Eso se queda. Cómo se compone alrededor, abierto a propuesta.
- **Las 6 zonas clickables con sus labels.** El sistema de navegación por hover sobre la figura me gusta como mecánica. Acepto que el affordance se rediseñe, pero la mecánica (hover → label, click → ancla) se queda.
- **Papel cremoso + textura sutil.** Nada de fondos planos, nada de degradados modernos. Esto es papel.

---

## 5 · Lo que SÍ está abierto a rediseño

- Composición global del hero (proporciones, jerarquía, ejes).
- Cómo se relaciona el Vitruvio con el bloque tipográfico (puede dejar de estar centrado, puede haber overlap, puede haber rotación).
- Affordance de las zonas clickables (números, brackets, hairlines, ficha técnica al lado, índice numerado tipo crédito de película — abierto).
- Jerarquía y posición del footer (ENRIKE SEGARRA + tagline + barcode).
- Letterboxing, márgenes negros, slate de cine, timecodes, tipografía de subtítulo — **bienvenidos** si refuerzan la lectura cinematográfica.
- La animación de entrada y la respiración pueden replantearse — no son sagradas, son parte del estado actual.

---

## 6 · Mobile — requisitos explícitos

- El Vitruvio tiene que seguir siendo el ancla visual, pero **no puede dominar al 100% del viewport**: necesita aire arriba (nav) y abajo (nombre + tagline). Hoy se queda pequeño y descentrado.
- Las **zonas clickables tienen que ser táctiles reales** — mínimo 44px de tap target. Si en mobile las zonas dejan de estar pegadas al cuerpo del Vitruvio y pasan a ser una lista/grid de 6 enlaces debajo de la imagen, perfecto. Lo importante es que se entiendan como navegación primaria.
- Tipografía mobile: el `clamp()` ayuda pero no resuelve la composición. Quiero ver el rediseño pensado para portrait (ratio típico 9:19.5) desde el primer momento, no como adaptación tardía.
- La respiración del Vitruvio ya está apagada en mobile (`@media max-width: 720px`). Eso se queda.

---

## 7 · Restricciones técnicas

- Stack actual: HTML + CSS plano + Vite + JS vanilla. Nada de frameworks. Todo lo que entregue Claude Design tiene que poder traducirse a este stack.
- Las animaciones son CSS puro (`@keyframes`). Si proponéis algo que requiera librería de animación, marcadlo claro para poder valorar.
- Asset hero (`hero-bauhaus-canvas.webp`) es 16:9 (1672x941). Si la propuesta requiere otra ratio o regenerar el canvas, indicarlo.
- La imagen del Vitruvio (`hero-vitruvio.png`) es 1:1, 564KB. Si se necesita versión recortada/silueta sin fondo para nuevas composiciones, decirlo.
- Las coordenadas de las 6 `.hero-zone` están calculadas en % sobre la imagen 1:1. Si la composición cambia, hay que recalcular esos %.

---

## 8 · Entregables esperados de Claude Design

1. **Mock(s) desktop** del hero rediseñado — al menos una propuesta cerrada, idealmente dos variantes para comparar.
2. **Mock mobile** equivalente — no como afterthought, como parte del mismo ejercicio.
3. **Notas de composición**: qué se mueve, qué tipografía pesa más, qué se gana respecto al hero actual.
4. **Listado de cambios técnicos** que implicaría implementar la propuesta (si hay que regenerar assets, recalcular zonas clickables, añadir capas, etc).

---

## 9 · Lo que adjunta Enrike aparte de este paquete

- Referencias visuales propias (websites, frames, posters, tipografía) — las añade en la conversación con Claude Design, no van en este zip.
- Posibles preferencias de composición que hayan salido en otras conversaciones y que no estén capturadas aquí.

---

**Fin del brief.** El resto del paquete (`hero.html`, `hero.css`, `assets/`, `CONTEXTO.md`) está para que Claude Design pueda leer el estado actual sin tener que pedirme nada más.
