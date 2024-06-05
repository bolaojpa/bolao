// assets/script/banners.js
document.addEventListener("DOMContentLoaded", function() {
    // Animação dos banners
    const banners = document.querySelectorAll('.banner');
    banners.forEach((banner, index) => {
        setTimeout(() => {
            banner.classList.add('show');
        }, index * 500); // 500ms delay between each banner
    });

    // Abrir modais ao clicar nos elementos .modal-trigger
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = trigger.getAttribute('data-modal-target');
            const modal = document.querySelector(target);
            
            if (modal) {
                const modalInstance = new bootstrap.Modal(modal);
                modalInstance.show();
            }
        });
    });

    // Links dos iframes
    const iframeLinks = [
        {
            id: "bannerModal7",
            title: "Banner 1",
            iframeSrc: ""
        },
        {
            id: "bannerModal8",
            title: "Banner 2",
            iframeSrc: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vS3E8aeLw2b5CwqeWEvyHx6wNDmquA-UklsbcQt8xnM7Drph5iuP93nFaQ4V8ORjrChUMZKpLEXs4_n/pubhtml?gid=0&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal9",
            title: "Banner 3",
            iframeSrc: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQQNWAh-ZpQMpfj4g11SBksgyby_EKlTdOwEEAyp2qg7xHL0VibtFvTumgM0a5iyIJUdAkRD676Lb3I/pubhtml?gid=0&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal10",
            title: "Banner 4",
            iframeSrc: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vTBcmxKT8qGw48n-T8zMW62Zw1qL21SEcNFmvuqbvhQ7dI77UWUdQMn18hXHt2Nf3VAzRqPGNMwz9o6/pubhtml?gid=0&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal11",
            title: "Banner 5",
            iframeSrc: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQsl6VenrGlhrBUhWjkZQIPyJC5hIFLYxCnVyZMxQyxUtR1ZOZ4UZhui_rJ9t4BIATs_agPIKyXss01/pubhtml?gid=0&single=true&widget=false&headers=false&chrome=false&gridlines=false"
        },
        {
            id: "bannerModal12",
            title: "Banner 6",
            iframeSrc: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQr9Ngcfb92jdZ3a8TsolGtlRZgNhGq0FxuxAxN0GjdYLUOapHffw9jx0f2LzSxo-adL2thyLKJ0PMf/pubhtml?gid=0&single=true&widget=false&headers=false&chrome=false&gridlines=false&pli=1"
        }
    ];

   // Carregar iframes dos banners
   iframeLinks.forEach(banner => {
    const modal = document.getElementById(banner.id);
    if (modal) {
        modal.querySelector('.modal-title').innerText = banner.title;
        modal.querySelector('iframe').src = banner.iframeSrc;
    }
});
});