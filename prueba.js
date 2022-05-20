alert("Hola Bienvenido")

let salir

for (let i = 1; i <= 2; i++) {
    do {
        let nombreEmpresa = prompt ("Ingrese Empresa")
        let nombreIngresado = prompt ("Ingrese su Usuario")

        if ((nombreEmpresa != "") && (nombreIngresado != "")){
            alert("Bienvenido a " + nombreEmpresa + ", " + nombreIngresado)
        }
        else {
            alert("ERROR: Usuario invalido")
        }
        // if (i == 1) {
        //     continue;
        // }
        // console.log(i)

        // let salir = prompt ("Desea salir? Ingresar ESC")
        // while (salir != "ESC") {
        //     alert("El usuario ingreso" + salir)
        //     salir = prompt ("Ingresar otro dato")
        // }

        let entrada = prompt ("Que zona realizara " + nombreIngresado)

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

        let salir = prompt ("Salir?")
        
    } while (salir == "no")

}

