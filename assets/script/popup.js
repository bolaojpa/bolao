// Função para exibir o popup quando a página é carregada
window.onload = function() {
    document.getElementById("popup").style.display = "block";
    setTimeout(function() {
      var closeButton = document.createElement("button");
      closeButton.innerHTML = "&times;"; // Ícone de fechar (X)
      closeButton.classList.add("close");
      closeButton.addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
      });
      document.querySelector(".popup-content").appendChild(closeButton);
    }, 7000); // Insere o botão de fechar após 7 segundos
  }
  