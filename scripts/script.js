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
        alert('O campo "nome" não foi informado.')
        return false
    }else if(dataNascimento.value == undefined || dataNascimento.value == null || dataNascimento.value.length == 0){
        alert('O campo "Data de nascimento" não foi informado.')
        return false
    }else if(cpf.value == undefined || cpf.value == null || cpf.value.length == 0){
        alert('O campo "CPF" não foi informado.')
        return false
    }else if(cep.value == undefined || cep.value == null || cep.value.length == 0){
        alert('O campo "CEP" não foi informado.')
        return false
    }else if(logradouro.value == undefined || logradouro.value == null || logradouro.value.length == 0){
        alert('O campo "Largadouro" não foi informado.')
        return false
    }else if(numero.value == undefined || numero.value == null || numero.value.length == 0){
        alert('O campo "Número" não foi informado.')
        return false
    }else if(bairro.value == undefined || bairro.value == null || bairro.value.length == 0){
        alert('O campo "Bairro" não foi informado.')
        return false
    }else if(cidade.value == undefined || cidade.value == null || cidade.value.length == 0){
        alert('O campo "Cidade" não foi informado.')
        return false
    }else if(estado.value == undefined || estado.value == null || estado.value.length == 0){
        alert('O campo "Estado" não foi informado.')
        return false
    }else if(telefoneCelular.value == undefined || telefoneCelular.value == null || telefoneCelular.value.length == 0){
        alert('O campo "Telefone Celular" não foi informado.')
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
}