// ===== SCROLL REVEAL (IntersectionObserver) =====
function initScrollReveal() {
  const revealTargets = document.querySelectorAll(
    '.skill-column, .project-card, .hybrid-wrapper, .cert-card, .edu-item, .exp-item, .org-item, .contact-box'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealTargets.forEach((el, index) => {
    el.classList.add('reveal-hidden');
    el.style.transitionDelay = `${(index % 4) * 0.08}s`;
    observer.observe(el);
  });
}

// ===== NAVBAR SHADOW ON SCROLL =====
function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// ===== HERO ENTRANCE (jalan sekali saat halaman dibuka) =====
function initHeroEntrance() {
  const heroText = document.querySelector('.hero-text');
  const heroPhoto = document.querySelector('.hero-photo');
  if (!heroText || !heroPhoto) return;

  requestAnimationFrame(() => {
    heroText.classList.add('hero-in');
    heroPhoto.classList.add('hero-in');
  });
}

// ===== TYPEWRITER CODE SNIPPET =====
function initTypewriter() {
  const target = document.getElementById('code-typed');
  if (!target || typeof codeSnippetText === 'undefined') return;

  let i = 0;
  function type() {
    if (i < codeSnippetText.length) {
      target.textContent += codeSnippetText.charAt(i);
      i++;
      setTimeout(type, 28);
    }
  }
  type();
}

// ===== HERO BLUEPRINT GRID (trigger animasi geser via CSS, cukup pasang class) =====
function initBlueprintGrid() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.classList.add('has-blueprint');
}

function initNameTypewriter() {
  const target = document.getElementById('hero-name-typed');
  if (!target || typeof heroNameText === 'undefined') return;

  let i = 0;
  function type() {
    if (i < heroNameText.length) {
      target.textContent += heroNameText.charAt(i);
      i++;
      setTimeout(type, 65);
    } else {
      document.querySelector('.hero-name-cursor')?.classList.add('cursor-done');
    }
  }
  setTimeout(type, 400);
}

function initTiltEffect() {
  const tiltTargets = document.querySelectorAll('.project-card, .hybrid-wrapper, .cert-card');

  tiltTargets.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

initScrollReveal();
initNavbarScrollEffect();
initHeroEntrance();
initTypewriter();
initBlueprintGrid();
initNameTypewriter();
initScrollProgress();
