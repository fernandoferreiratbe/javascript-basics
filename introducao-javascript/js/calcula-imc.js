var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso     = paciente.querySelector(".info-peso").textContent;
    var altura   = paciente.querySelector(".info-altura").textContent;
    var imc      = paciente.querySelector(".info-imc");
    
    var pesoEhValido   = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);
    
    if (!pesoEhValido) {
        imc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        imc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        imc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (Math.pow(altura, 2));

    return imc.toFixed(2);
}

function validarPeso(peso) {
    return (peso >= 0 && peso <= 500) ? true : false;
}

function validarAltura(altura) {
    return (altura >= 0 && altura <= 3.0) ? true : false;
}