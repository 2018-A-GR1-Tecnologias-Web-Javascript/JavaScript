let arregloNumeros = [1, 2, 3, 4, 5];

let sumarDosNumeros = (numeroUno: number, numeroDos: number) => { //fat arrow funct}
    return numeroUno + numeroDos;
};

let totalEdades = arregloDeNumeros => {
    // codigo extra
};
let facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
let facultadesDos = (a: number, b: number) => ['Facultad1', 'Facultad2'];


facultadesDos(1, 2);


// operador
let sumar = 0;
let resultadoForEach = arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        sumar = sumar + valor;
        console.log(sumar);
    }
);

let resultadoDeLaSuma = arregloNumeros
    .reduce(
        (totalAcumulado, valorArreglo) => {
            return totalAcumulado - valorArreglo;
        },
        20
    );

let resultadoDeLaSumaDos = arregloNumeros
    .reduce((totalAcumulado, valorArreglo) => totalAcumulado - valorArreglo, 20);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);







