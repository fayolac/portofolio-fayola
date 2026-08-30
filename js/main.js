// ===== LANGUAGE TOGGLE =====
const langToggle = document.getElementById('lang-toggle');
const langOptions = document.querySelectorAll('.lang-option');
let currentLang = 'id';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  updateLanguage(currentLang);
});

function updateLanguage(lang) {
  langOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  document.querySelectorAll('[data-id][data-en]').forEach(el => {
    el.textContent = lang === 'id' ? el.dataset.id : el.dataset.en;
  });

  document.getElementById('hero-desc').textContent = heroText[lang];
  renderSkills(lang);
  renderProjects(lang);
  renderModalContent(lang);
  renderCertifications(lang);
  renderEducation(lang);
  renderExperience(lang);
  renderOrganizations(lang);
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
let currentTheme = 'dark';

function initThemeToggle() {
  if (!themeToggle) return;
  const themeIcon = themeToggle.querySelector('.theme-icon');

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? '☀' : '☾';
  });
}

// ====== SKiLL MATRIX =====
function renderSkills(lang) {
  const analystContainer = document.getElementById('analyst-skills');
  const frontendContainer = document.getElementById('frontend-skills');

  analystContainer.innerHTML = analystSkills
    .map(skill => `<span class="skill-tag tag-analyst">${skill[lang]}</span>`)
    .join('');

  frontendContainer.innerHTML = frontendSkills
    .map(skill => `<span class="skill-tag tag-frontend">${skill[lang]}</span>`)
    .join('');
}

// ===== PROJECTS =====
function renderProjects(lang) {
  const carousel = document.getElementById('project-carousel');
  carousel.innerHTML = '';

  projects.forEach((proj, index) => {
    const isHybrid = proj.accent === 'hybrid';
    const card = document.createElement('div');
    card.classList.add('project-card');
    if (!isHybrid) card.classList.add(`accent-${proj.accent}`);

    const statusHTML = proj.status === 'ongoing'
      ? `<span class="status-tag status-ongoing">${lang === 'id' ? 'Ongoing' : 'Ongoing'}</span>`
      : `<span class="status-tag status-completed">${lang === 'id' ? 'Selesai' : 'Completed'}</span>`;

    const roleLabel = isHybrid
      ? 'Dual Expertise'
      : proj.accent === 'analyst' ? 'System Analyst' : 'Frontend Developer';

    card.innerHTML = `
      <div class="card-flip">
        <div class="card-face card-front">
          <div class="project-card-top">
            <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
            ${statusHTML}
          </div>
          <div class="project-thumb"></div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-desc">${proj.shortDesc[lang]}</p>
          <button class="project-view-btn" data-type="project" data-index="${index}">
            <span data-id="Lihat Detail" data-en="View Project">Lihat Detail</span> →
          </button>
        </div>

        <div class="card-face card-back">
          <p class="card-back-label" data-id="Kontribusi Utama" data-en="Main Contribution">Kontribusi Utama</p>
          <span class="role-badge-sm accent-${proj.accent}">${roleLabel}</span>
          <div class="project-stack" style="margin-top:0.85rem;">
            ${proj.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
          </div>
          <button class="project-view-btn card-back-cta" data-type="project" data-index="${index}">
            <span data-id="Lihat Studi Kasus" data-en="View Case Study">Lihat Studi Kasus</span> →
          </button>
        </div>
      </div>
    `;

    if (isHybrid) {
      const backing = document.createElement('div');
      backing.classList.add('hybrid-backing');
      backing.appendChild(card);

      const wrapper = document.createElement('div');
      wrapper.classList.add('hybrid-wrapper');
      wrapper.appendChild(backing);

      carousel.appendChild(wrapper);
    } else {
      carousel.appendChild(card);
    }
  });
}

//CAROUSEL
function initCarouselArrows(trackId, prevId, nextId) {
  const carousel = document.getElementById('trackId');
  const prevBtn = document.getElementById('prevId');
  const nextBtn = document.getElementById('nextId');
  if (!carousel || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -280, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 280, behavior: 'smooth' });
  });
}

// ===== MODAL =====
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
let activeModal = null;

function openModal(type, index) {
  activeModal = { type, index };
  renderModalContent();
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  activeModal = null;
}

