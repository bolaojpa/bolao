// Calcula a largura do container dos participantes com base na posição do título "RANKING"
function adjustParticipantsWidth() {
    const rankingTitle = document.querySelector('.ranking-title');
    const participantsContainer = document.querySelector('.participants-container');

    if (rankingTitle && participantsContainer) {
        const rect = rankingTitle.getBoundingClientRect();
        const width = rect.left;
        participantsContainer.style.width = width + 'px';
    }
}

// Chamada inicial e ao redimensionar a janela
adjustParticipantsWidth();
window.addEventListener('resize', adjustParticipantsWidth);
