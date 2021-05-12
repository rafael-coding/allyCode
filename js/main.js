
//Elementos DOM Form
const $login = document.querySelector("#login")
const $password = document.querySelector("#password")
const $inputError = document.querySelector("#inputError")
const $inputErrorPw = document.querySelector("#inputError2")


function validateLogin(){
    const loginInput = $login.value

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