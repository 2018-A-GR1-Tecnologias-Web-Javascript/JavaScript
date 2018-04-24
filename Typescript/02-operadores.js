var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [73, 123.32, 23, 43, 123, 43, 50, 1];
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
function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + (((edad) / 100) * deuda);
    }, 0);
}
var usuariosConCincoAniosMenos = arregloUsuarios
    .map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    // true se devuelve, false no se devuelve
    return (usuario.deuda < 100);
});
console.log('usuariosConCincoAniosMenos', usuariosConCincoAniosMenos);
var resultadoDeLasEdades = arregloUsuarios
    .reduce(function (totalEdadAcumulado, usuarioArreglo) {
    return totalEdadAcumulado + usuarioArreglo.edad;
}, 0);
console.log('resultadoDeLasEdades', resultadoDeLasEdades);
