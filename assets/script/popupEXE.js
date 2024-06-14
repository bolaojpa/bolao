// Mapeamento de nomes para URLs das imagens
const nameToImageUrl = {
    "Ricardo": "https://i.ibb.co/nQdtXzw/Ricardo.jpg",
    "Zaffynth": "https://i.ibb.co/PhnKGty/Zaffynth.jpg",
    "Jullius": "https://i.ibb.co/9YW3mS2/Jullius.jpg",
    "Leandro": "https://i.ibb.co/Q8N9bhm/Leandro.jpg",
    "Tony": "https://i.ibb.co/d0xVCZ8/Tony.jpg",
    "Wellington": "https://i.ibb.co/JmJZkYK/Wellington.jpg",
    "Elisson": "https://i.ibb.co/gJWqpfp/Elisson.jpg",
    "Ranycleiton": "https://i.ibb.co/xqpJhvq/Ranicleyton.jpg",
    "Alan": "https://i.ibb.co/C74BHwQ/Alan.jpg",
    "Daniel": "https://i.ibb.co/hfDy5PV/Daniel.jpg",
    "Rodrigo": "https://i.ibb.co/47pgYyH/Rodrigo.jpg"
};

// Função para carregar o nome da célula B4 da aba RANKING da planilha View
async function loadCellB4Value() {
    const sheetId = 'https://docs.google.com/spreadsheets/d/1d4_mkF09Db-Wa13fBbjFTja5gBmXohEWMKWVXIhROaA'; // Substitua com o ID da sua planilha
    const range = 'RANKING!B4';
    const apiKey = 'AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw'; // Substitua com sua chave de API do Google

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const name = data.values[0][0];
        return name;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return null;
    }
}

// Função para atualizar a imagem do modal de acordo com o nome na célula B4
async function updateModalImage() {
    const name = await loadCellB4Value();
    if (nameToImageUrl[name]) {
        const modalImage = document.getElementById("modalImage");
        modalImage.src = nameToImageUrl[name];
    }
}

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
async function showModal() {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    modal.classList.add("show"); // Adiciona a classe 'show' para exibir o modal suavemente
    closeBtn.style.display = "none"; // Ocultar o botão de fechar

    // Atualiza a imagem do modal
    await updateModalImage();

    // Mostrar o botão de fechar após 7 segundos
    setTimeout(() => {
        closeBtn.style.display = "inline-block";

        // Fechar o modal quando o usuário clicar no X
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Fechar o modal quando o usuário clicar fora da área do modal, apenas após 7 segundos
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
