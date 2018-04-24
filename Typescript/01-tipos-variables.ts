// var nombre = "Vicente";
let segundoNombre = 'Adrian';
const cedula = '1718137159';
segundoNombre = 'Vicente';
// cedula = '123123213'; // Da error read-only
const URL_POLI = 'http://www.epn.edu.ec';
// segundoNombre = 123; // Duck Typing

////////
let nombre: String;
let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;

// let mascotas:object = {};
class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula?: String;

    constructor(nombre: String,
                edad: Number,
                cedula?: String,
    ) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        // Template Strings TILDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es :${this.mCedula}, la edad del usuario es: ${this.mEdad}`);
    }

}

let usuario: Usuario = new Usuario('Adrian', 28, '1718137159');

let usuarioOtro = {
    mNombre: 'Adrian',
    mEdad: 28,
    mCedula: '1718137159'
};

interface Usuario2 {
    mNombre:String;
    mEdad: Number;
    mCedula: String;

}

class UsuarioTres{

    //en vez de definir en el constructor cualquier cosa se puede decir lo que llega igualar a alguna cosa

    constructor(public mNombre: String,
                private mEdad:Number,
                protected mcedula : String){


    }
}


console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

function noHagoNada() {
}

console.log('No hago nada: ', noHagoNada());

let usuarioTres: Usuario;

interface UsuarioDos {
    mNombre: String;
    mEdad: Number;
    mCedula: String;

    imprimirEnConsola(nombre: String): void;

    usuario: Usuario;
}

<<<<<<< HEAD
class UsuarioTres {
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula?: String) {
    }
}








=======
>>>>>>> e3dce300169f6d5a74987fd99bb6fa809abf8828

console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

function noHagoNada() {
}

console.log('No hago nada: ', noHagoNada());

let usuarioTres: Usuario;

interface UsuarioDos {
    mNombre: String;
    mEdad: Number;
    mCedula: String;

    imprimirEnConsola(nombre: String): void;

    usuario: Usuario;
}

<<<<<<< HEAD






=======
class UsuarioTres {
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula: String) {
    }
}
>>>>>>> e3dce300169f6d5a74987fd99bb6fa809abf8828
