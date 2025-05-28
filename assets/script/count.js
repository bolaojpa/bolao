// Contagem regressiva para 13 de junho às 23:55
const countdownDate = new Date('June 13, 2024 23:55:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " Dia " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "";
        /* document.getElementById("bannerImage").classList.remove("hidden");
        document.getElementById("bannerImage").classList.add("visible"); */
        document.getElementById("frame-tabela").classList.remove("hidden");
        document.getElementById("frame-tabela").classList.add("visible");
    }
}

// Atualiza a contagem regressiva a cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);

function startCountdown() {
    // Data e hora do primeiro jogo do Super Mundial de Clubes 2025 (Brasília)
    const targetDate = new Date('2025-06-14T21:00:00-03:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "<b>O Super Mundial de Clubes 2025 já começou!</b>";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `<div style="text-align:center;font-size:1.5rem;">
                <span style="font-size:2rem;"> Faltam ${days}d ${hours}h ${minutes}m ${seconds}s</span>
            </div>`;
    }

    updateCountdown();
    var interval = setInterval(updateCountdown, 1000);
}

// Inicia o contador ao carregar a página
window.addEventListener('DOMContentLoaded', startCountdown);