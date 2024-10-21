
const form = document.getElementById("form");
const username = document.getElementById("username")
const email= document.getElementById("email");
const phone = document.getElementById("phone");
const description= document.getElementById("description");
const password = document.getElementById("password");
const password_confirmation = document.getElementById("password_confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();

})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();

})

password.addEventListener("blur", () => {
    checkInputPassword();

})

password_confirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();

})


phone.addEventListener("blur", () => {
    checkInputPhone();

})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue==""){
       errorInput(username,"Insira o seu Nome!!!");
    } else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
       
    }
}

function checkInputPhone(){
    const phoneValue = phone.value;

    if(phoneValue==""){
       errorInput(phone,"Insira o seu Nº de Telefone");
    } else{
        const formItem =phone.parentElement;
        formItem.className = "form-content"
       
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue==""){
       errorInput(email,"O email é obrigatório!!!");
    } else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
       
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue==""){
       errorInput(password,"A senha é obrigatoria!!!");
    } else if (passwordValue.length<8){
        errorInput(password, "A sua senha precisa ter no mínimo 8 caracteres")

    } else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
       
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmaionPasswordValue = password_confirmation.value;

    if( confirmaionPasswordValue ===""){
       errorInput(password_confirmation,"A senha é obrigatoria!!!")
    } else if (confirmaionPasswordValue !== passwordValue){
        errorInput(password_confirmation, "As senhas não são iguais")

    } else{
        const formItem = password_confirmation.parentElement;
        formItem.className = "form-content"
       
    }
}

function checkForm(){

    checkInputPhone();
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll("form-content")
    const isValid = [...formItems];
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error"
}

