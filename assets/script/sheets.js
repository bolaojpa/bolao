const imagemPadrao = 'https://i.ibb.co/T0pRBgW/mascote-euro.jpg';

// Objeto que mapeia nomes a URLs de imagens
const imagensPorNome = {
    "Palhinha": "https://i.ibb.co/gJJLnfc/palhinha.jpg",
    "Bebeto": "https://i.ibb.co/5vJ4k1y/bebeto.jpg",
    // Adicione mais nomes e URLs de imagens conforme necessário
};

// Função para carregar dados da planilha
async function loadSheetData() {
    try {
        // Faz uma solicitação para obter os dados da planilha
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1LrsrINCUbhW_vuGMaa8MuBtbXhd-AZNZaWodOFuWLok/values/LIDER!A1:A1?key=AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw');
        
        // Verifica se a resposta está OK
        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        
        // Obtém o nome da planilha
        const nome = data.values[0][0];
        
        // Obtém o URL da imagem correspondente ao nome
        const urlImagem = imagensPorNome[nome] || imagemPadrao;
        
        // Se o URL da imagem existir, exibe a imagem
        if (urlImagem) {
            document.getElementById('fotoParticipante').src = urlImagem;
            document.getElementById('nomeParticipante').innerText = nome;
        } else {
            throw new Error('URL da imagem não encontrado');
        }

        // Exibe a imagem e o nome do participante
        document.getElementById('fotoParticipante').src = urlImagem;
        document.getElementById('nomeParticipante').innerText = nome;

    } catch (error) {
        console.error('Erro:', error);
        // Trate o erro conforme necessário
    }
}

// Chama a função para carregar os dados da planilha quando a página é carregada
loadSheetData();
