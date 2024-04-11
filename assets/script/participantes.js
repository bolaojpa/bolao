// Função para carregar os nomes dos participantes da planilha
async function loadParticipantNames() {
    try {
        // Faz uma solicitação para obter os dados da planilha
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1LrsrINCUbhW_vuGMaa8MuBtbXhd-AZNZaWodOFuWLok/values/RANKING!A1:A10?key=AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw');
        
        // Verifica se a resposta está OK
        if (!response.ok) {
            throw new Error('Erro ao carregar dados da planilha');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        
        // Obtém os nomes dos participantes
        const participantes = data.values.flat(); // Converte matriz de matriz para uma matriz simples
        
        // Seleciona o elemento com a classe "participants-container"
        const participantsContainer = document.querySelector('.participants-container');

        // Atualiza os nomes dos participantes no HTML
        if (participantsContainer) {
            participantsContainer.innerHTML = ""; // Limpa os participantes existentes
            participantes.forEach((nome, index) => {
                const participantElement = document.createElement('span');
                participantElement.classList.add('participant');
                participantElement.innerText = `${index + 1}º ${nome || "Participante " + (index + 1)}`;
                participantsContainer.appendChild(participantElement);
            });
        }
    } catch (error) {
        console.error('Erro:', error);
        // Trate o erro conforme necessário
    }
}

// Chama a função para carregar os nomes dos participantes quando a página é carregada
window.onload = loadParticipantNames;
