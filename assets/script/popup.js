const imagemPadrao = 'https://i.ibb.co/F4rjJBpw/EM-BREVE.png';

// Objeto que mapeia nomes a URLs de imagens
const imagensPorNome = {
    'RICARDO': 'https://i.ibb.co/dKMj1Yt/Ricardo.jpg',
    'ZAFFYNTH': 'https://i.ibb.co/vJJkgdG/Zaffynth.jpg',
    'JULLIUS': 'https://i.ibb.co/N6WqwTNZ/JULLIUS.jpg',
    'Leandro': 'https://i.ibb.co/k4sDbmk/Leandro.jpg',
    'TONY': 'https://i.ibb.co/4j1szxh/Tony.jpg',
    'WELLINGTON': 'https://i.ibb.co/TghWXPn/Wellington.jpg',
    'ELISSON': 'https://i.ibb.co/GttLB3G/Elisson.jpg',
    'Ranycleiton': 'https://i.ibb.co/8dj0tKy/Ranicleyton.jpg',
    'ALAN': 'https://i.ibb.co/zbd83tq/Alan.jpg',
    'DANIEL': 'https://i.ibb.co/zHJW7CXs/DANIEL.jpg',
    'RODRIGO': 'https://i.ibb.co/sH1V35V/Rodrigo.jpg'
};

// Função para carregar dados da planilha
async function loadSheetData() {
    try {
        /* const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1d4_mkF09Db-Wa13fBbjFTja5gBmXohEWMKWVXIhROaA/values/RANKING!B4?key=AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw'); */
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1C5pLBsdyP7i4sj0BFY9Cr4SvzVA4WcAHk68PFwviGRc/values/Ranking!B4?key=AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw');

        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }

        const data = await response.json();
        const nome = data.values[0][0];
        const urlImagem = imagensPorNome[nome] || imagemPadrao;

        if (urlImagem) {
            document.getElementById('modalImage').src = urlImagem;
        } else {
            throw new Error('URL da imagem não encontrado');
        }

    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para mostrar o modal
function showModal() {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    modal.classList.add("show"); // Adiciona a classe 'show' para exibir o modal suavemente
    closeBtn.style.display = "none"; // Ocultar o botão de fechar

    // Mostrar o botão de fechar após 7 segundos
    setTimeout(() => {
        closeBtn.style.display = "inline-block";

        closeBtn.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }, 5000);
}

// Função para iniciar o timer de navegação
function startNavigationTimer() {
    updateLastActivity();

    window.onclick = updateLastActivity;
    window.onmousemove = updateLastActivity;
    window.onkeydown = updateLastActivity;
}

// Atualiza o último tempo de atividade
function updateLastActivity() {
    setSessionCookie("lastActivityTime", new Date().getTime());
}

// Função para verificar se 5 minutos se passaram sem atividade do usuário
function checkInactivity() {
    const currentTime = new Date().getTime();
    const lastActivityTime = getSessionCookie("lastActivityTime");
    const timeSinceLastActivity = currentTime - lastActivityTime;

    if (timeSinceLastActivity >= 5 * 60 * 1000) {
        showModal();
    }
}

// Função para mostrar o modal na primeira visita
async function showOnFirstVisit() {
    try {
        await loadSheetData();
        showModal();
    } catch (error) {
        console.error('Erro ao buscar dados da planilha:', error);
        showModal(); // Mostrar o modal mesmo em caso de erro
    }
}

// Função para iniciar o check de inatividade
function startInactivityCheck() {
    setInterval(checkInactivity, 1000); // Checar a cada segundo
}

// Função para definir um cookie de sessão
function setSessionCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/; expires=0";
}

// Função para obter um cookie de sessão
function getSessionCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Inicializa a função para mostrar o modal na primeira visita
window.onload = function() {
    if (!getSessionCookie("firstVisit")) {
        setSessionCookie("firstVisit", "true");
        showOnFirstVisit();
    }
    startNavigationTimer();
    startInactivityCheck();
};
