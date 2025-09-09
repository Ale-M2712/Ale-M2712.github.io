fetch('dashboards/dashboards.json')
  .then(res => res.json())
  .then(data => {
    const carousel = document.querySelector('.dashboard-carousel');

    data.forEach(dashboard => {
      const li = document.createElement('li');

      // Verificamos que la ruta sea correcta
      const imgPath = dashboard.imagen;

      li.innerHTML = `
        <img src="${imgPath}" alt="${dashboard.titulo}" />
        <div class="overlay">
          <h2>${dashboard.titulo}</h2>
          <p>${dashboard.descripcion}</p>
        </div>
      `;

      carousel.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Error al cargar dashboards:", err);
  });