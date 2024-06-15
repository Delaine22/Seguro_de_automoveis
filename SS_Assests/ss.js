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

// CRIAR FUNCAO PARA EGISTRATION FORM //
document.addEventListener('DOMContentLoaded', (event) => {
    // Função para carregar dados do Local Storage
    function loadLocalStorage() {
        if (localStorage.getItem('name')) {
            document.getElementById('name').value = localStorage.getItem('name');
        }
        if (localStorage.getItem('contribuinte')) {
            document.getElementById('contribuinte').value = localStorage.getItem('contribuinte');
        }
        if (localStorage.getItem('matricula1')) {
            document.getElementById('matricula1').value = localStorage.getItem('matricula1');
        }
        if (localStorage.getItem('matricula2')) {
            document.getElementById('matricula2').value = localStorage.getItem('matricula2');
        }
        if (localStorage.getItem('matricula3')) {
            document.getElementById('matricula3').value = localStorage.getItem('matricula3');
        }
        if (localStorage.getItem('email')) {
            document.getElementById('email').value = localStorage.getItem('email');
        }
    }

    // Função para salvar dados no Local Storage
    function saveToLocalStorage(id, value) {
        localStorage.setItem(id, value);
    }

    // Função para validar o Número de Contribuinte
    function validateContribuinte() {
        const contribuinte = document.getElementById('contribuinte').value;
        const errorSpan = document.getElementById('contribuinteError');
        if (contribuinte.length !== 9 || isNaN(contribuinte)) {
            errorSpan.textContent = 'Número de Contribuinte deve ter 9 dígitos.';
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    // Função para validar a Matrícula do Veículo
    function validateMatricula() {
        const matricula1 = document.getElementById('matricula1').value;
        const matricula2 = document.getElementById('matricula2').value;
        const matricula3 = document.getElementById('matricula3').value;
        const errorSpan = document.getElementById('matriculaError');
        const matriculaPattern = /^[A-Z]{2}$|^\d{2}$/;
        if (!(matriculaPattern.test(matricula1) && matriculaPattern.test(matricula2) && matriculaPattern.test(matricula3))) {
            errorSpan.textContent = 'Invalid.'; //Use os formatos AA-00-00, 00-00-AA, 00-AA-00, AA-00-AA.
            return false;
        } else {
            errorSpan.textContent = '';
            return true;
        }
    }

    // Carregar dados do Local Storage quando a página é carregada
    loadLocalStorage();

    // Salvar dados no Local Storage quando os campos mudam
    document.getElementById('name').addEventListener('input', (event) => {
        saveToLocalStorage('name', event.target.value);
    });
    document.getElementById('contribuinte').addEventListener('input', (event) => {
        saveToLocalStorage('contribuinte', event.target.value);
        validateContribuinte();
    });
    document.getElementById('matricula1').addEventListener('input', (event) => {
        saveToLocalStorage('matricula1', event.target.value);
        validateMatricula();
    });
    document.getElementById('matricula2').addEventListener('input', (event) => {
        saveToLocalStorage('matricula2', event.target.value);
        validateMatricula();
    });
    document.getElementById('matricula3').addEventListener('input', (event) => {
        saveToLocalStorage('matricula3', event.target.value);
        validateMatricula();
    });
    document.getElementById('email').addEventListener('input', (event) => {
        saveToLocalStorage('email', event.target.value);
    });

    // Validação do formulário antes de enviar
    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        if (!validateContribuinte() || !validateMatricula()) {
            event.preventDefault();
        }
    });
});