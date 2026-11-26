const services=[['Redes y conectividad','Diseño, instalación y administración de redes de datos y Wi-Fi para conectar tu entorno de trabajo.','M3 8q9-8 18 0 M6 12q6-6 12 0 M9 16q3-3 6 0 M12 20h.01'],['Servidores e infraestructura','Configuración y administración de servidores, dominios y servicios locales o en la nube.','M4 3h16v7H4z M4 14h16v7H4z M7 6h.01 M7 17h.01 M11 6h6 M11 17h6'],['Estaciones de trabajo','Soporte y mantenimiento preventivo y correctivo de computadoras, portátiles y periféricos.','M4 5h16v12H4z M8 21h8 M12 17v4'],['Respaldos y bases de datos','Implementación de sistemas de respaldo y resguardo de bases de datos, con políticas de recuperación adaptadas a tu operación.','M4 6c0-4 16-4 16 0s-16 4-16 0v12c0 4 16 4 16 0V6 M4 12c0 4 16 4 16 0'],['CCTV y acceso biométrico','Instalación, configuración y mantenimiento de videovigilancia y sistemas de control de acceso biométrico.','M3 8h12v10H3z M15 11l6-3v10l-6-3 M7 5h4'],['Monitoreo personalizado','Sistemas de monitoreo adaptados a tus equipos y procesos, con alertas, automatización y reportes según el alcance del proyecto.','M3 4h18v16H3z M5 13h4l2-5 3 9 2-4h3']];document.querySelector('.service-list').innerHTML=services.map((s,i)=>`<article class="service"><span class="num">0${i+1}</span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${s[2]}"/></svg><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');const toggle=document.querySelector('.menu'),nav=document.querySelector('nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}});document.querySelector('#year').textContent=new Date().getFullYear();

// Smooth anchor navigation on both desktop and mobile.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let scrollFrame=0;
function stopAnchorScroll(){cancelAnimationFrame(scrollFrame);scrollFrame=0;document.documentElement.style.removeProperty('scroll-behavior');}
function animateToSection(target){
  stopAnchorScroll();
  const start=window.scrollY;
  const offset=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
  const finish=Math.max(0,Math.min(target.getBoundingClientRect().top+start-offset,document.documentElement.scrollHeight-window.innerHeight));
  if(motionPreference.matches){document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,finish);document.documentElement.style.removeProperty('scroll-behavior');return;}
  const distance=finish-start;
  const duration=Math.min(1200,Math.max(650,Math.abs(distance)*.38));
  document.documentElement.style.scrollBehavior='auto';
  const began=performance.now();
  function tick(now){
    const progress=Math.min(1,(now-began)/duration);
    const eased=progress<.5?4*progress*progress*progress:1-Math.pow(-2*progress+2,3)/2;
    window.scrollTo(0,start+distance*eased);
    if(progress<1)scrollFrame=requestAnimationFrame(tick);else stopAnchorScroll();
  }
  scrollFrame=requestAnimationFrame(tick);
}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const hash=link.getAttribute('href');
  const target=document.getElementById(hash.slice(1));
  if(!target)return;
  event.preventDefault();
  if(location.hash!==hash)history.pushState(null,'',hash);
  animateToSection(target);
  // Preserve keyboard navigation after moving to the section.
  if(!target.hasAttribute('tabindex'))target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
}));
['wheel','touchstart','pointerdown'].forEach(type=>window.addEventListener(type,stopAnchorScroll,{passive:true}));
window.addEventListener('keydown',event=>{if(['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key))stopAnchorScroll();});
window.addEventListener('popstate',stopAnchorScroll);
// Content stays visible if the browser does not support observers.
const revealItems=document.querySelectorAll('.about>div,.value,.service,.plan,.steps>div,.client-empty,.section-head>div,.section-head>p,.contact .wrap>div,.footer-grid>div');
let revealObserver;
function revealAll(){revealObserver?.disconnect();revealItems.forEach(item=>item.classList.add('is-visible'));}
if('IntersectionObserver' in window&&!motionPreference.matches){
  revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});
  },{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  revealItems.forEach(item=>{
    // Nested elements use their parent's reveal to avoid doubled fades.
    if(item.parentElement.closest('.about>div'))return;
    const siblings=Array.from(item.parentElement.children);
    item.style.setProperty('--reveal-delay',Math.min(siblings.indexOf(item)%3,2)*70+'ms');
    item.classList.add('reveal-ready');
    revealObserver.observe(item);
  });
}
motionPreference.addEventListener?.('change',()=>{if(motionPreference.matches){stopAnchorScroll();revealAll();}});
window.addEventListener('pageshow',event=>{if(event.persisted){stopAnchorScroll();revealAll();}});
