fetch('dashboards/dashboards.json')
  .then(res => res.json())
  .then(data => {
    const carousel = document.querySelector('.dashboard-carousel');

    data.forEach(dashboard => {
      const li = document.createElement('li');

      li.innerHTML = `
        <img src="${dashboard.imagen}" alt="${dashboard.titulo}" />
        <div class="overlay">
          <h2>${dashboard.titulo}</h2>
          <p>${dashboard.descripcion}</p>
          <div class="tags">
            ${dashboard.tecnologias.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      `;

      carousel.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Error al cargar dashboards:", err);
  });