document.addEventListener('DOMContentLoaded', async function () {
    try {
      // Cargar datos de eventos
      const eventosResponse = await fetch('data.json');
      const eventosData = await eventosResponse.json();
  
      const eventosContainer = document.getElementById('eventos-cards-container');
  
      eventosData.forEach((evento) => {
        const cardContentHTML = `
          <article class="evento-card" role="article"> <!-- Agrega role="article" -->
            <img src="${evento.img}" class="evento-fotos" alt="${evento.name}">
            <div class="evento-card-body">
              <h5 class="evento-card-title">${evento.name}</h5>
              <p class="evento-card-text">${evento.description}</p>
              <p class="evento-card-text"><strong>Ubicación:</strong> ${evento.location}</p>
              <p class="evento-card-text"><strong>Horario:</strong> ${evento.date}</p>
              <a href="${evento.url}" class="btn btn-primary" role="button" tabindex="0">Más Información</a> <!-- Agrega role="button" y tabindex="0" para hacerlo activable con teclado -->
            </div>
          </article>
        `;
  
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 col-12';
        card.innerHTML = cardContentHTML;
        eventosContainer.appendChild(card);
      });
  
      // Cargar datos de patrocinadores
      const patrocinadoresResponse = await fetch('dataPatrocinadores.json'); // Cambia el nombre del archivo JSON
      const patrocinadoresData = await patrocinadoresResponse.json();
  
      const patrocinadoresContainer = document.getElementById('patrocinadores-cards-container');
  
      patrocinadoresData.patrocinadores.forEach((patrocinador) => {
        const logoImagen = document.createElement('img');
        logoImagen.src = patrocinador.logo;
        logoImagen.alt = patrocinador.nombre;
  
        // Aplicar estilos CSS
        logoImagen.classList.add('patrocinador-logo');
  
        logoImagen.addEventListener('click', () => {
          window.location.href = patrocinador.website;
        });
  
        patrocinadoresContainer.appendChild(logoImagen);
      });
    } catch (error) {
      console.log('Error al cargar los datos:', error);
    }
  });
  

  // Código jQuery para mostrar un modal al hacer clic en el botón "Participa"
  /*$(document).ready(function () {
    $("#participa-btn").click(function () {
        $("#loginModal").modal("show");
    });
  });
  */

var participaButton = document.getElementById("participa-btn");
  participaButton.addEventListener("click", function(){
    console.log("Botón de Participa clickeado");
      window.location.href = "index-nuevo-registro.html";
  });

  // Contador de tiempo para un evento
  const countdownDate = new Date("2023-09-19").getTime();
  
  const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeRemaining = countdownDate - currentTime;
  
      if (timeRemaining <= 0) {
          document.getElementById("countdown-timer").innerHTML = "¡Es hoy!";
      } else {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
          document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
  };
  
  setInterval(updateCountdown, 1000);

  