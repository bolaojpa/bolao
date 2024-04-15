$(document).ready(function() {
  var slideWidth = $('.slide').outerWidth(true); // Largura de cada slide
  var totalSlides = $('.slide').length; // Número total de slides
  var currentSlide = 0; // Slide atual
  var maxVisibleSlides = 3; // Número máximo de slides visíveis de uma vez
  var animationDuration = 500; // Duração da animação em milissegundos

  // Atualiza o carrossel para mostrar o slide atual
  function updateCarousel() {
    var newTransform = -slideWidth * currentSlide;
    $('.carousel-inner').stop().animate({ 'left': newTransform + 'px' }, animationDuration);
  }

  // Função para avançar para o próximo slide
  function nextSlide() {
    if (currentSlide < totalSlides - maxVisibleSlides) {
      currentSlide++;
      updateCarousel();
    }
  }

  // Função para retroceder para o slide anterior
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  // Associando a função nextSlide ao botão de próxima imagem
  $('.carousel-next').click(nextSlide);

  // Associando a função prevSlide ao botão de imagem anterior
  $('.carousel-prev').click(prevSlide);

  // Chamando a função updateCarousel para exibir o carrossel inicialmente
  updateCarousel();
});
