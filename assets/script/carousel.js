$(document).ready(function() {
  $('.image-block').click(function() {
      $('.image-block').removeClass('selected');
      $(this).addClass('selected');
  });
});
