

/*-------------página de login----------*/
//Elementos DOM Form
const login = document.querySelector("#login")
const password = document.querySelector("#password")
const inputError = document.querySelector("#inputError")
const inputErrorPw = document.querySelector("#inputError2")
const btnEnviar = document.querySelector("#btnEnviar")


function validateLogin(){
    const loginInput = login.value
    const valid = onclick="window.location.href=logged.html"

    if(loginInput === ''){
        inputError.style.display = 'block';
        inputError.style.marginBottom = '10px';
        login.style.border = '1px solid red';
        login.style.marginBottom = '0px';
        return false;
    } else{
        inputError.style.display = 'none';
        login.style.border = '1px solid #979797';
        login.style.marginBottom = '20px';
        btnEnviar = valid
        return true;
    }
}

function validatePassword(){
    const passwordInput = password.value

    if(passwordInput === ''){
        inputErrorPw.style.display = 'block';
        inputErrorPw.style.marginBottom = '10px';
        password.style.border = '1px solid red';
        password.style.marginBottom = '0px';
        return false;
    } else{
        inputErrorPw.style.display = 'none';
        password.style.border = '1px solid #979797';
        password.style.marginBottom = '20px';
        return true;
    }
}

function validateForm(){
    validateLogin()
    validatePassword()

    if(validateLogin() === ''){
        return false
    }
    if(validatePassword() ===''){
        return false
    }
    return false
} 

/*----------página logado ------------*/


/*  elementos para abrir e fechar a navbar   */
const navBar = document.querySelector("#navBar")
const iconChange = document.querySelector("#icon")
const closeNavBar = document.querySelector("#iconClose")

/*elementos para dar hover no menu*/
const navHome = document.querySelector("#navHome")
const navEncontros = document.querySelector("#navEncontros")
const navAgenda = document.querySelector("#navAgenda")
const navSair = document.querySelector("#navSair")
const aHome = document.querySelector("#aHome")
const aEncontros = document.querySelector("#aEncontros")
const aAgenda = document.querySelector("#aAgenda")
const aSair = document.querySelector("#aSair")
const agendar = document.querySelector("#agendar")
const agendar1 = document.querySelector("#agendar1")
const agendar2 = document.querySelector("#agendar2")
const agendar3 = document.querySelector("#agendar3")
const agendar4 = document.querySelector("#agendar4")
const agendar5 = document.querySelector("#agendar5")
const agendar6 = document.querySelector("#agendar6")
const agendar7 = document.querySelector("#agendar7")

/*   elementos para abrir e fechar a seção de agendamento  */
const mettingSection = document.querySelector("#metting")
const mettingData = document.querySelector("#mettingData")

/*listiners para pegar onclick em todos os buttons agendar 
const $divAgendar = document.getElementsByClassName("agendarEncontro")
console.log($divAgendar)
const $agendar = document.getElementsByClassName("mettingShow")
 for(let div of $agendar){
     div.addEventListener('mouseover', hoverAgendar);
     div.addEventListener('mouseout', hoverOutAgendar);
     //for(let i = 0; i < $divAgendar.length; i ++)
 }
 */

/* função para abrir e fechar o navbar */
function dropNav(){
    navBar.style.display = "block";
    closeNavBar.style.display = "block";
    iconChange.style.display = 'none';
}

function closeNav(){
    navBar.style.display = "none";
    closeNavBar.style.display = "none";
    iconChange.style.display = 'block';
}




/*função para dar o hover nos itens da navbar */
/*-----------------------hover no home */
function hoverHome(){
    navHome.style.color = "#E21683";
    aHome.style.color = "#E21683";
}

function hoverOutHome(){
    navHome.style.color = "#404040";
    aHome.style.color = "#404040";
}

/*---------------------hover no Encontros */
function hoverEncontros(){
    navEncontros.style.color = "#E21683";
    aEncontros.style.color = "#E21683";
}

function hoverOutEncontros(){
    navEncontros.style.color = "#404040";
    aEncontros.style.color = "#404040";
}

/*-------------------------hover no agenda */
function hoverAgenda(){
    navAgenda.style.color = "#E21683";
    aAgenda.style.color = "#E21683";
}

function hoverOutAgenda(){
    navAgenda.style.color = "#404040";
    aAgenda.style.color = "#404040";
}

/*----------------------hover no sair */
function hoverSair(){
    navSair.style.color = "#E21683";
    aSair.style.color = "#E21683";
}

function hoverOutSair(){
    navSair.style.color = "#404040";
    aSair.style.color = "#404040";
}




/*------hover para aparecer o agendamento nos cards -------- */
/* estou separando os mouseovers por funcção (estudar fazer looping de divs, 8 cards é rápido, mais de 100 cards complica) */
/* ----- onmouseouver perfil 0 --- */
function hoverAgendar(){
    agendar.style.bottom = '0';
}

function hoverOutAgendar(){
    agendar.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 1 --- */
function hoverAgendar1(){
    agendar1.style.bottom = '0';
}

function hoverOutAgendar1(){
    agendar1.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 2 --- */
function hoverAgendar2(){
    agendar2.style.bottom = '0';
}

function hoverOutAgendar2(){
    agendar2.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 3 --- */
function hoverAgendar3(){
    agendar3.style.bottom = '0';
}

function hoverOutAgendar3(){
    agendar3.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 4 --- */
function hoverAgendar4(){
    agendar4.style.bottom = '0';
}

function hoverOutAgendar4(){
    agendar4.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 5 --- */
function hoverAgendar5(){
    agendar5.style.bottom = '0';
}

function hoverOutAgendar5(){
    agendar5.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 6 --- */
function hoverAgendar6(){
    agendar6.style.bottom = '0';
}

function hoverOutAgendar6(){
    agendar6.style.bottom = '-310px';
}
/* ----- onmouseouver perfil 7 --- */
function hoverAgendar7(){
    agendar7.style.bottom = '0';
}

function hoverOutAgendar7(){
    agendar7.style.bottom = '-310px';
}

/*----------função que irá dar display block na tela de agendamento */
function showMetting(){
    mettingSection.style.display= "block";
}

function closeMetting(){
    mettingSection.style.display= "none"
}

/* função para abrir o calendário na versão mobile que estará em display none */

function openCalendar(){
    mettingData.style.display="block"
}

function closeCalendar(){
    mettingData.style.display="none"
}