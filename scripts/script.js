var nome = document.querySelector("[name='nomeUsuario']")
var dataNascimento = document.querySelector("[name='dataNascimento']")
var cpf = document.querySelector("[name='cpf']")
var cep = document.querySelector("[name='endereco.cep']")
var largadouro = document.querySelector("[name='endereco.logradouro']")
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
    }else if(dataNascimento.value == undefined || dataNascimento.value == null || dataNascimento.value.length == 0){
        alert('O campo "Data de nascimento" não foi informado.')
    }else if(cpf.value == undefined || cpf.value == null || cpf.value.length == 0){
        alert('O campo "CPF" não foi informado.')
    }else if(){
        
    }

}