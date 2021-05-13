

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

function dropNav(){
    $navBar.style.top = "126px";
    $closeNav.style.display = "block";
    $iconChange.style.display = 'none';
}

function closeNav(){
    $navBar.style.top = "-230px";
    $closeNav.style.display = "none";
    $iconChange.style.display = 'block';
    $navBar.style.zIndex = '-1'
}
