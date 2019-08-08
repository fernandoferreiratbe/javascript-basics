console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

console.log(titulo);
console.log(titulo.textContent);

var paciente = document.querySelector("#primeiro-paciente");
var peso     = paciente.querySelector(".info-peso").textContent;
var altura   = paciente.querySelector(".info-altura").textContent;
var imc      = paciente.querySelector(".info-imc");

var pesoEhValido   = true;
var alturaEhValida = true;

if (peso < 1 || peso > 999) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    imc.textContent = "Peso inválido!";
}

if (altura < 1 || altura > 2.99) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    imc.textContent = "Altura inválida!";
}

if (pesoEhValido && alturaEhValida) {
    var imcCalc  = peso / (Math.pow(altura, 2));
    imc.textContent = imcCalc;
}

