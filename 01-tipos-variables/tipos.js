var nombre = "28";
var edad = 28
var fecha = new Date();
var casado = false; // true
var casa = undefined;


var usuario = {
    "nombre": "Adrian",
    apellido: "Eguez",
    cedula: '1718137159',
    imprimirEnConsola: sumarDosNumeros
};

console.log(usuario.imprimirEnConsola);


function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};


console.log(usuario.cedula);
console.log(usuario.nombre);
console.log(usuario.apellido);
// console.log(usuario.imprimirEnConsola(1,2));


/*
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

*/

var arregloDeNumeros = [
    1,
    false,
    null,
    undefined,
    {nombre: "Adrian", edad: 28},
    [],
    function nombreDeFuncion() {
        return 1
    },
    sumarDosNumeros(1, 2)];

console.log('arregloDeNumeros', arregloDeNumeros);

for (var aux = 0; aux < 10; aux++) {
    console.log('Aux: ', aux);
}






