var nombre = "28";
var edad = 28
var fecha = new Date();
var casado = false; // true
var casa = undefined;


var usuario = {
    "nombre": "Adrian",
    apellido: "Eguez",
    cedula: '1718137159',
    imprimirEnConsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
    }
};


function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};


console.log(sumarDosNumeros(1, 2));


console.log("Usuario: ", usuario);


var arreglo = []
console.log(casa ? "Verdadero" : "Falso");
if (casa) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}


var carro = null;


console.log(fecha);
// ctrl + alt + l
if (nombre !== edad) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}