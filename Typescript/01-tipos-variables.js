// var nombre = "Vicente";
var segundoNombre = 'Adrian';
var cedula = '1718137159';
segundoNombre = 'Vicente';
// cedula = '123123213'; // Da error read-only
var URL_POLI = 'http://www.epn.edu.ec';
// segundoNombre = 123; // Duck Typing
////////
var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
// let mascotas:object = {};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        // Template Strings TILDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es :" + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Adrian', 28, '1718137159');
console.log(usuario);
