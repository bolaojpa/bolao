// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rolagem suave
    });
}

// Mostrar ou ocultar o botão flutuante com base na posição da rolagem
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}
