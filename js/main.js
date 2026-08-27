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
  renderExperience(lang);
  renderModalContent();
  renderProjects(lang);
}

function renderExperience(lang) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  experiences.forEach((exp, index) => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${exp.period[lang]}</span>
        <h3 class="timeline-role">${exp.role[lang]}</h3>
        <p class="timeline-company">${exp.company}</p>
        <ul class="timeline-points">
          ${exp.points.map(p => `<li>${p[lang]}</li>`).join('')}
        </ul>
        <button class="detail-btn" data-type="experience" data-index="${index}" 
            data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
      </div>
    `;
    timeline.appendChild(item);
  });
}

renderExperience(currentLang);
renderProjects(currentLang);

const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
let activeModal = null; // { type: 'experience', index: 0 }

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

  if (activeModal.type === 'experience') {
    const exp = experiences[activeModal.index];
    const photosHTML = exp.detail.photos.map(src => `<img src="${src}" alt="${exp.company}">`).join('');
    const linkHTML = exp.detail.link
      ? `<a href="${exp.detail.link}" target="_blank" class="btn btn-primary">${lang === 'id' ? 'Lihat Hasil' : 'View Result'}</a>`
      : '';

    modalBody.innerHTML = `
      <h3>${exp.role[lang]}</h3>
      <p class="timeline-company">${exp.company}</p>
      <p style="margin-top:1rem;">${exp.detail.description[lang]}</p>
      <div class="modal-photos" style="margin-top:1rem;">${photosHTML}</div>
      ${linkHTML}
    `;
  } else if (activeModal.type === 'project') {
      const proj = projects[activeModal.index];
      const photosHTML = proj.photos.map(src => `<img src="${src}" alt="${proj.title}">`).join('');
      const linkHTML = proj.link
        ? `<a href="${proj.link}" target="_blank" class="btn btn-primary">${lang === 'id' ? 'Lihat Project' : 'View Project'}</a>`
        : '';

      modalBody.innerHTML = `
        <h3>${proj.title}</h3>
        <div class="project-stack" style="margin-bottom:1rem;">
          ${proj.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
        </div>
        <div class="case-study-block">
          <h4>${lang === 'id' ? 'Studi Kasus' : 'Problem'}</h4>
          <p>${proj.problem[lang]}</p>
        </div>
        <div class="case-study-block">
          <h4>${lang === 'id' ? 'Analisis' : 'Analysis'}</h4>
          <p>${proj.analysis[lang]}</p>
        </div>
        <div class="case-study-block">
          <h4>${lang === 'id' ? 'Solusi' : 'Solution'}</h4>
          <p>${proj.solution[lang]}</p>
        </div>
        <div class="case-study-block">
          <h4>${lang === 'id' ? 'Hasil' : 'Result'}</h4>
          <p>${proj.hasil[lang]}</p>
        </div>
        <div class="modal-photos" style="margin-top:1rem;">${photosHTML}</div>
        ${linkHTML}
      `;
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.detail-btn');
  if (btn) {
    openModal(btn.dataset.type, Number(btn.dataset.index));
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal(); // klik di luar box modal
});

function renderProjects(lang) {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';

  projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    const statusLabel = proj.status === 'ongoing'
      ? (lang === 'id' ? 'Ongoing' : 'Ongoing')
      : (lang === 'id' ? 'Selesai' : 'Completed');

    card.innerHTML = `
      <span class="status-badge status-${proj.status}">${statusLabel}</span>
      <h3 class="project-title">${proj.title}</h3>
      <div class="project-stack">
        ${proj.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
      <button class="detail-btn" data-type="project" data-index="${index}" data-id="Lihat Detail" data-en="View Detail">Lihat Detail</button>
    `;
    grid.appendChild(card);
  });
}