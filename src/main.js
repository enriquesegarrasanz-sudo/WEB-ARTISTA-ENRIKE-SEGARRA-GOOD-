// =============================================================================
// Enrike Segarra — main.js
// Punto de entrada de la app. Importa estilos, datos y orquesta toda la lógica
// de interacción: lightbox, scroll reveal, hero zones, filtros de foto, archivo.
// =============================================================================

import './styles/style.css';
import { PROJECTS } from './data/projects.js';
import { SERIES } from './data/series.js';
import { SCRIPTS } from './data/scripts.js';


  /* ============== Reveal on scroll ============== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ============== Hero zones — interacción ==============
     Tres comportamientos:
     1. Hover: activa spotlight (oscurece resto del Vitruvio).
     2. Click: flash bermellón breve + scroll suave a la sección.
     3. Parallax sutil del Hero al scrollear (se desactiva en móvil
        y si el usuario pidió reducir movimiento). */
  const vitruvio = document.querySelector('.vitruvio');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.hero-zone').forEach(zone => {
    zone.addEventListener('mouseenter', () => {
      if (vitruvio) vitruvio.classList.add('is-spotlight');
    });
    zone.addEventListener('mouseleave', () => {
      if (vitruvio) vitruvio.classList.remove('is-spotlight');
    });

    zone.addEventListener('click', () => {
      // Flash bermellón
      zone.classList.add('is-flashing');
      setTimeout(() => zone.classList.remove('is-flashing'), 220);

      // Scroll suave a la sección, con un pequeño retardo para que se vea el flash
      const id = zone.dataset.target;
      const target = document.getElementById(id);
      setTimeout(() => {
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 140);
    });
  });

  /* Parallax sutil: el Hero entero se desplaza un poco más lento que
     el scroll real. Aplicado a .hero-stage para no pisar las animaciones
     de entrada/respiración que viven en .vitruvio y .vitruvio-img.
     Solo en desktop y si no hay reduce-motion. */
  const heroStage = document.querySelector('.hero-stage');
  if (heroStage && !reduceMotion && window.innerWidth > 720) {
    let pending = false;
    window.addEventListener('scroll', () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroStage.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        }
        pending = false;
      });
    }, { passive: true });
  }

  /* ============== Lightbox — base + router ============== */
  const lightbox       = document.getElementById('lightbox');
  const lightboxBody   = document.getElementById('lightbox-body');
  const lightboxCap    = document.getElementById('lightbox-caption');
  const lightboxClose  = lightbox.querySelector('.lightbox-close');
  const thumbsBar      = document.getElementById('monograph-thumbs');
  const thumbsTrigger  = document.getElementById('thumbs-trigger');

  let thumbsAutoTimer = null;

  function openLightbox({ html, caption = '', mode = 'simple' }) {
    lightboxBody.innerHTML = html;
    lightboxCap.textContent = caption;
    lightbox.classList.toggle('mode-rich', mode !== 'simple');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // resetear scroll del contenido
    const content = lightbox.querySelector('.lightbox-content');
    content.scrollTop = 0;
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // ocultar tira de miniaturas
    thumbsBar.classList.remove('show');
    thumbsBar.hidden = true;
    thumbsTrigger.hidden = true;
    if (thumbsAutoTimer) { clearTimeout(thumbsAutoTimer); thumbsAutoTimer = null; }
    // limpiar después de la transición (mata el iframe del vídeo)
    setTimeout(() => {
      lightboxBody.innerHTML = '';
      thumbsBar.innerHTML = '';
      lightbox.classList.remove('mode-rich');
    }, 450);
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    // cierra solo si clickas fuera del contenido (en el fondo)
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  /* ============== Plantilla — modal de proyecto ============== */
  function renderProject(slug) {
    const p = PROJECTS[slug];
    if (!p) { console.warn('Proyecto no encontrado:', slug); return; }

    const videoBlock = p.video && p.video.id
      ? `<iframe src="https://player.${p.video.provider || 'vimeo'}.com/video/${p.video.id}?title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
      : `<div class="project-detail-video-placeholder">VIDEO — VIMEO ID PENDIENTE</div>`;

    const posterBlock = p.poster
      ? `<img src="${p.poster}" alt="Cartel de ${p.title}">`
      : `<div class="project-detail-poster-empty"><span>CARTEL</span><span>PENDIENTE</span></div>`;

    const crewBlock = (p.crew && p.crew.length)
      ? `<dl>${p.crew.map(c => `<dt>${c.role}</dt><dd>${c.name}</dd>`).join('')}</dl>`
      : '';

    const castBlock = (p.cast && p.cast.length)
      ? `<div class="project-detail-cast">
           <div class="project-detail-cast-title">Reparto</div>
           <ul class="project-detail-cast-cards">
             ${p.cast.map((c, i) => `
               <li data-cast-slug="${slug}__${i}">
                 <div class="project-detail-cast-photo">
                   ${c.photo
                     ? `<img src="${c.photo}" alt="${c.actor}">`
                     : `<div class="project-detail-cast-photo-empty">FOTO<br>PENDIENTE</div>`
                   }
                 </div>
                 <div class="project-detail-cast-name">${c.actor}</div>
                 <div class="project-detail-cast-role">${c.role}</div>
               </li>
             `).join('')}
           </ul>
         </div>`
      : '';

    const statusBlock = p.status
      ? `<div class="project-detail-status">${p.status}</div>`
      : '';

    const stillsBlock = (p.stills && p.stills.length)
      ? `<div class="project-detail-stills-title">Stills</div>
         <div class="project-detail-stills">
           ${p.stills.slice(0, 7).map(s => `<div class="project-detail-still"><img src="${s}" alt=""></div>`).join('')}
         </div>`
      : '';

    const quoteBlock = p.quote
      ? `<blockquote class="project-detail-quote">«${p.quote}»</blockquote>`
      : '';

    const html = `
      <article class="project-detail">
        <div class="project-detail-eyebrow">FILMMAKER · PROJECT</div>
        <h1 class="project-detail-title">${p.title}</h1>
        <div class="project-detail-meta">
          <span><span class="dot"></span>${p.type}</span>
          <span><span class="dot"></span>${p.year}</span>
          ${p.duration ? `<span><span class="dot"></span>${p.duration}</span>` : ''}
        </div>
        ${statusBlock}
        <div class="project-detail-video">${videoBlock}</div>
        <div class="project-detail-body">
          <div class="project-detail-synopsis">
            <h3>Sinopsis</h3>
            <p>${p.synopsis}</p>
            ${quoteBlock}
          </div>
          <aside class="project-detail-aside">
            <div class="project-detail-poster">${posterBlock}</div>
            <div class="project-detail-credits">${crewBlock}</div>
            ${castBlock}
          </aside>
        </div>
        ${stillsBlock}
      </article>
    `;

    openLightbox({ html, mode: 'project' });
  }

  /* ============== Plantilla — visor monografía ============== */
  function renderMonograph(slug) {
    const s = SERIES[slug];
    if (!s) { console.warn('Serie no encontrada:', slug); return; }

    // construir páginas
    const pagesHtml = s.pages.map(page => {
      if (page.type === 'spread') {
        return `<div class="photo-monograph-page layout-spread">
          <div class="spread-inner">${page.images.map(i => `<img src="${i}" alt="">`).join('')}</div>
        </div>`;
      }
      return `<div class="photo-monograph-page layout-${page.type}">
        ${page.images.map(i => `<img src="${i}" alt="">`).join('')}
      </div>`;
    }).join('');

    const html = `
      <article class="photo-monograph">
        <header class="photo-monograph-cover">
          <div class="photo-monograph-cover-num">${s.num}</div>
          <div class="photo-monograph-cover-info">
            <div class="photo-monograph-cover-eyebrow">PHOTOGRAPHY · MONOGRAPH</div>
            <h1 class="photo-monograph-cover-title">${s.title}</h1>
            <div class="photo-monograph-cover-meta">${s.count} imágenes · ${s.year}</div>
            <p class="photo-monograph-cover-desc">${s.description}</p>
          </div>
        </header>
        <div class="photo-monograph-pages">${pagesHtml}</div>
      </article>
    `;

    // construir tira de miniaturas (todas las imágenes de la serie)
    const allImages = s.pages.flatMap(p => p.images);
    thumbsBar.innerHTML = allImages.map((src, i) => `
      <div class="photo-monograph-thumb" data-idx="${i}">
        <img src="${src}" alt="">
      </div>
    `).join('');
    thumbsBar.hidden = false;
    thumbsTrigger.hidden = false;

    openLightbox({ html, mode: 'monograph' });

    // gesto de presentación: mostrar tira 3s al abrir
    thumbsBar.classList.add('show');
    if (thumbsAutoTimer) clearTimeout(thumbsAutoTimer);
    thumbsAutoTimer = setTimeout(() => {
      thumbsBar.classList.remove('show');
    }, 3000);

    // navegación: click en miniatura = scroll a esa imagen del visor
    thumbsBar.querySelectorAll('.photo-monograph-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.idx, 10);
        const allRenderedImages = lightboxBody.querySelectorAll('.photo-monograph-page img');
        const target = allRenderedImages[idx];
        if (target) {
          const content = lightbox.querySelector('.lightbox-content');
          const top = target.getBoundingClientRect().top + content.scrollTop - 60;
          content.scrollTo({ top, behavior: 'smooth' });
        }
        // marcar activa
        thumbsBar.querySelectorAll('.photo-monograph-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // trigger de hover para invocar la tira
  thumbsTrigger.addEventListener('mouseenter', () => {
    thumbsBar.classList.add('show');
  });
  thumbsBar.addEventListener('mouseleave', () => {
    thumbsBar.classList.remove('show');
  });

  /* ============== Bind global de aperturas ============== */
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', (e) => {
      const type = el.dataset.lightbox;

      if (type === 'project') {
        const slug = el.dataset.project;
        if (slug) { renderProject(slug); return; }
      }

      if (type === 'photo') {
        // v6: ya no abrimos monografía al clicar foto. Abrimos foto a tamaño grande.
        const img = el.tagName === 'IMG' ? el : el.querySelector('img');
        if (img) {
          const cap = el.querySelector('.headshot-label')?.textContent || '';
          openLightbox({ html: `<img src="${img.src}" alt="">`, caption: cap, mode: 'simple' });
        }
        return;
      }

      if (type === 'serie') {
        // (legacy — el bloque .photo-index ya no existe en v6, pero la función sigue disponible)
        const slug = el.dataset.serie;
        if (slug) { renderMonograph(slug); return; }
      }

      if (type === 'reel') {
        const img = el.querySelector('img');
        const cap = el.querySelector('.reel-info span')?.textContent || 'SHOWREEL';
        openLightbox({ html: `<img src="${img.src}" alt="">`, caption: cap, mode: 'simple' });
        return;
      }

      if (type === 'script') {
        // Apertura del guion-muestra (preview en la sección)
        openLightbox({
          html: `<div style="background:var(--paper); padding:60px; max-width:600px; aspect-ratio:5/7; font-family:'Courier New',monospace; font-size:15px; line-height:1.7; color:var(--ink);">${el.innerHTML}</div>`,
          caption: 'INT. CAFÉ DE PARÍS — DAY',
          mode: 'simple'
        });
        return;
      }

      // v6: guion completo (lectura)
      if (type === 'script-full') {
        const slug = el.dataset.script;
        if (slug) { renderScript(slug); return; }
      }

      // v6: vídeos del actor
      if (type === 'actor-video') {
        const vid = el.dataset.vimeo;
        const title = el.querySelector('.actor-video-title')?.textContent || '';
        renderVideo(vid, title);
        return;
      }

      // v6: vídeos de música
      if (type === 'music-video') {
        const vid = el.dataset.vimeo;
        const title = el.querySelector('.music-video-title')?.textContent || '';
        renderVideo(vid, title);
        return;
      }
    });
  });

  /* ===================================================================
     v6 — GUIONES COMPLETOS
     Cada guion se muestra a página completa en formato Courier.
     Reemplaza el campo "body" con tu contenido real.
     Para guiones largos puedes pegar texto plano respetando el formato:
       SLUG: "INT. LUGAR — DAY"
       PERSONAJE: nombre en mayúsculas
       (acotación)
       Diálogo
       Acción descrita en líneas normales.
  =================================================================== */

  // === SCRIPTS data se importa desde ./data/scripts.js (ver arriba) ===


  /* ============== v6 — Render guion completo ============== */
  function renderScript(slug) {
    const s = SCRIPTS[slug];
    if (!s) { console.warn('Guion no encontrado:', slug); return; }

    const html = `
      <article class="script-viewer">
        <header class="script-viewer-header">
          <div class="script-viewer-eyebrow">${s.role}</div>
          <h1 class="script-viewer-title">${s.title}</h1>
          <div class="script-viewer-meta">${s.year} · ${s.meta}</div>
        </header>
        <div class="script-viewer-body">${s.body}</div>
      </article>
    `;

    openLightbox({ html, mode: 'project' });
  }

  /* ============== v6 — Render vídeo (actor / música) ============== */
  function renderVideo(vimeoId, title) {
    const html = vimeoId
      ? `<iframe src="https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; aspect-ratio:16/9;"></iframe>`
      : `<div style="aspect-ratio:16/9; background:var(--ink); color:var(--paper); display:flex; align-items:center; justify-content:center; flex-direction:column; gap:14px; font-family:var(--font-display); letter-spacing:0.28em; font-size:13px;">
           <span>VIDEO — VIMEO ID PENDIENTE</span>
           <span style="font-family:var(--font-editorial); font-style:italic; letter-spacing:0; font-size:14px; color:rgba(241,235,221,0.6);">${title}</span>
         </div>`;
    openLightbox({ html, caption: title, mode: 'simple' });
  }

  /* ============== v6 — Mini-modal de actor (bio) ============== */
  function renderActorBio(projectSlug, castIdx) {
    const p = PROJECTS[projectSlug];
    if (!p || !p.cast || !p.cast[castIdx]) return;
    const c = p.cast[castIdx];

    const photoBlock = c.photo
      ? `<img src="${c.photo}" alt="${c.actor}">`
      : `<div class="project-detail-cast-photo-empty">FOTO<br>PENDIENTE</div>`;

    const html = `
      <article class="actor-bio-modal">
        <div class="actor-bio-modal-grid">
          <div class="actor-bio-modal-photo">${photoBlock}</div>
          <div>
            <div class="actor-bio-modal-eyebrow">REPARTO · ${p.title.toUpperCase()}</div>
            <h2 class="actor-bio-modal-name">${c.actor}</h2>
            <div class="actor-bio-modal-role">${c.role}</div>
            <div class="actor-bio-modal-bio">
              ${c.bio ? `<p>${c.bio}</p>` : `<p><em>Bio pendiente. Cuando confirmes el casting, edita el campo <code>bio</code> en el array <code>cast</code> del proyecto correspondiente en la constante <code>PROJECTS</code>.</em></p>`}
            </div>
          </div>
        </div>
      </article>
    `;

    openLightbox({ html, mode: 'project' });
  }

  // Delegación: click en una card de cast (que vive dentro del lightbox)
  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.project-detail-cast-cards li');
    if (!card) return;
    const slugIdx = card.dataset.castSlug || '';
    const [projectSlug, idx] = slugIdx.split('__');
    if (projectSlug && idx !== undefined) {
      renderActorBio(projectSlug, parseInt(idx, 10));
    }
  });

  /* ===================================================================
     v6 — FILTROS DE FOTOGRAFÍA
     Cuenta fotos por categoría y filtra al click.
  =================================================================== */
  (function setupPhotoFilters() {
    const filterBar = document.getElementById('photo-filters');
    if (!filterBar) return;
    const items = document.querySelectorAll('.photo-grid .photo-item');
    const filters = filterBar.querySelectorAll('.photo-filter');

    // Conteo
    filters.forEach(btn => {
      const cat = btn.dataset.cat;
      const count = cat === 'todas'
        ? items.length
        : Array.from(items).filter(it => it.dataset.cat === cat).length;
      btn.querySelector('.count').textContent = count;
    });

    // Click
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        items.forEach(it => {
          if (cat === 'todas' || it.dataset.cat === cat) {
            it.classList.remove('is-hidden');
          } else {
            it.classList.add('is-hidden');
          }
        });
      });
    });
  })();

  /* ===================================================================
     v6 — VISTA DE ARCHIVO COMPLETO ("Ver todos los proyectos")
     Genera el grid + filtros desde los datos PROJECTS.
  =================================================================== */
  function renderArchive() {
    const all = Object.entries(PROJECTS).map(([slug, p]) => ({ slug, ...p }));

    // Categorías derivadas del campo "type"
    const categories = {
      'todos':       { label: 'Todos',         test: () => true },
      'cortometraje':{ label: 'Cortometrajes', test: p => /cortometraje/i.test(p.type) },
      'videoclip':   { label: 'Videoclips',    test: p => /videoclip/i.test(p.type) },
      'documental':  { label: 'Documentales',  test: p => /documental/i.test(p.type) },
      'spot':        { label: 'Spots',         test: p => /spot/i.test(p.type) }
    };

    const filterBtns = Object.entries(categories).map(([key, cat]) => {
      const count = all.filter(cat.test).length;
      return `<button class="archive-filter ${key === 'todos' ? 'active' : ''}" data-cat="${key}">
                ${cat.label} <span class="count">${count}</span>
              </button>`;
    }).join('');

    const cards = all.map(p => `
      <div class="archive-card" data-archive-slug="${p.slug}" data-cat="${p.type.split('·')[0].trim().toLowerCase()}">
        <div class="archive-card-poster">
          ${p.poster
            ? `<img src="${p.poster}" alt="${p.title}">`
            : (p.stills && p.stills[0]
                ? `<img src="${p.stills[0]}" alt="${p.title}">`
                : `<div class="archive-card-poster-empty"><span>CARTEL</span><span>PENDIENTE</span></div>`)
          }
        </div>
        <div class="archive-card-title">${p.title}</div>
        <div class="archive-card-meta">
          <span class="yr">${p.year}</span>
          <span>${p.type.split('·')[0].trim()}</span>
        </div>
      </div>
    `).join('');

    const html = `
      <section class="archive-view">
        <header class="archive-view-header">
          <div>
            <div class="archive-view-eyebrow">FILMMAKER · COMPLETE ARCHIVE</div>
            <h1 class="archive-view-title">Todos los <em>proyectos</em></h1>
          </div>
          <p class="archive-view-meta">${all.length} piezas dirigidas entre 2020 y 2025. Click en cualquiera para abrir su ficha completa.</p>
        </header>
        <div class="archive-filters">${filterBtns}</div>
        <div class="archive-grid" id="archive-grid">${cards}</div>
      </section>
    `;

    openLightbox({ html, mode: 'project' });

    // Bind filtros de archivo
    setTimeout(() => {
      const archiveFilters = document.querySelectorAll('.archive-filter');
      const archiveCards = document.querySelectorAll('.archive-card');
      archiveFilters.forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.cat;
          const cat = categories[key];
          archiveFilters.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          archiveCards.forEach(card => {
            const slug = card.dataset.archiveSlug;
            const p = PROJECTS[slug];
            if (!p) return;
            if (cat.test(p)) {
              card.classList.remove('is-hidden');
            } else {
              card.classList.add('is-hidden');
            }
          });
        });
      });

      // Bind: click en card de archivo abre ficha completa del proyecto
      archiveCards.forEach(card => {
        card.addEventListener('click', () => {
          const slug = card.dataset.archiveSlug;
          if (slug) renderProject(slug);
        });
      });
    }, 50);
  }

  // Bind: botón "Ver todos los proyectos"
  const archiveBtn = document.getElementById('open-archive');
  if (archiveBtn) {
    archiveBtn.addEventListener('click', renderArchive);
  }
