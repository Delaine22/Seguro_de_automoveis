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

// CRIANDO FUNCINALIDADE PARA SIGN UP

let formulario = document.getElementById('signUp');
let inputs = document.querySelectorAll('.required');
let span = document.querySelectorAll('.span-required');
let emailRegex = /^\w+({-+.'}\w+)*@\w+({-.}\w+)*\.\w+({-.}\w+)*$/;

formulario.addEventListener('submit', (event) => {
    usernameValidate();
    emailValidate();
    passwordValidate();
    confirpassValidate();

    // Verifica se há algum erro antes de permitir o envio
    let hasError = false;
    for (let i = 0; i < span.length; i++) {
        if (span[i].style.display === 'block') {
            hasError = true;
            break;
        }
    }

    // Se houver algum erro, previne o envio do formulário
    if (hasError) {
        event.preventDefault();
    }
});

function setError(index) {
    inputs[index].style.border = '1px solid red';
    span[index].style.display = 'block';
}

function removeError(index) {
    inputs[index].style.border = '';
    span[index].style.display = 'none';
}

function usernameValidate() {
    if (inputs[0].value.length < 4) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(inputs[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function passwordValidate() {
    if (inputs[2].value.length < 8) {
        setError(2);
    } else {
        removeError(2);
        confirpassValidate();
    }
}

function confirpassValidate() {
    if (inputs[2].value == inputs[3].value && inputs[3].value.length >= 8) {
        removeError(3);
    } else {
        setError(3);
    }
}



function check(){
    var checar = window.document.getElementById('checkbtn')
    var p = document.getElementById('tc')
    p.innerHTML = 'I agreed with the <a href="#"> Terms & Conditions'
    }