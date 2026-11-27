/* =========================================
   1. RENDERIZADO DINÁMICO DE SERVICIOS
   ========================================= */
const services = [
  {
    title: 'Soporte técnico y mantenimiento',
    tag: 'Continuidad de puestos',
    problem: 'Fallas recurrentes en equipos de oficina, lentitud operativa e interrupciones que frenan la productividad diaria del personal.',
    activities: [
      'Atención remota y presencial de incidencias de software, sistema operativo y periféricos.',
      'Mantenimiento preventivo periódico (limpieza física, revisión térmica y optimización) y reparaciones correctivas.',
      'Puesta a punto, estandarización y asignación de computadoras y portátiles para nuevos ingresos.'
    ],
    deliverable: 'Equipos operativos, inventario técnico actualizado y registro claro de cada intervención.',
    benefit: 'Menos horas de trabajo perdidas por fallas técnicas y mayor vida útil de la inversión en hardware.',
    icon: 'M4 5h16v12H4z M8 21h8 M12 17v4'
  },
  {
    title: 'Redes y conectividad empresarial',
    tag: 'Conectividad estable',
    problem: 'Caídas intermitentes de internet, zonas sin cobertura Wi-Fi, cuellos de botella y conexiones inseguras para trabajo remoto.',
    activities: [
      'Diseño, instalación y ordenamiento de cableado estructurado, switches y puntos de acceso Wi-Fi empresariales.',
      'Segmentación de redes (invitados, operaciones, administración) para aislar tráfico y mejorar el rendimiento.',
      'Configuración de enlaces VPN seguros para conectar sucursales o permitir acceso remoto controlado.'
    ],
    deliverable: 'Red documentada, cobertura inalámbrica estable y accesos remotos configurados.',
    benefit: 'Comunicación fluida entre áreas y conexión confiable para sistemas administrativos y trabajo a distancia.',
    icon: 'M3 8q9-8 18 0 M6 12q6-6 12 0 M9 16q3-3 6 0 M12 20h.01'
  },
  {
    title: 'Servidores e infraestructura',
    tag: 'Núcleo operativo',
    problem: 'Desorden en el acceso a carpetas compartidas, falta de control sobre permisos de usuarios y servidores sin administración periódica.',
    activities: [
      'Configuración y administración de servidores físicos, virtualizados o en la nube según el entorno del cliente.',
      'Gestión de dominios, políticas de acceso, cuentas de correo corporativo y permisos por rol o departamento.',
      'Aplicación controlada de actualizaciones críticas y revisión del estado de recursos (almacenamiento y memoria).'
    ],
    deliverable: 'Infraestructura centralizada con control de accesos por usuario y documentación de configuración.',
    benefit: 'Seguridad en el manejo de información interna y orden operativo al incorporar o rotar personal.',
    icon: 'M4 3h16v7H4z M4 14h16v7H4z M7 6h.01 M7 17h.01 M11 6h6 M11 17h6'
  },
  {
    title: 'Respaldos y recuperación de datos',
    tag: 'Resguardo de información',
    problem: 'Riesgo de pérdida definitiva de bases de datos, facturación o documentos clave ante fallas de disco, errores humanos o virus.',
    activities: [
      'Implementación de esquemas de copias de seguridad automatizadas locales y/o externas para archivos y bases de datos.',
      'Definición de políticas de retención adaptadas al volumen y criticidad de la información del negocio.',
      'Ejecución de pruebas periódicas de restauración para validar que los respaldos sean íntegros y utilizables.'
    ],
    deliverable: 'Sistema de respaldo activo, bitácora de verificación y evidencia de pruebas de restauración.',
    benefit: 'Tranquilidad gerencial y capacidad real de retomar operaciones ante un incidente inesperado.',
    icon: 'M4 6c0-4 16-4 16 0s-16 4-16 0v12c0 4 16 4 16 0V6 M4 12c0 4 16 4 16 0'
  },
  {
    title: 'Monitoreo y administración IT',
    tag: 'Visibilidad preventiva',
    problem: 'Detectar fallas en servidores, enlaces o servicios críticos únicamente cuando los usuarios ya detuvieron su trabajo.',
    activities: [
      'Implementación de supervisión sobre servidores, conectividad a Internet y dispositivos de red definidos en el alcance.',
      'Configuración de alertas tempranas para nuestro equipo técnico ante anomalías o indisponibilidad de servicios.',
      'Seguimiento operativo continuo y generación de reportes periódicos de estado.'
    ],
    deliverable: 'Esquema de monitoreo activo e informes periódicos sobre el estado de la infraestructura.',
    benefit: 'Anticipación ante fallas detectables y toma de decisiones gerenciales basada en visibilidad real del entorno.',
    icon: 'M3 4h18v16H3z M5 13h4l2-5 3 9 2-4h3'
  },
  {
    title: 'Seguridad electrónica y control de acceso',
    tag: 'Protección física',
    problem: 'Puntos ciegos en instalaciones, falta de respaldo de grabaciones o ausencia de trazabilidad sobre el ingreso de personal.',
    activities: [
      'Instalación, configuración y mantenimiento de sistemas de videovigilancia (CCTV) y grabadores digitales.',
      'Implementación y ajuste de dispositivos de control de acceso biométrico para áreas restringidas.',
      'Configuración de visualización remota segura y revisión periódica del almacenamiento de grabaciones.'
    ],
    deliverable: 'Cámaras y controles operativos con acceso remoto configurado y registros de eventos activos.',
    benefit: 'Mayor control sobre instalaciones, activos físicos y horarios de acceso sin depender de procesos manuales.',
    icon: 'M3 8h12v10H3z M15 11l6-3v10l-6-3 M7 5h4'
  }
];

