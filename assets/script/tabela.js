window.addEventListener("DOMContentLoaded", function () {
    var iframe = document.querySelector("#iframeSection iframe");

    // Atualiza a altura do iframe quando o tamanho da janela é alterado
    window.addEventListener("resize", function () {
        iframe.style.height = "100vh"; // Define a altura inicial como 100% da altura da tela
    });
});