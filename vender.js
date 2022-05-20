class Producto {

    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false
    }
    sumaIva() {
        this.precio = "$" + this.precio * 1.21;
        console.log("El precio con IVA es: " + this.precio)
    }
    vender() {
        this.vendido = true;
        console.log("Vendido")
    }
}

const producto1 = new Producto ("Notebook", "150000");
const producto2 = new Producto ("Disco solido", "7500");

producto1.sumaIva();
producto2.sumaIva();
producto1.vender();