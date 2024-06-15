// spreadsheet.js

const SPREADSHEET_ID = "1d4_mkF09Db-Wa13fBbjFTja5gBmXohEWMKWVXIhROaA";
const RANGE = "RANKING!B4";
const API_KEY = "AIzaSyAT7G9zCufaBkpXqSB95yXoOI0lyqg3Hyw"; // Substitua pelo sua chave de API do Google Sheets

async function fetchCellValue() {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
    const data = await response.json();
    return data.values[0][0]; // Retorna o valor da célula B4
}