const serviceList = document.querySelector('.service-list');
if (serviceList) {
  serviceList.innerHTML = services
    .map(
      (service, index) => `
      <article class="service group bg-white border border-[#d7e3e8] hover:border-samand-teal/60 p-6 md:p-7 rounded-2xl flex flex-col relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-samand-navy/10">
        <span class="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-samand-teal to-samand-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
        
        <div class="flex justify-between items-start gap-3 mb-5">
          <div class="w-12 h-12 rounded-xl bg-[#f0f6f8] border border-[#dce8ed] grid place-items-center text-samand-teal-text group-hover:bg-samand-navy group-hover:border-samand-navy group-hover:text-samand-cyan transition-colors shrink-0">
            <svg class="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="${service.icon}" />
            </svg>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10.5px] font-semibold uppercase tracking-wider text-samand-teal-text bg-[#eaf6f5] border border-[#cde6e3] px-2.5 py-1 rounded-md">${service.tag}</span>
            <span class="font-mono text-[11px] font-semibold tracking-wider text-[#52646f] bg-[#f4f8fa] border border-[#e1ebf0] px-2.5 py-1 rounded-md">0${index + 1}</span>
          </div>
        </div>

        <h3 class="text-[19px] font-semibold tracking-tight leading-snug text-samand-navy mb-3">${service.title}</h3>

        <div class="bg-[#f6f9fb] border-l-[3px] border-samand-cyan rounded-r-lg px-3.5 py-3 mb-5">
          <span class="block text-[10px] font-bold uppercase tracking-wider text-samand-teal-text mb-1">Problema que resuelve</span>
          <p class="text-[13px] text-[#374a54] leading-relaxed m-0">${service.problem}</p>
        </div>

        <div class="mb-5">
          <span class="block text-[10.5px] font-bold uppercase tracking-wider text-samand-navy mb-2.5">Qué realizamos</span>
          <ul class="list-none p-0 m-0 grid gap-2 text-[13px] text-[#465a65] leading-relaxed">
            ${service.activities
              .map(
                (item) =>
                  `<li class="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-samand-teal-text before:font-bold">${item}</li>`
              )
              .join('')}
          </ul>
        </div>

        <div class="mt-auto pt-4 border-t border-[#e6eff2] grid gap-2.5 text-[12.5px]">
          <div class="bg-[#f9fbfc] border border-[#e6eff2] rounded-lg px-3 py-2.5">
            <strong class="block text-[10.5px] uppercase tracking-wider text-samand-navy mb-0.5">Qué recibe el cliente</strong>
            <span class="text-[#465a65] leading-snug block">${service.deliverable}</span>
          </div>
          <div class="bg-[#f0f8f7] border border-[#d6ece9] rounded-lg px-3 py-2.5">
            <strong class="block text-[10.5px] uppercase tracking-wider text-samand-teal-text mb-0.5">Beneficio operativo</strong>
            <span class="text-[#2b4442] leading-snug block">${service.benefit}</span>
          </div>
        </div>

        <div class="pt-4 mt-4 border-t border-[#edf3f5] flex justify-between items-center">
          <a href="#contacto" data-preset="${service.title}" class="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-samand-teal-text group-hover:text-samand-navy group-hover:gap-2.5 transition-all">
            <span>Evaluar este servicio</span> <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>`
    )
    .join('');
}

