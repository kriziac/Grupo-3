document.addEventListener("DOMContentLoaded", function () {
    const datosParticipantesElement = document.getElementById("datos-participantes");
    const continueButton = document.querySelector("button#continue-button");
    const cardsPerPage = 16; // Número de tarjetas por página
    let currentPage = 1; // Página actual, inicialmente en la página 1
    let jsonData = []; // Almacena todos los datos JSON

    // Función para cargar y mostrar tarjetas por página
    function loadPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const pageData = jsonData.slice(startIndex, endIndex);

        // Llama a la función de barajado antes de mostrar las tarjetas
        shuffleArray(pageData);

        const html = pageData.map(participante => `
            <div class="participante">
                <img src="${participante.foto}" alt="Foto de ${participante.usuario}">
            </div>
        `).join('');

        datosParticipantesElement.innerHTML = html;
    }

    var loginButton = document.getElementById("loginBtn");
    loginButton.addEventListener("click", function () {
        console.log("Botón de Inicio de Sesión");
        window.location.href = "index-inicio-sesion.html";
    });

    var cerrarButton = document.getElementById("cerrar-sesion");
    cerrarButton.addEventListener("click", function () {
        console.log("Botón de Cerrar Sesión");
        window.location.href = "index.html";
    });

    // Agrega la función de barajado (shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
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
            jsonData = data; // Almacena todos los datos JSON
            loadPage(currentPage); // Carga la primera página

            // Maneja el clic en el botón "Continue"
            continueButton.addEventListener("click", () => {
                currentPage++;
                loadPage(currentPage);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
});


