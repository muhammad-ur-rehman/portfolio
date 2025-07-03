document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#certificates .card').forEach(function(card) {
    card.addEventListener('click', function() {
      const imgSrc = card.querySelector('img').src;
      let modal = document.createElement('div');
      modal.className = 'certificate-modal';
      modal.innerHTML = `
        <div class="certificate-modal-backdrop"></div>
        <div class="certificate-modal-content">
          <button class="certificate-modal-close" aria-label="Close">&times;</button>
          <img src="${imgSrc}" alt="Certificate" />
        </div>
      `;
      document.body.appendChild(modal);

      // Close on click
      modal.querySelector('.certificate-modal-backdrop').onclick = () => modal.remove();
      modal.querySelector('.certificate-modal-close').onclick = () => modal.remove();
    });
  });

  // Project Details modal
  document.querySelectorAll('.details-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      const card = btn.closest('.card');
      const title = card.querySelector('h2').textContent;
      const desc = card.getAttribute('data-popup-desc') || card.querySelector('p').textContent;
      let modal = document.createElement('div');
      modal.className = 'project-modal';
      modal.innerHTML = `
        <div class="project-modal-backdrop"></div>
        <div class="project-modal-content">
          <button class="project-modal-close" aria-label="Close">&times;</button>
          <h2>${title}</h2>
          <p style="text-align: left;">${desc}</p>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.project-modal-backdrop').onclick = () => modal.remove();
      modal.querySelector('.project-modal-close').onclick = () => modal.remove();
    });
  });
}); 