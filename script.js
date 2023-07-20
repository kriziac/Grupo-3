document.addEventListener('DOMContentLoaded', async function () {
  
  
  
  /*Aqui empieza el codigo de script de los eventos */
  try {
    const response = await fetch('data.json');
    const jsonData = await response.json();

    jsonData.forEach((evento) => {
      const cardContentHTML = `
        <img src="${evento.img}" class="fotos" alt="${evento.name}">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <p class="card-text"><strong>Ubicación:</strong> ${evento.location}</p>
          <p class="card-text"><strong>Horario:</strong> ${evento.date}</p>
          <button class="btn btn-primary" onclick="redirectToURL('${evento.url}')">Más Información</button>
        </div>
      `;

      const card = document.createElement('div');
      card.className = 'col-lg-4 col-md-6 col-12';
      card.innerHTML = cardContentHTML;
      document.getElementById('cards-container').appendChild(card);
    });
  } catch (error) {
    console.log('Error al cargar el JSON:', error);
  }
});

function redirectToURL(url) {
  window.location.href = url;
}

/*Aqui termina el codigo de script de los eventos */
  