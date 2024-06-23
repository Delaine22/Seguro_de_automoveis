// Define a função showmenu que será chamada para alternar o menu móvel
function showmenu() {
    // Seleciona o elemento com a classe 'mobile-menu'
    let mobilemenu = document.querySelector('.mobile-menu');
    // Seleciona o ícone dentro do elemento com a classe 'mobile-menu-icon'
    let icon = document.querySelector('.mobile-menu-icon .icon');

    // Verifica se o menu móvel já está aberto, verificando a classe 'open'
    if (mobilemenu.classList.contains('open')) {
        // Se o menu está aberto, remove a classe 'open' para fechá-lo
        mobilemenu.classList.remove('open');
        // Remove o ícone 'fa-times' (ícone de fechar) do elemento do ícone
        icon.classList.remove('fa-times');
        // Adiciona o ícone 'fa-bars' (ícone de menu) ao elemento do ícone
        icon.classList.add('fa-bars');
    } else {
        // Se o menu não está aberto, adiciona a classe 'open' para abri-lo
        mobilemenu.classList.add('open');
        // Remove o ícone 'fa-bars' (ícone de menu) do elemento do ícone
        icon.classList.remove('fa-bars');
        // Adiciona o ícone 'fa-times' (ícone de fechar) ao elemento do ícone
        icon.classList.add('fa-times');
    }
};


// FIM DA CRIACAO DA FUNCIONALIDADE DA BARRA DE NAVEHACAO


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
