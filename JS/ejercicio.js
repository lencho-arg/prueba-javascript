class usuarios {
    constructor(nombre,apellido,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.pass
    }
    setPass(){
        let randomNumber = Math.floor(Math.random()*999)+1
        this.pass = this.nombre.slice(0,3) + randomNumber + this.apellido.slice(1,4)
    }
}

let arrayUsers = [
    new usuarios("Jose","Nardo",35),
    new usuarios("Dami","Guidor",35),
    new usuarios("Leter","Peci",35),
    new usuarios("Nestor","Juicio",35)
]
console.table(arrayUsers)
alert("Ahora comenzamos a generar las contraseñas")
for(user of arrayUsers) {
    user.setPass()
}