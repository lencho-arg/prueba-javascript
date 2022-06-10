


// No se que puedo crear para que mi fondo o background cambie de color

let cambiarBg = document.getElementById('fondo')

const darkMode = ()=>{
    let cambiarBg = document.createElement('div')
    cambiarBg.innerHTML = '<button class="btn btn-dark">DARK MODE</button>'
    document.getElementById('newFondo').append(cambiarBg)
}

cambiarBg.addEventListener('click',darkMode)

// CLICK AQUI SI SOS NUEVO USUARIO

let clickNew = document.getElementById('newUser1')

clickNew.onclick = ()=>{
    alert('Bienvenido')
}

// EVENTO DE VERIFICAR SI ESCRIBIERON EN EL FORM

let form = document.getElementById('formulario')
let inputEmail = document.getElementById('inputEmail3')
let inputPassword = document.getElementById('inputPassword3')

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log(inputEmail.value, inputPassword.value)
    if(inputEmail.value === '' || inputEmail.value === null || inputEmail.value === 'undefined'){
        alert('El campo nombre no puede estar vacio')
    }else{
        if(inputPassword.value === '' || inputPassword.value === null || inputPassword.value === 'undefined'){
            alert('El campo password esta vacio')
        }else{
            alert('Tus datos se enviaron correctamente')
        }
    }let salir //PREGUNTAR LA ZONA

    let entrada = prompt ("Que zona realizara " + inputEmail.value + "\n oeste \n este \n norte \n sur")
    
    if (entrada != "oeste" && entrada != "este" && entrada != "norte" && entrada != "sur"){
        do {
            alert("No ingreso zona")
            entrada = prompt ("Ingresa nuevamente la zona que realizara")
    
        }while (entrada != "oeste" && entrada != "este" && entrada != "norte" && entrada != "sur")
    
    }
    if (entrada == "oeste"){
            alert("Ingresando a zona oeste")
    }   else if (entrada == "este"){
            alert("Ingresando a zona este")
    }   else if (entrada == "norte"){
            alert("Ingresando a zona norte")
    }   else if (entrada == "sur"){
            alert("Ingresando a zona sur")
    }
    
    salir = prompt ("Salir?")
})

// UNA VEZ QUE SE INGRESA SE REDIRIJE A OTRA PAGINA
// EL USUARIO VALIDARIA SU LEGAJO Y EL ELEGIRIA LA ZONA A TRABAJAR
// SEGUN LA ZONA SE ELIGE EL RECORRIDO Y SE EJECUTA EL MAPA CON LAS DIRECCIONES

// class usuarios {
//     constructor(nombre,apellido,edad){
//         this.nombre=nombre
//         this.apellido=apellido
//         this.edad=edad
//         this.pass
//     }
//     setPass(){
//         let randomNumber = Math.floor(Math.random()*999)+1
//         this.pass = this.nombre.slice(0,3) + randomNumber + this.apellido.slice(1,4)
//     }
// }

let arrayUsers = [
    new usuarios("Jose","Nardo",35),
    new usuarios("Dami","Guidor",35),
    new usuarios("Leter","Peci",35),
    new usuarios("Nestor","Juicio",35)
]



// PARA CREAR UN BOTON NUEVO DESDE OTRO BOTON


// let botonEnviar = document.getElementById('btn1')

// botonEnviar.addEventListener('click', ()=>{
//     alert('Gracias por volver nuevamente!')
// })

// const crearBtn = ()=>{
//     let nuevoBoton = document.createElement('div')
//     nuevoBoton.innerHTML = '<button type="submit" class="btn btn-light col-md-12">Ingresando ... </button>'
//     document.getElementById('btnEnviando').append(nuevoBoton)
// }

// botonEnviar.addEventListener('click',crearBtn)


// PARA VERIFICAR QUE ESCRIBEN

// let inputEmail = document.getElementById('inputEmail3')
// let inputPassword = document.getElementById('inputPassword3')

// inputEmail.addEventListener('keypress',(evento)=>{
//     let tecla = evento.key
//     if(evento.key === '@'){
//         alert('gracias')
//     }
//     console.log('tecla')
//     console.log(inputEmail.value)
// })