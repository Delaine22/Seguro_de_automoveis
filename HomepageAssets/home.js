//CRIANDO FUNCIONALIDADE A BARRA DE NAVEGACAO //
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


// CRIANDO FUNCIONALIDADE A CLASS ACCORDION //
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion_body');
        body.classList.toggle('active');
    })
})

window.sr = ScrollReveal({ reset: true });
sr.reveal('#introducao',{
    duration:1000,
    rotate:{y:18}
});
sr.reveal('#feedback',{
    duration:1000,
    rotate:{y:18}
});
sr.reveal('#accordion',{
    duration:1000,
    rotate:{y:18}
});