function renderModalContent() {
  if (!activeModal) return;
  const lang = currentLang;

  if (activeModal.type === 'project') {
    const proj = projects[activeModal.index];
    const photosHTML = proj.photos.map(src => `<img src="${src}" alt="${proj.title}">`).join('');
    const linkHTML = proj.links.map(l =>
      `<a href="${l.url}" target="_blank" class="btn btn-primary modal-link">${l.label[lang]} ↗</a>`
    ).join(' ');
    const statusText = proj.status === 'ongoing'
      ? (lang === 'id' ? 'Ongoing' : 'Ongoing')
      : (lang === 'id' ? 'Selesai' : 'Completed');

      //Nampilkan isi dari Modal versi HTML Project
    modalBody.innerHTML = `
      <span class="status-tag status-${proj.status}">${statusText}</span>
      <h3 class="modal-title">${proj.title}</h3>
      <div class="project-stack">
        ${proj.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>

      <div class="case-study-block">
        <div class="case-study-num accent-${proj.accent}">01</div>
        <div>
          <h4>${lang === 'id' ? 'Problem' : 'Problem'}</h4>
          <p>${proj.problem[lang]}</p>
        </div>
      </div>

      <div class="case-study-block">
        <div class="case-study-num accent-${proj.accent}">02</div>
        <div>
          <h4>${lang === 'id' ? 'Analisis' : 'Analysis'}</h4>
          <p>${proj.analysis[lang]}</p>
        </div>
      </div>

      <div class="case-study-block">
        <div class="case-study-num accent-${proj.accent}">03</div>
        <div>
          <h4>${lang === 'id' ? 'Solusi & Hasil' : 'Solution & Result'}</h4>
          <p>${proj.solution[lang]}</p>
        </div>
      </div>

      <div class="modal-photos">${photosHTML}</div>
      ${linkHTML}
    `;
  } 
  //Menampilkan modal certification
  else if (activeModal.type === 'certification') {
      const cert = certifications[activeModal.index];
      const photosHTML = cert.photos.map(src => `<img src="${src}" alt="${cert.title[lang]}">`).join('');
      const linkHTML = cert.link
        ? `<a href="${cert.link}" target="_blank" class="btn btn-primary modal-link">${lang === 'id' ? 'Verifikasi Sertifikat' : 'Verify Certificate'} ↗</a>`
        : '';
      const scoreHTML = cert.score
        ? `<p class="cert-score" style="margin-bottom:1rem;">${lang === 'id' ? 'Skor' : 'Score'}: ${cert.score}</p>`
        : '';

      modalBody.innerHTML = `
        <h3 class="modal-title">${cert.title[lang]}</h3>
        <p class="cert-issuer">${cert.issuer} · ${cert.year}</p>
        ${scoreHTML}
        <p style="margin-top:1rem; color:var(--text-primary); line-height:1.65;">${cert.description[lang]}</p>
        <div class="modal-photos" style="margin-top:1.25rem;">${photosHTML}</div>
        ${linkHTML}
      `;
  } 
  //Menampilkan Modal Education
  else if (activeModal.type === 'education') {
    const edu = education[activeModal.index];
    const photosHTML = edu.detail.photos.map(src => `<img src="${src}" alt="${edu.institution}">`).join('');
    const linkHTML = edu.detail.link
      ? `<a href="${edu.detail.link}" target="_blank" class="btn btn-primary modal-link">${lang === 'id' ? 'Lihat Dokumen' : 'View Document'} ↗</a>`
      : '';
    const extraHTML = edu.extra
      ? `<p class="edu-extra" style="margin-bottom:1rem;">${edu.extra[lang]}</p>`
      : '';

    modalBody.innerHTML = `
      <h3 class="modal-title">${edu.level[lang]}</h3>
      <p class="edu-institution">${edu.institution} · ${edu.period[lang]}</p>
      ${extraHTML}
      <p style="margin-top:1rem; color:var(--text-primary); line-height:1.65;">${edu.detail.description[lang]}</p>
      <div class="modal-photos" style="margin-top:1.25rem;">${photosHTML}</div>
      ${linkHTML}
    `;
  }
  //Menampilkan Modal Magang
  else if (activeModal.type === 'experience') {
  const exp = experiences[activeModal.index];
  const photosHTML = exp.detail.photos.map(src => `<img src="${src}" alt="${exp.company}">`).join('');
  const linkHTML = exp.detail.link
    ? `<a href="${exp.detail.link}" target="_blank" class="btn btn-primary modal-link">${lang === 'id' ? 'Lihat Hasil' : 'View Result'} ↗</a>`
    : '';

  modalBody.innerHTML = `
    <h3 class="modal-title">${exp.role[lang]}</h3>
    <p class="exp-company">${exp.company} · ${exp.period[lang]}</p>
    <ul class="exp-points" style="margin-top:1rem;">
      ${exp.points.map(p => `<li>${p[lang]}</li>`).join('')}
    </ul>
    <p style="margin-top:1rem; color:var(--text-primary); line-height:1.65;">${exp.detail.description[lang]}</p>
    <div class="modal-photos" style="margin-top:1.25rem;">${photosHTML}</div>
    ${linkHTML}
  `;
  }
  //Modal Organisasi
  else if (activeModal.type === 'organization') {
  const org = organizations[activeModal.index];
  const photosHTML = org.detail.photos.map(src => `<img src="${src}" alt="${org.org}">`).join('');
  const linkHTML = org.detail.link
    ? `<a href="${org.detail.link}" target="_blank" class="btn btn-primary modal-link">${lang === 'id' ? 'Lihat Hasil' : 'View Result'} ↗</a>`
    : '';

  modalBody.innerHTML = `
    <h3 class="modal-title">${org.role[lang]}</h3>
    <p class="org-name">${org.org} · ${org.period[lang]}</p>
    <p style="margin-top:1rem; color:var(--text-primary); line-height:1.65;">${org.detail.description[lang]}</p>
    <div class="modal-photos" style="margin-top:1.25rem;">${photosHTML}</div>
    ${linkHTML}
  `;
}
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.detail-btn, .project-view-btn');
  if (btn) {
    openModal(btn.dataset.type, Number(btn.dataset.index));
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

//CERTIFICATION
function renderCertifications(lang) {
  const grid = document.getElementById('cert-grid');
  grid.innerHTML = '';

  certifications.forEach((cert, index) => {
    const card = document.createElement('div');
    card.classList.add('cert-card');

    const scoreHTML = cert.score
      ? `<p class="cert-score">${lang === 'id' ? 'Skor' : 'Score'}: ${cert.score}</p>`
      : '';

    card.innerHTML = `
    <div class="cert-info">
      <h3 class="cert-title">${cert.title[lang]}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-year">${cert.year}</p>
      ${scoreHTML}
    </div>
      <button class="detail-btn" data-type="certification" data-index="${index}" data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
    `;
    grid.appendChild(card);
  });
}

//Education
function renderEducation(lang) {
  const list = document.getElementById('edu-list');
  list.innerHTML = '';

  education.forEach((edu, index) => {
    const item = document.createElement('div');
    item.classList.add('edu-item');

    const extraHTML = edu.extra
      ? `<p class="edu-extra">${edu.extra[lang]}</p>`
      : '';

    item.innerHTML = `
      <div class="edu-info">
        <h3 class="edu-level">${edu.level[lang]}</h3>
        <p class="edu-institution">${edu.institution} · <span class="edu-period">${edu.period[lang]}</span></p>
        ${extraHTML}
      </div>
      <button class="detail-btn" data-type="education" data-index="${index}" data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
    `;
    list.appendChild(item);
  });
}

//EXPERIENCE (MAGANG)
function renderExperience(lang) {
  const list = document.getElementById('exp-list');
  list.innerHTML = '';

  experiences.forEach((exp, index) => {
    const item = document.createElement('div');
    item.classList.add('exp-item');
    item.innerHTML = `
      <div class="exp-info">
        <h3 class="exp-role">${exp.role[lang]}</h3>
        <p class="exp-company">${exp.company} · <span class="exp-period">${exp.period[lang]}</span></p>
        <ul class="exp-points">
          ${exp.points.map(p => `<li>${p[lang]}</li>`).join('')}
        </ul>
      </div>
      <button class="detail-btn" data-type="experience" data-index="${index}" data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
    `;
    list.appendChild(item);
  });
}

//EDUCATION
function renderOrganizations(lang) {
  const list = document.getElementById('org-list');
  list.innerHTML = '';

  organizations.forEach((org, index) => {
    const item = document.createElement('div');
    item.classList.add('org-item');
    item.innerHTML = `
      <div class="org-info">
        <h3 class="org-role">${org.role[lang]}</h3>
        <p class="org-name">${org.org} · <span class="org-period">${org.period[lang]}</span></p>
      </div>
      <button class="detail-btn detail-btn-sm" data-type="organization" data-index="${index}" data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
    `;
    list.appendChild(item);
  });
}

initCarouselArrows('project-carousel', 'carousel-prev', 'carousel-next');
initCarouselArrows('cert-grid', 'cert-carousel-prev', 'cert-carousel-next');
initThemeToggle();
renderSkills(currentLang);
renderProjects(currentLang);
renderModalContent(currentLang);
renderCertifications(currentLang);
renderEducation(currentLang);
renderExperience(currentLang);
renderOrganizations(currentLang);