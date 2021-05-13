

/*-------------página de login----------*/
//Elementos DOM Form
const $login = document.querySelector("#login")
const $password = document.querySelector("#password")
const $inputError = document.querySelector("#inputError")
const $inputErrorPw = document.querySelector("#inputError2")
const $btnEnviar = document.querySelector("#btnEnviar")


function validateLogin(){
    const loginInput = $login.value
    const valid = onclick="window.location.href=logged.html"

    if(loginInput === ''){
        $inputError.style.display = 'block';
        $inputError.style.marginBottom = '10px';
        $login.style.border = '1px solid red';
        $login.style.marginBottom = '0px';
        return false;
    } else{
        $inputError.style.display = 'none';
        $login.style.border = '1px solid #979797';
        $login.style.marginBottom = '20px';
        $btnEnviar = valid
        return true;
    }
}

function validatePassword(){
    const passwordInput = $password.value

    if(passwordInput === ''){
        $inputErrorPw.style.display = 'block';
        $inputErrorPw.style.marginBottom = '10px';
        $password.style.border = '1px solid red';
        $password.style.marginBottom = '0px';
        return false;
    } else{
        $inputErrorPw.style.display = 'none';
        $password.style.border = '1px solid #979797';
        $password.style.marginBottom = '20px';
        return true;
    }
}

function validateForm(){
    validateLogin()
    validatePassword()

    if(validateLogin() == ''){
        return false
    }
    if(validatePassword() ==''){
        return false
    }
    return false
} 

/*----------página logado ------------*/

const $navBar = document.querySelector("#navBar")
const $iconChange = document.querySelector("#icon")
const $closeNav = document.querySelector("#iconClose")

/*elementos para dar hover no menu*/
const $navHome = document.querySelector("#navHome")
const $navEncontros = document.querySelector("#navEncontros")
const $navAgenda = document.querySelector("#navAgenda")
const $navSair = document.querySelector("#navSair")
const $aHome = document.querySelector("#aHome")
const $aEncontros = document.querySelector("#aEncontros")
const $aAgenda = document.querySelector("#aAgenda")
const $aSair = document.querySelector("#aSair")


/* função para abrir e fechar o navbar */
function dropNav(){
    $navBar.style.display = "block";
    $closeNav.style.display = "block";
    $iconChange.style.display = 'none';
}

function closeNav(){
    $navBar.style.display = "none";
    $closeNav.style.display = "none";
    $iconChange.style.display = 'block';
}


/*função para dar o hover nos itens da navbar */
/*-----------------------hover no home */
function hoverHome(){
    $navHome.style.color = "#E21683";
    $aHome.style.color = "#E21683";
}

function hoverOutHome(){
    $navHome.style.color = "#404040";
    $aHome.style.color = "#404040";
}

/*---------------------hover no Encontros */
function hoverEncontros(){
    $navEncontros.style.color = "#E21683";
    $aEncontros.style.color = "#E21683";
}

function hoverOutEncontros(){
    $navEncontros.style.color = "#404040";
    $aEncontros.style.color = "#404040";
}

/*-------------------------hover no agenda */
function hoverAgenda(){
    $navAgenda.style.color = "#E21683";
    $aAgenda.style.color = "#E21683";
}

function hoverOutAgenda(){
    $navAgenda.style.color = "#404040";
    $aAgenda.style.color = "#404040";
}

/*----------------------hover no sair */
function hoverSair(){
    $navSair.style.color = "#E21683";
    $aSair.style.color = "#E21683";
}

function hoverOutSair(){
    $navSair.style.color = "#404040";
    $aSair.style.color = "#404040";
}