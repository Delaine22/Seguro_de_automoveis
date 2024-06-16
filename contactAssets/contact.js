function showmenu() {
    let mobilemenu = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon .icon');

    if (mobilemenu.classList.contains('open')) {
        mobilemenu.classList.remove('open');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        mobilemenu.classList.add('open');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
} // FIM DA CRIACAO DA FUNCIONALIDADE DA BARRA DE NAVEHACAO

;