/* =========================================
   2. MENÚ MÓVIL Y AÑO ACTUAL EN FOOTER
   ========================================= */
const toggle = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.textContent = '☰';
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================================
   3. NAVEGACIÓN SUAVE POR ANCLAS
   ========================================= */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let scrollFrame = 0;

function stopAnchorScroll() {
  cancelAnimationFrame(scrollFrame);
  scrollFrame = 0;
  document.documentElement.style.removeProperty('scroll-behavior');
}

function animateToSection(target) {
  stopAnchorScroll();

  const start = window.scrollY;
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const finish = Math.max(0, Math.min(target.getBoundingClientRect().top + start - offset, maxScroll));

  if (motionPreference.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, finish);
    document.documentElement.style.removeProperty('scroll-behavior');
    return;
  }

  const distance = finish - start;
  const duration = Math.min(1200, Math.max(650, Math.abs(distance) * 0.38));
  document.documentElement.style.scrollBehavior = 'auto';
  const began = performance.now();

  function tick(now) {
    const progress = Math.min(1, (now - began) / duration);
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      scrollFrame = requestAnimationFrame(tick);
    } else {
      stopAnchorScroll();
    }
  }

  scrollFrame = requestAnimationFrame(tick);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    if (location.hash !== hash) {
      history.pushState(null, '', hash);
    }

    animateToSection(target);

    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }
    target.focus({ preventScroll: true });
  });
});

['wheel', 'touchstart', 'pointerdown'].forEach((type) => {
  window.addEventListener(type, stopAnchorScroll, { passive: true });
});

window.addEventListener('keydown', (event) => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
    stopAnchorScroll();
  }
});

window.addEventListener('popstate', stopAnchorScroll);

/* =========================================
   4. ANIMACIONES DE ENTRADA AL HACER SCROLL
   ========================================= */
const revealItems = document.querySelectorAll(
  '.about>div, .value, .service, .tech-card, .plan, .project-card, .faq-item, .steps>div, [data-client-slot], .section-head>div, .section-head>p, #contacto>div>div, .footer-grid>div'
);
let revealObserver;

function revealAll() {
  revealObserver?.disconnect();
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if ('IntersectionObserver' in window && !motionPreference.matches) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
  );

  revealItems.forEach((item) => {
    if (item.parentElement.closest('.about>div')) return;

    const siblings = Array.from(item.parentElement.children);
    const delay = Math.min(siblings.indexOf(item) % 3, 2) * 70;
    item.style.setProperty('--reveal-delay', `${delay}ms`);
    item.classList.add('reveal-ready');
    revealObserver.observe(item);
  });
}

motionPreference.addEventListener?.('change', () => {
  if (motionPreference.matches) {
    stopAnchorScroll();
    revealAll();
  }
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    stopAnchorScroll();
    revealAll();
  }
});

/* =========================================
   5. PRESELECCIÓN DE SERVICIO/PROYECTO EN FORMULARIO
   ========================================= */
const interestSelect = document.querySelector('#lead-interest');
const devicesSelect = document.querySelector('#lead-devices');

document.querySelectorAll('[data-preset]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const preset = trigger.getAttribute('data-preset');
    if (!preset || !interestSelect) return;

    const matchingOption = Array.from(interestSelect.options).find(
      (opt) => opt.value === preset
    );
    if (matchingOption) {
      interestSelect.value = preset;
    }

    if (preset.startsWith('Proyecto') && devicesSelect) {
      devicesSelect.value = 'proyecto';
    }
  });
});

/* =========================================
   6. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
   ========================================= */
const faqAccordion = document.querySelector('[data-faq-accordion]');
if (faqAccordion) {
  const triggers = faqAccordion.querySelectorAll('.faq-trigger');

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetPanel = document.getElementById(btn.getAttribute('aria-controls'));
      const icon = btn.querySelector('.faq-icon');

      triggers.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.querySelector('.faq-icon')?.classList.remove('rotate-45');
          const otherPanel = document.getElementById(otherBtn.getAttribute('aria-controls'));
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', String(!isExpanded));
      if (targetPanel) targetPanel.hidden = isExpanded;
      icon?.classList.toggle('rotate-45', !isExpanded);
    });
  });
}