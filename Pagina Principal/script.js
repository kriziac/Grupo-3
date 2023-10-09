document.addEventListener('DOMContentLoaded', async function () {
  try {
      // Fetch de eventos - Cambiar URL del servidor Back End
      const eventosResponse = await fetch('http://54.165.232.48:8080/events-api-v1/api/events');
      const eventosData = await eventosResponse.json();

      const eventosContainer = document.getElementById('eventos-cards-container');

      eventosData.forEach((evento) => {
          const cardContentHTML = `
              <article class="evento-card" role="article">
                  <img src="${evento.img}" class="evento-fotos" alt="${evento.name}">
                  <div class="evento-card-body">
                      <h5 class="evento-card-title">${evento.name}</h5>
                      <p class="evento-card-text">${evento.description}</p>
                      <p class="evento-card-text"><strong>Ubicación:</strong> ${evento.location}</p>
                      <p class="evento-card-text"><strong>Horario:</strong> ${evento.date}</p>
                      <a href="${evento.url}" class="btn btn-primary" role="button" tabindex="0">Más Información</a>
                  </div>
              </article>
          `;

          const card = document.createElement('div');
          card.className = 'col-lg-4 col-md-6 col-12';
          card.innerHTML = cardContentHTML;
          eventosContainer.appendChild(card);
      });

      // Fetch de patrocinadores - Cambiar URL del servidor Back End
      const patrocinadoresResponse = await fetch('http://54.165.232.48:8080/events-api-v1/api-sponsors');
      const patrocinadoresData = await patrocinadoresResponse.json();

      const logosContainer = document.getElementById('logos-container');

      patrocinadoresData.forEach((empresa) => {
          const logo = document.createElement('img');
          logo.src = empresa.logo;
          logo.alt = empresa.name;
          logo.classList.add('logo');

          const link = document.createElement('a');
          link.href = empresa.website;
          link.target = '_blank';
          link.appendChild(logo);

          logosContainer.appendChild(link);
      });
  } catch (error) {
      console.error('Error:', error);
  }
});

// Boton participa
var participaButton = document.getElementById("participa-btn");
participaButton.addEventListener("click", function () {
  console.log("Botón de Participa clickeado");
  window.location.href = "index-nuevo-registro.html";
});

var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
  console.log("Botón de Inicio de Sesión");
  window.location.href = "index-inicio-sesion.html";
});


//Banner
const countdownDate = new Date("2023-10-11").getTime();

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
