// Função para exibir o overlay
function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

// Função para esconder o overlay
function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

// Função para verificar a última visita do usuário e exibir o popup conforme necessário
function checkVisit() {
  const currentTime = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');

  console.log("Verificando visita...");

  // Verifica se é a primeira visita ou se já se passaram mais de 5 minutos desde a última visita
  if (!lastVisit || (currentTime - parseInt(lastVisit)) > (0 * 60 * 1000)) {
    // Exibe o popup e o overlay
    document.getElementById("popup").style.display = "block";
    showOverlay();

    // Armazena a informação da última visita
    localStorage.setItem('lastVisit', currentTime);
    
    // Adiciona o botão de fechar após 7 segundos
    setTimeout(function() {
      document.getElementById("closeBtn").style.display = "block";
    }, 7000);
  } else {
    // Se já se passaram menos de 5 minutos, não exibe o popup e esconde o overlay
    document.getElementById("popup").style.display = "none";
    hideOverlay();
  }
}

// Função para fechar o popup
document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  hideOverlay();
});

// Função para verificar se o usuário está visitando novamente dentro de 5 minutos
setInterval(checkVisit, 60000); // Verifica a cada minuto (60000 milissegundos)

// Chama a função para verificar a visita do usuário quando a página é carregada
window.addEventListener('load', checkVisit);
