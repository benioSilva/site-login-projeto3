function onclickRegistrar(){
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%203/coreui-free-bootstrap-admin-template-main/dist/register.html"
}

var usernameLoginId = "usernameLogin"
var passwordLoginId = "passwordLogin"
var dadosRegisterKey = "dadosRegistrados"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosRegisterKey)
    return JSON.parse(storageDados) || []
}

function checkValueNull(){
    if(!getElementById(usernameLoginId).value){
    alert("preencher campo username")
    return false
    }
    if(!getElementById(passwordLoginId).value){
    alert("preencher campo password")
    return false
    }
    return true
}

function confirmarDadosLogin(){
    if(!checkValueNull()){
        return
    }
    validarDadosCadastrais()

}

function validarDadosCadastrais(){
    let realocandoDadosStorage = getStorageDados()
    realocandoDadosStorage = realocandoDadosStorage.filter(function(element, index){
        return element.username == getElementById(usernameLoginId).value
    })
    console.log(realocandoDadosStorage)
    if(realocandoDadosStorage.length == 1){
        if(realocandoDadosStorage[0].password == getElementById(passwordLoginId).value){
            window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%203/coreui-free-bootstrap-admin-template-main/dist/base/tables.html"
            return
        }
    }
    alert("usuario ou senha não confere")
    getElementById(usernameLoginId).value = ""
    getElementById(passwordLoginId).value = ""
}

