document.addEventListener("DOMContentLoaded", function () {
    var footerData = {
        copyright: "Copyright © 2024 - Bolaojpa"
    };

    generateDynamicFooter(footerData);
});

function generateDynamicFooter(footerData) {
    var footer = document.getElementById("dynamicFooter");

    var footerContainer = document.createElement("div");
    footerContainer.className = "container";

    var footerText = document.createElement("span");
    footerText.className = "footer-text"; // Classe para estilização do texto
    footerText.textContent = footerData.copyright;

    footerContainer.appendChild(footerText);
    footer.appendChild(footerContainer);
}
