class Compania {
    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
        this.recorridos = [];
    }
    agregarRecorrido(recorrido) {
        if (this.recorridos.length < 5){
            this.recorrido.push(recorrido);
        }
    }
    obtenerRecorrido(nroRecorrido) {
        return this.recorridos.find((recorrido) => (recorrido.nroRecorrido = nroRecorrido));
    }
}

let compania1 = new Compania("Nortur", 64);
console.log(compania1.nombre)

function validarRecorrido(recorrido){
    if (this.nombre.some(username => username.nombre = recorrido)){
        return true;
    } else {
        return false;
    }
}

class Recorrido {
    constructor(direccion, nroRecorrido){
        this.direccion = direccion;
        this.recorrido = nroRecorrido;
        this.usuarios = [];
    }
    obtenerRecorrido(){
        return this.nroRecorrido
    }
}

