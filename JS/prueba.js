
alert("Hola Bienvenido")

let salir


    do {
        let nombreEmpresa = prompt ("Ingrese Empresa")
        let nombreIngresado = parseInt (prompt ("Ingrese su Número de Usuario"))

        if (nombreEmpresa != "" && !nombreEmpresa.match("[A-Za-z]")){
            do {
                alert("No ingresaste un nombre valido!")
                nombreEmpresa = prompt ("Ingrese Empresa")
                
            } while (nombreEmpresa != "" && !nombreEmpresa.match("[A-Za-z]"))
            
        }
        else if (nombreIngresado != "" && isNaN(nombreIngresado)){
            do {
                alert("No ingresaste número correcto")
                nombreIngresado = parseInt (prompt ("Ingrese su Número de Usuario"))
                
            }while (nombreIngresado != "" && isNaN(nombreIngresado))
            
        }
        else alert ("Bienvenido a " + nombreEmpresa + " su legajo es " + nombreIngresado)

        // PREGUNTAR ZONA

        let entrada = prompt ("Que zona realizara " + nombreIngresado + "\n oeste \n este \n norte \n sur")

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
        
    } while (salir == "no")



// SACAR EL IVA


class Producto {

    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false
        this.stock = false
    }
    sumaIva() {
        this.precio = "$" + this.precio * 1.21;
        console.log("El precio con IVA es: " + this.precio)
    }
    vender() {
        this.vendido = true;
        console.log("Vendido")
    }
    stocky() {
        this.stock = true;
        console.log("Hay Stock")
    }
}

const producto1 = new Producto ("Notebook", "150000");
const producto2 = new Producto ("Disco solido", "7500");


producto1.sumaIva();
producto2.sumaIva();
producto1.vender();




// VERDULERIA


let verduleria = ["banana", "ciruela", "manzana", "coco"]

// let salir

function AnadirFruta(){

    let sumarFruta = prompt("Que fruta quiere sumar?").toLowerCase()
    if(sumarFruta != "no"){
        verduleria.push(sumarFruta)
    }
}


function DesacerFrutas(){

    let borrarFruta = prompt("Cual fruta desea eliminar?").toLowerCase()
    let eliminarFrutas = verduleria.indexOf(borrarFruta)

    if(eliminarFrutas>=0){
        verduleria.splice(eliminarFrutas,1)
    }
}


function BuscandoFruta(){

    let buscarFruta = prompt("Que fruta esta buscando?").toLowerCase()
    if(verduleria.includes(buscarFruta)){
        alert("Si tengo " + buscarFruta)
    }
}


do{
    let entrada = prompt ("Que desea hacer en la verduleria? \n Mostrar \n Buscando \n Sumar \n Eliminar")

    if (entrada != "mostrar" && entrada != "buscando" && entrada != "sumar" && entrada != "eliminar"){
        do {
            alert("No ingreso opcion")
            entrada = prompt ("Ingresa nuevamente lo que quiere hacer")

        }while (entrada != "mostrar" && entrada != "buscando" && entrada != "sumar" && entrada != "eliminar")

    }
    if (entrada == "mostrar"){
            alert(verduleria)
    }   else if (entrada == "buscando"){
            BuscandoFruta()
            alert(verduleria)
    }   else if (entrada == "sumar"){
            AnadirFruta()
            alert(verduleria)
    }   else if (entrada == "eliminar"){
            DesacerFrutas()
            alert(verduleria)
    }


    salir = prompt ("Salir?")
}while (salir == "no")

