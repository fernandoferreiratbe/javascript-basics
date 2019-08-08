console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Conteúdo alterado via javascript";
console.log(titulo);