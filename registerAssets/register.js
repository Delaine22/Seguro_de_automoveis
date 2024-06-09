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

// CRIANDO FUNCINALIDADE PARA SIGN UP
let formulario = document.getElementById('signUp')
let inputs = document.querySelectorAll('.required')
let span = document.querySelectorAll('.span-required')
let emailRegex = /^\w+({-+.'}\w+)*@\w+({-.}\w+)*\.\w+({-.}\w+)*$/;

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    usernameValidate();
    emailValidate();
    passwordValidate();
    confirpassValidate();
})

function setError(index){
    inputs[index].style.border = '1px solid red'
    span[index].style.display = 'block'
}

function removeError(index){
    inputs[index].style.border =''
    span[index].style.display = 'none'
}

function usernameValidate(){
    if (inputs[0].value.length < 4){
        setError(0);
    } else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(inputs[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function passwordValidate(){
    if(inputs[2].value.length < 8){
        setError(2)
    }else{
        removeError(2)
        password2Validate();
    }
}

function confirpassValidate(){
    if(inputs[2].value == inputs[3].value && inputs[3].value.length >= 8){
        removeError(3)
    }else{
        setError(3)
    }
}

function check(){
    var checar = window.document.getElementById('checkbtn')
    var p = document.getElementById('tc')
    p.innerHTML = 'I agreed with the <a href="#"> Terms & Conditions'
    }