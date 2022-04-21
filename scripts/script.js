var nome = document.querySelector("[name='nomeUsuario']")
var dataNascimento = document.querySelector("[name='dataNascimento']")
var cpf = document.querySelector("[name='cpf']")
var cep = document.querySelector("[name='endereco.cep']")
var logradouro = document.querySelector("[name='endereco.logradouro']")
var numero = document.querySelector("[name='endereco.numero']")
var bairro = document.querySelector("[name='endereco.bairro']")
var complemento = document.querySelector("[name='endereco.complemento']")
var cidade = document.querySelector("[name='endereco.cidade']")
var estado = document.querySelector("[name='endereco.estado']")
var telefoneFixo = document.querySelector("[name='telefoneFixo']")
var telefoneCelular = document.querySelector("[name='telefoneCelular']")
var email = document.querySelector("[name='email']")
var checkBox = document.querySelector("[name='checkBox']")

function validarCampos(){
    if(nome.value == undefined || nome.value == null || nome.value.length == 0 ){ 
        alerta('erro', 'O campo "nome" não foi informado.')
        return false
    }else if(dataNascimento.value == undefined || dataNascimento.value == null || dataNascimento.value.length == 0){
        alerta('erro', 'O campo "Data de Nascimento" não foi informado.')
        return false
    }else if(cpf.value == undefined || cpf.value == null || cpf.value.length == 0){
        alerta('erro', 'O campo "CPF" não foi informado.')
        return false
    }else if(cep.value == undefined || cep.value == null || cep.value.length == 0){
        alerta('erro', 'O campo "CEP" não foi informado.')
        return false
    }else if(logradouro.value == undefined || logradouro.value == null || logradouro.value.length == 0){
        alerta('erro', 'O campo "Logradouro" não foi informado.')
        return false
    }else if(numero.value == undefined || numero.value == null || numero.value.length == 0){
        alerta('erro', 'O campo "Número" não foi informado.')
        return false
    }else if(bairro.value == undefined || bairro.value == null || bairro.value.length == 0){
        alerta('erro', 'O campo "Bairro" não foi informado.')
        return false
    }else if(cidade.value == undefined || cidade.value == null || cidade.value.length == 0){
        alerta('erro', 'O campo "Cidade" não foi informado.')
        return false
    }else if(estado.value == undefined || estado.value == null || estado.value.length == 0){
        alerta('erro', 'O campo "Estado" não foi informado.')
        return false
    }else if(telefoneCelular.value == undefined || telefoneCelular.value == null || telefoneCelular.value.length == 0){
        alerta('erro', 'O campo "Telefone Celular" não foi informado.')
        return false
    }
    return true 
}

function validarIdade(){
    var dataAtual = new Date()
    var anoDigitado = dataNascimento.value.substr(0,4)
    var anoAtual = dataAtual.getFullYear()
    var idade = Number(anoAtual)-Number(anoDigitado)
    if(idade < 18){
        alert('Cadastro permitido somente para maiores de idade')
        return
    }
}

function cadastrar(){
    var campos = validarCampos()
    if(!campos){
        return 
    }
    validarIdade()
    alerta('sucesso', 'Cadastro realizado com sucesso!')
}

 async function buscarCep(){
    if(cep.value == undefined || cep.value == null || cep.value.length == 0){
        alerta('aviso', 'Informe um cep válido')
        return
    }
    var url = `https://viacep.com.br/ws/${cep.value}/json/`
    var obj = null
    await fetch(url).then(resposta => resposta.json()).then(res => obj = res)
    console.log(obj)
    if(obj.erro){
        alerta('aviso', 'CEP não encontrado!')
        return
    }

    logradouro.value = obj.logradouro
    bairro.value = obj.bairro
    complemento.value = obj.complemento
    cidade.value = obj.localidade
    estado.value = obj.uf
}
function alerta(tipo, mensagem) {
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var elementoDiv = document.createElement('div')
    var tipoAlerta = montarAlerta(tipo, mensagem)
    elementoDiv.innerHTML = tipoAlerta
    alertPlaceholder.append(elementoDiv)
}

  function montarAlerta(tipo, mensagem){
    var retorno = ''
    switch(tipo){
        case 'sucesso':
            retorno = "<div class='alert alert-success d-flex align-items-center alert-dismissible' role='alert' style='margin: 10px;'>"
            + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            + "<svg xmlns='http://www.w3.org/2000/svg' class='bi bi-check-circle-fill flex-shrink-0 me-2' width='24' height='24' fill='currentColor' viewBox='0 0 16 16' role='img' aria-label='Success:'>" +
            "<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/>" +
            "</svg>" +
            "<div>"
            +  mensagem 
           + "</div>"
          + "</div>"
        break;
        case 'erro':
            retorno = "<div class='alert alert-danger d-flex align-items-center alert-dismissible' role='alert' style='margin: 10px;'>"
            + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            + "<svg xmlns='http://www.w3.org/2000/svg' class='bi bi-exclamation-triangle-fill flex-shrink-0 me-2' width='24' height='24' fill='currentColor' viewBox='0 0 16 16' role='img' aria-label='Danger:'>" +
            "<path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/>" +
            "</svg>"
             + "<div>"
                 + mensagem
             + "</div>"
             + "</div>" 
        break;
        case 'aviso':
            retorno = "<div class='alert alert-warning d-flex align-items-center alert-dismissible' role='alert' style='margin: 10px;'>"
               + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
               + "<svg xmlns='http://www.w3.org/2000/svg' class='bi bi-exclamation-triangle-fill flex-shrink-0 me-2' width='24' height='24' fill='currentColor' viewBox='0 0 16 16' role='img' aria-label='Warning:'>" +
               "<path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/>" +
               "</svg>"
                + "<div>"
                    + mensagem
                + "</div>"
                + "</div>" 
        break;
        default:
            alert('Função ainda não implementada')            
    }
    console.log(retorno)
    return retorno
}