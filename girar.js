fetch('dashboards/dashboards.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.gallery-track');

    data.forEach(dashboard => {
      const card = document.createElement('div');
      card.className = 'dashboard-card';

      card.innerHTML = `
        <img src="${dashboard.imagen}" alt="${dashboard.titulo}" />
        <div class="dashboard-overlay">
          <h4>${dashboard.titulo}</h4>
          <p>${dashboard.descripcion}</p>
          <div class="tags">
            ${dashboard.tecnologias.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  });