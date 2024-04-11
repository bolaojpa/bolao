// Função para ajustar a altura da div corpo para cobrir toda a altura da planilha
/* function ajustarAlturaCorpo() {
    var alturaJanela = window.innerHeight; // Altura da janela de visualização
  
    // Altura da barra de navegação (#topo)
    var navbarAltura = document.getElementById('topo').offsetHeight;
  
    // Altura do rodapé (#footer)
    var footerAltura = document.getElementById('footer').offsetHeight;
  
    // Altura total das seções dentro da div corpo
    var secoesAltura = 0;
    var secoes = document.querySelectorAll('#corpo .secao');
    secoes.forEach(function(secao) {
      secoesAltura += secao.offsetHeight;
    });
  
    // Calcula a nova altura da div corpo
    var novaAltura = alturaJanela - navbarAltura - footerAltura - secoesAltura;
  
    // Define a nova altura da div corpo
    document.getElementById('corpo').style.height = novaAltura + 'px';
  }
  
  // Chama a função quando a página é carregada e redimensionada
  window.onload = ajustarAlturaCorpo;
  window.onresize = ajustarAlturaCorpo;
   */