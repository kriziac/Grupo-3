// script.js
document.addEventListener("DOMContentLoaded", function () {
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
});
