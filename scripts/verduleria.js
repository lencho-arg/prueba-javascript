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
