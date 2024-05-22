document.addEventListener("DOMContentLoaded", function () {
    var pages = [
        { name: "Home", link: "index.html" },
        { name: "Classificação", link: "classificacao.html" },
        { name: "Estatísticas", link: "estatisticas.html" },
        { name: "Hall da Fama", link: "halldafama.html" },
        { name: "Competição", link: "competicao.html" },
        { name: "Regras", link: "regras.html" }
    ];

    var navBar = document.createElement("nav");
    navBar.className = "navbar navbar-expand-md navbar-dark bg-primary";
    navBar.setAttribute("aria-label", "Offcanvas navbar large");
    navBar.id = "dynamicMenu"; // Adiciona o ID dinamicamente

    var offcanvasDiv = document.createElement("div");
    offcanvasDiv.className = "offcanvas offcanvas-end bg-primary";
    offcanvasDiv.setAttribute("tabindex", "-1");
    offcanvasDiv.id = "offcanvasNavbar2";
    offcanvasDiv.setAttribute("aria-labelledby", "offcanvasNavbar2Label");

    var offcanvasHeader = document.createElement("div");
    offcanvasHeader.className = "offcanvas-header";

    var offcanvasTitle = document.createElement("h5");
    offcanvasTitle.className = "offcanvas-title";
    offcanvasTitle.id = "offcanvasNavbar2Label";
    offcanvasTitle.textContent = "";

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close btn-close-white";
    closeButton.setAttribute("data-bs-dismiss", "offcanvas");
    closeButton.setAttribute("aria-label", "Close");

    offcanvasHeader.appendChild(offcanvasTitle);
    offcanvasHeader.appendChild(closeButton);

    var offcanvasBody = document.createElement("div");
    offcanvasBody.className = "offcanvas-body";

    var menuList = document.createElement("ul");
    menuList.id = "menu";
    menuList.className = "navbar-nav justify-content-end flex-grow-1 navbar-collapse";

    offcanvasBody.appendChild(menuList);
    offcanvasDiv.appendChild(offcanvasHeader);
    offcanvasDiv.appendChild(offcanvasBody);
    navBar.appendChild(offcanvasDiv);

    // Botão de toggle para dispositivos menores
    var toggleButton = document.createElement("button");
    toggleButton.className = "navbar-toggler";
    toggleButton.type = "button";
    toggleButton.setAttribute("data-bs-toggle", "offcanvas");
    toggleButton.setAttribute("data-bs-target", "#offcanvasNavbar2");
    toggleButton.setAttribute("aria-controls", "offcanvasNavbar2");
    toggleButton.setAttribute("aria-label", "Toggle navigation");
    toggleButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
    navBar.appendChild(toggleButton);

    // Adiciona a barra de navegação ao corpo do documento
    document.body.insertBefore(navBar, document.body.firstChild);

    // Gera o menu dinâmico
    generateDynamicMenu(pages);
});

function generateDynamicMenu(pages) {
    var menu = document.getElementById("menu");
    pages.forEach(function (page) {
        var menuItem = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = page.name;
        link.href = page.link;
        link.className = "nav-link";
        if (window.location.pathname === "/" + page.link) {
            link.classList.add("active");
        }
        menuItem.appendChild(link);
        menu.appendChild(menuItem);
    });
}
