console.log("hello")
var usernameId = "usernameRegister"
var passwordId = "passwordRegister"
var emailId = "emailRegister"
var repeatPasswordId = "repeat-passwordRegister"
var btnCreateAccuontId = "btn-create-account"
var dadosRegisterKey = "dadosRegistrados"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosRegisterKey)
    return JSON.parse(storageDados) || []
}

function checkValueNull() {
    if (!getElementById(usernameId).value) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(emailId).value) {
        alert("preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value) {
        alert("preencher campo password")
        return false
    }
    if (!getElementById(repeatPasswordId).value) {
        alert("preencher campo repeat-password")
        return false
    }
    return true
}
function removerEspacos(){
    if (!getElementById(usernameId).value.trim()) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(emailId).value.trim()) {
        alert("preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value.trim()) {
        alert("preencher campo password")
        return false
    }
    if (!getElementById(repeatPasswordId).value.trim()) {
        alert("preencher campo repeat-password")
        return false
    }
    return true

}

getElementById(btnCreateAccuontId).addEventListener('click', function (event) {
    event.preventDefault();
    const realocandoDadosStorage = getStorageDados()

    if (!checkValueNull()) {
        return
    }
    if(!removerEspacos() == true){
        return
    }
    
    if (getElementById(passwordId).value != getElementById(repeatPasswordId).value) {
        alert('senhas não conferem')
    } else if(confirmarUsername() == true){
        return alert("Username já registrado")
    }
    
    else {
        let dadosParaLogin = {
            username: getElementById(usernameId).value,
            email: getElementById(emailId).value,
            password: getElementById(passwordId).value,
            status: "Desativado"
        }
        
        realocandoDadosStorage.push(dadosParaLogin)
        localStorage.setItem(dadosRegisterKey, JSON.stringify(realocandoDadosStorage))
        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(repeatPasswordId).value = ""
        alert("usuario criado com sucesso")
    }

})

function onclickLogin() {
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%203/coreui-free-bootstrap-admin-template-main/dist/login.html"
}

function confirmarUsername() {
    let realocandoDadosStorage = getStorageDados()
    realocandoDadosStorage = realocandoDadosStorage.filter(function(element){
        return element.username == getElementById(usernameId).value
    })
    console.log(realocandoDadosStorage)
    if(realocandoDadosStorage.length == 1){
       if (realocandoDadosStorage[0].username == getElementById(usernameId).value){
       
        return true
       }
    }
    
}
