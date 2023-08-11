document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('data.json');
    const jsonData = await response.json();

    jsonData.forEach((evento) => {
      const cardContentHTML = `
        <img src="${evento.img}" class="evento-fotos" alt="${evento.name}">
        <div class="evento-card-body">
          <h5 class="evento-card-title">${evento.name}</h5>
          <p class="evento-card-text">${evento.description}</p>
          <p class="evento-card-text"><strong>Ubicación:</strong> ${evento.location}</p>
          <p class="evento-card-text"><strong>Horario:</strong> ${evento.date}</p>
          <a href="${evento.url}" class="btn btn-primary">Más Información</a>
        </div>
      `;

      const card = document.createElement('div');
      card.className = 'col-lg-4 col-md-6 col-12';
      card.innerHTML = cardContentHTML;
      document.getElementById('eventos-cards-container').appendChild(card);
    });
  } catch (error) {
    console.log('Error al cargar el JSON:', error);
  }
});


/*Aqui termina el codigo de script de los eventos */
