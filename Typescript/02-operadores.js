var arregloNumeros = [1, 2, 3, 4, 5];
// let arregloUsuarios: Array<UsuarioArreglo> =[
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Vicente',
        edad: 10
    },
    {
        nombre: 'Wendy',
        edad: 70
    },
    {
        nombre: 'Carolina',
        edad: 32
    },
    {
        nombre: 'Raul',
        edad: 25
    },
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    // codigo extra
};
var facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
var facultadesDos = function (a, b) { return ['Facultad1', 'Facultad2']; };
facultadesDos(1, 2);
// operador
var sumar = 0;
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadoDeLaSuma = arregloNumeros
    .reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
var resultadoDeLaSumaDos = arregloNumeros
    .reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);
var resultadoDeLasEdades = arregloUsuarios
    .reduce(function (totalEdadAcumulado, usuarioArreglo) {
    return totalEdadAcumulado + usuarioArreglo.edad;
}, 0);
console.log('resultadoDeLasEdades', resultadoDeLasEdades);
