console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

console.log(titulo);
console.log(titulo.textContent);

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


