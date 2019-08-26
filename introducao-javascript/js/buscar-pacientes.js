var buscarPacientes = document.querySelector("#buscar-pacientes");
buscarPacientes.addEventListener("click", function() {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});