// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== MOBILE NAV =====
const burger = document.getElementById('burger');
let mobileNav = null;

burger.addEventListener('click', () => {
  if (!mobileNav) {
    mobileNav = document.createElement('nav');
    mobileNav.className = 'nav-mobile';
    mobileNav.innerHTML = `
      <button class="nav-mobile-close" id="closeNav">✕</button>
      <a href="#sobre" onclick="closeMobileNav()">Sobre</a>
      <a href="#especialidades" onclick="closeMobileNav()">Especialidades</a>
      <a href="#depoimentos" onclick="closeMobileNav()">Depoimentos</a>
      <a href="#contato" onclick="closeMobileNav()">Contato</a>
      <a href="https://wa.me/556496990356" target="_blank" style="color:var(--gold)">Agendar Consulta</a>
    `;
    document.body.appendChild(mobileNav);
    document.getElementById('closeNav').addEventListener('click', closeMobileNav);
  }
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeMobileNav() {
  if (mobileNav) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.closeMobileNav = closeMobileNav;

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.specialty-card, .testimonial-card, .stat-item, .authority-text, .authority-image-wrap, .experience-text, .experience-quote-wrap, .insta-tile, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), Number(delay));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ===== COUNT-UP ANIMATION =====
function animateCount(el, target, suffix) {
  const duration = 2000;
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current.toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numbers = entry.target.querySelectorAll('.stat-number');
      numbers.forEach(num => {
        const target = parseFloat(num.dataset.target);
        animateCount(num, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// ===== PARALLAX HERO =====
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
  }
});

// ===== GOLD PARTICLES IN HERO =====
function createParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:absolute;
      width:${Math.random()*3+1}px;
      height:${Math.random()*3+1}px;
      background:rgba(201,169,110,${Math.random()*0.4+0.1});
      border-radius:50%;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation: floatParticle ${Math.random()*8+6}s ease-in-out infinite;
      animation-delay:${Math.random()*-10}s;
      pointer-events:none;
      z-index:1;
    `;
    hero.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0%,100% { transform:translateY(0) translateX(0); opacity:0.3; }
      33% { transform:translateY(-30px) translateX(15px); opacity:0.8; }
      66% { transform:translateY(15px) translateX(-10px); opacity:0.5; }
    }
  `;
  document.head.appendChild(style);
}
createParticles();

// ===== SMOOTH HOVER ON SPECIALTY CARDS =====
document.querySelectorAll('.specialty-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== CTA PULSE =====
const ctaBtn = document.getElementById('main-cta-btn');
if (ctaBtn) {
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaBtn.style.animation = 'ctaPulse 2s ease-in-out infinite';
        const style = document.createElement('style');
        style.textContent = `@keyframes ctaPulse { 0%,100%{box-shadow:0 0 0 0 rgba(201,169,110,0.4);} 50%{box-shadow:0 0 0 15px rgba(201,169,110,0);} }`;
        document.head.appendChild(style);
      }
    });
  }, { threshold: 0.5 });
  ctaObserver.observe(ctaBtn);
}

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});
