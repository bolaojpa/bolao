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
            id: "bannerModal1",
            title: "Banner 1",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxDlirzqW6C7Zi9vOJsa0psx8zCJNOoDCDgI9TTsi1KVaKIPArCqBgEcaRW6cxU8QoN28gTqVroCWV/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;gridlines=false&amp;chrome=false"
        },
        {
            id: "bannerModal2",
            title: "Banner 2",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3E8aeLw2b5CwqeWEvyHx6wNDmquA-UklsbcQt8xnM7Drph5iuP93nFaQ4V8ORjrChUMZKpLEXs4_n/pubhtml?gid=713355819&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal3",
            title: "Banner 3",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQQNWAh-ZpQMpfj4g11SBksgyby_EKlTdOwEEAyp2qg7xHL0VibtFvTumgM0a5iyIJUdAkRD676Lb3I/pubhtml?gid=132095077&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal4",
            title: "Banner 4",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBcmxKT8qGw48n-T8zMW62Zw1qL21SEcNFmvuqbvhQ7dI77UWUdQMn18hXHt2Nf3VAzRqPGNMwz9o6/pubhtml?gid=713355819&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal5",
            title: "Banner 5",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsl6VenrGlhrBUhWjkZQIPyJC5hIFLYxCnVyZMxQyxUtR1ZOZ4UZhui_rJ9t4BIATs_agPIKyXss01/pubhtml?gid=536669253&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal6",
            title: "Banner 6",
            iframeSrc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQr9Ngcfb92jdZ3a8TsolGtlRZgNhGq0FxuxAxN0GjdYLUOapHffw9jx0f2LzSxo-adL2thyLKJ0PMf/pubhtml?gid=536669253&single=true&widget=false&headers=false&gridlines=false&chrome=false"
        },
        {
            id: "bannerModal7",
            title: "Banner 7",
            iframeSrc: ""
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