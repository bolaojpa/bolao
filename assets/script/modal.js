$(document).ready(function() {
    // Captura todos os elementos com a classe "img-thumbnail"
    var images = document.getElementsByClassName('img-thumbnail');
    
    // Adiciona um event listener para cada imagem
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        // Exibe o modal
        $('#myModal').css('display', 'block');
        
        // Define o atributo src da imagem no modal para a imagem clicada
        $('#modalImage').attr('src', this.src);
      });
    }
  
    // Fecha o modal quando clicar no botão de fechar (X)
    $('.close').click(function() {
      $('#myModal').css('display', 'none');
    });
  
    // Fecha o modal quando clicar fora da imagem
    $(window).click(function(event) {
      if (event.target == $('#myModal')[0]) {
        $('#myModal').css('display', 'none');
      }
    });
  });
  