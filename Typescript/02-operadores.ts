let arregloNumeros = [1, 2, 3, 4, 5];
let arregloDeudas = [73, 123.32, 23, 43, 123, 43, 50, 1];

// let arregloUsuarios: Array<UsuarioArreglo> =[
let arregloUsuarios: UsuarioArreglo[] = [
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
    .reduce(
        (totalAcumulado, valorArreglo) => {
            return totalAcumulado - valorArreglo;
        },
        20
    );
console.log('resultadoDeLaSuma', resultadoDeLaSuma);


function calcularDeudaDeUsuario(edad: number) {
    return arregloDeudas.reduce(
        (totalAcumulado, deuda: number) => {
            return totalAcumulado + (
                ((edad) / 100) * deuda
            )
        }, 0);
}


let usuariosConCincoAniosMenos = arregloUsuarios
    .map(
        (usuario: UsuarioArreglo) => {
            usuario.edad = usuario.edad - 5;
            usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
            return usuario;
        }
    );


console.log('usuariosConCincoAniosMenos', usuariosConCincoAniosMenos);

let resultadoDeLasEdades = arregloUsuarios
    .reduce(
        (totalEdadAcumulado, usuarioArreglo: UsuarioArreglo) => {
            return totalEdadAcumulado + usuarioArreglo.edad;
        },
        0
    );
console.log('resultadoDeLasEdades', resultadoDeLasEdades);


interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
}



