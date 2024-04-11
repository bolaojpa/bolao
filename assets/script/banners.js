$(document).ready(function() {
    $(".banner").each(function(index) {
        var banner = $(this);
        setTimeout(function() {
            banner.addClass("active");
        }, index * 500); // Atraso de 500ms entre cada banner
    });
});
