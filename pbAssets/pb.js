//FUNCIONALIDADE DA BARRA DE NAVEGACAO
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