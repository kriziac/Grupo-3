document.addEventListener("DOMContentLoaded", function () {
    const datosParticipantesElement = document.getElementById("datos-participantes");
    const continueButton = document.querySelector("button#continue-button");
    const backButton = document.getElementById("back-button");
    const cardsPerPage = 16; // Número de tarjetas por página
    let currentPage = 1; // Página actual, inicialmente en la página 1
    let jsonData = []; // Almacena todos los datos JSON, ya barajeados

    // Función para cargar y mostrar tarjetas por página
    function loadPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const pageData = jsonData.slice(startIndex, endIndex);

        const html = pageData.map(participante => `
            <div class="participante">
                <img src="${participante.foto}" alt="Foto de ${participante.usuario}">
            </div>
        `).join('');

        datosParticipantesElement.innerHTML = html;
    }

    // Realiza la solicitud HTTP para obtener el archivo JSON
    fetch("data-participantes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON.");
            }
            return response.json();
        })
        .then(data => {
            // Barajea los datos JSON una sola vez al principio
            shuffleArray(data);
            jsonData = data; // Almacena todos los datos JSON, ya barajeados
            loadPage(currentPage); // Carga la primera página

            // Maneja el clic en el botón "Continue"
            continueButton.addEventListener("click", () => {
                currentPage++;
                loadPage(currentPage);
            });

            // Maneja el clic en el botón "Atrás"
            backButton.addEventListener("click", () => {
                currentPage--;
                if (currentPage < 1) {
                    currentPage = 1; // Evita páginas negativas
                }
                loadPage(currentPage);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // Función de barajado
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});


/*
const fileInput = document.getElementById("file"); 
const imageContainer = document.getElementById("profile-image-preview"); 
const deleteButton = document.getElementById("delete-image");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
      imageContainer.innerHTML = ""; 
      imageContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

deleteButton.addEventListener("click", function () {
  imageContainer.innerHTML = "";
  fileInput.value = ""; 
});

*/
