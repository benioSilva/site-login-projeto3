console.log("hell")
var preencherTableaId = "preencherCorpo"
var dadosRegisterKey = "dadosRegistrados"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosRegisterKey)
    return JSON.parse(storageDados) || []
}
preencherListaDeDados()
function preencherListaDeDados(){
    getElementById(preencherTableaId).innerHTML = ""
    getStorageDados().forEach(function(element, index) {
        console.log(element, index)
        getElementById(preencherTableaId).innerHTML += ' <tr>' +
       ' <th scope="row">'+(index+1)+'</th>' + 
        '<td>'+element.username+'</td>' +
       '<td>'+element.email+'</td>' +
       '<td>'+element.status+'</td>' +
       '<td><button class="btn btn-outline-warning" onclick="onClickTroca('+index+')">Trocar Status</button></td>' +
       '<td><button class="btn btn-outline-danger" onclick="onClickExcluir('+index+')">Excluir</button></td>' +
      '</tr>'
    });
}
function onClickTroca(index){
    const realocandoStorageDados = getStorageDados()
    console.log(realocandoStorageDados)
    
        if(realocandoStorageDados[index].status == "Desativado"){
            realocandoStorageDados[index].status = "Ativado"
            localStorage.setItem(dadosRegisterKey, JSON.stringify(realocandoStorageDados))
        } else{
            realocandoStorageDados[index].status = "Desativado"
            localStorage.setItem(dadosRegisterKey, JSON.stringify(realocandoStorageDados))
        }
       
        preencherListaDeDados()
    
}

function onClickExcluir(param){
    let realocandoDadosStorage = getStorageDados()
    realocandoDadosStorage = realocandoDadosStorage.filter(function (element, index){
        return param != index
    })
    localStorage.setItem(dadosRegisterKey, JSON.stringify(realocandoDadosStorage))
    preencherListaDeDados()
}