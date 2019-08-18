console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

titulo.addEventListener("click", function() {
    console.log("Implement first anonymous function.");
});

function mostraMensagem() {
    console.log("Hello, I have been clicked.");
}

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso     = paciente.querySelector(".info-peso").textContent;
    var altura   = paciente.querySelector(".info-altura").textContent;
    var imc      = paciente.querySelector(".info-imc");
    
    var pesoEhValido   = true;
    var alturaEhValida = true;
    
    if (peso < 1 || peso > 500) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        imc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura < 1 || altura > 2.99) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        imc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imcCalc  = peso / (Math.pow(altura, 2));
        imc.textContent = imcCalc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Hello, I'm a button and I has been clicked.");
});