console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");
titulo.addEventListener("click", function() {
    console.log("Implement first anonymous function.");
});

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
    
    var form = document.querySelector("#form-adiciona");

    var nome    = form.nome.value;
    var peso    = form.peso.value;
    var altura  = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});