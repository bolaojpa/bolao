document.addEventListener("DOMContentLoaded", function() {
    const modalImage = document.getElementById('modalImage');
    const modal = document.getElementById('myModal');
    
    // Função para redimensionar a imagem proporcionalmente
    function resizeImageToFitViewport(image, maxHeight) {
        const aspectRatio = image.width / image.height;
        const maxImageHeight = maxHeight * 0.8; // 80% da altura da janela
    
        // Ajusta a altura da imagem para 80% da altura da janela
        if (image.height > maxImageHeight) {
            image.height = maxImageHeight;
            image.width = maxImageHeight * aspectRatio;
        }
    }
    
    // Adiciona um evento de clique a cada imagem na galeria
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            resizeImageToFitViewport(modalImage, window.innerHeight);
        });
    });
    
    // Fecha o modal quando o usuário clica no botão Fechar
    const closeModalBtn = document.querySelector('.close');
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Fecha o modal quando o usuário clica fora da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    // Redimensiona a imagem quando a janela é redimensionada
    window.addEventListener('resize', function() {
        resizeImageToFitViewport(modalImage, window.innerHeight);
    });
});
