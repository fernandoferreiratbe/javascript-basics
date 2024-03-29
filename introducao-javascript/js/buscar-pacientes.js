var buscarPacientes = document.querySelector("#buscar-pacientes");
buscarPacientes.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    var erroAjax = document.querySelector("#erro-ajax");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});