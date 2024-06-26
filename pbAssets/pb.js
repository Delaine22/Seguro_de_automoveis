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

//FUNCIONALIDADE PARA CAROUSEL
   // Define o índice inicial da imagem como 0
let currentIndex = 0;

// Seleciona o container das imagens e todas as imagens dentro dele
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Função para mostrar a próxima imagem
function showNextImage() {
    // Avança o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % totalItems;

    // Ajusta a transformação do container para mostrar a próxima imagem
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Define o intervalo para avançar as imagens a cada 3 segundos
setInterval(showNextImage, 3000);