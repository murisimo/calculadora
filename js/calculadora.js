let resultado = 0;
let operacion = "";
let a = 0;
let b = 0;

function agregar(a) {
    let texto = document.getElementById("inputResultado");
    texto.value += a;
}

function limpiar() {
    let resultado = document.getElementById("inputResultado");
    resultado.value = "";
}

function sumar() {
    operacion = "suma";
    texto = document.getElementById("inputResultado");
    a = texto.value;
}
function restar() {
    operacion = "resta";
    texto = document.getElementById("inputResultado");
    a = texto.value;
}
function multiplicar() {
    operacion = "multiplicar";
    texto = document.getElementById("inputResultado");
    a = texto.value;
}
function dividir() {
    operacion = "division";
    texto = document.getElementById("inputResultado");
    a = texto.value;
}

function igual() {
    b = document.getElementById("inputResultado").value;
    resultado = document.getElementById("inputResultado");
    switch (operacion) {
        case "suma":
            resultado.value = parseInt(a) + parseInt(b);
            console.log(a);
            console.log(b);
            break;
        case "resta":
            resultado.value = parseInt(a - b);
            console.log(resultado);
            break;
        case "multiplicar":
            resultado.value = parseInt(a * b);
            break;
        case "division":
            resultado.value = parseInt(a / b);
            console.log(resultado)
            break;
        default:
            break;
    }
}
