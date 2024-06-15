// Funções de ajuda para cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Função para mostrar o modal
function showModal() {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    modal.classList.add("show"); // Adiciona a classe 'show' para exibir o modal suavemente
    closeBtn.style.display = "none"; // Ocultar o botão de fechar

    // Mostrar o botão de fechar após 4 segundos
    setTimeout(() => {
        closeBtn.style.display = "inline-block";

        // Fechar o modal quando o usuário clicar no X
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Fechar o modal quando o usuário clicar fora da área do modal, apenas após 4 segundos
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }, 7000);
}

// Função para iniciar o timer de navegação
function startNavigationTimer() {
    // Define o último tempo de atividade como o tempo atual
    setCookie("lastActivityTime", new Date().getTime(), 1);

    // Adiciona eventos para detectar atividade do usuário
    window.onclick = updateLastActivity;
    window.onmousemove = updateLastActivity;
    window.onkeydown = updateLastActivity;
}

// Atualiza o último tempo de atividade
function updateLastActivity() {
    setCookie("lastActivityTime", new Date().getTime(), 1);
}

// Função para verificar se 5 minutos se passaram sem atividade do usuário
function checkInactivity() {
    const currentTime = new Date().getTime();
    const lastActivityTime = getCookie("lastActivityTime");
    const timeSinceLastActivity = currentTime - lastActivityTime;

    // Verifica se se passaram 5 minutos desde a última atividade
    if (timeSinceLastActivity >= 5 * 60 * 1000) {
        showModal();
    }
}

// Função para mostrar o modal na primeira visita
function showOnFirstVisit() {
    const firstVisit = getCookie("firstVisit");
    if (!firstVisit) {
        showModal();
        setCookie("firstVisit", "true", 1); // Marca como visitado
    }
}

// Função para iniciar o check de inatividade
function startInactivityCheck() {
    // Define o intervalo para checar inatividade
    setInterval(checkInactivity, 1000); // Checar a cada segundo
}

// Inicializa quando a página carrega
window.onload = function() {
    showOnFirstVisit(); // Mostrar modal na primeira visita
    startNavigationTimer(); // Inicia o timer de navegação
    startInactivityCheck(); // Começa a checar inatividade
}