class Persona {

    constructor (nombre, usuario) {
    
        this.nombre = nombre.toUpperCase()
        this.usuario = usuario
    
        this.stock = function() {
            if(this.nombre != "" && this.usuario != 0 ){
                console.log("Tu nombre es " + this.nombre + " y tu numero de usuario es " + this.usuario)
            }else{
                console.log(false)
            }
        }

    }

    hablar() {
        console.log("Hola soy " + this.nombre)
    }

}

const usuario1 = new Persona("Lencho", 555)
usuario1.stock()
usuario1.hablar()
