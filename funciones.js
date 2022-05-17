//-------------- ACTIVIDAD 1 --------------//
let usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('EL NOMBRE ES ' + usuario);
}

class Hamburgesa {
    constructor(nombre, precio, ingredientes, combo) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
        this.combo = parseInt(combo);
    }
}
const hamburgesas = [];
hamburgesas.push(new Hamburgesa("Krusty Burger", 150, ['Carne', 'Queso'], 1));
hamburgesas.push(new Hamburgesa("Krusty Doble", 250, ['Carne', 'Queso', 'Panceta'], 0));
hamburgesas.push(new Hamburgesa("Krusty Pollo", 150, ['Pollo', 'Queso'], 2));
hamburgesas.push(new Hamburgesa("Super Krusty", 150, ['Carne', 'Queso', 'huevo'], 5));
hamburgesas.push(new Hamburgesa("Krusty Vegan", 150, ['Espinaca', 'Soja'], 7));
localStorage.setItem('hamburgesas', JSON.stringify(hamburgesas));

let almacenadas = localStorage.getItem('hamburgesas');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'SELECCIONAR HAMBURGUESA \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].ingredientes + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('INGRESAR HAMBURGUESA'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("HAMBURGUESA SELECCIONADA " + array[eleccion].nombre)
    } else {
        alert("ERROR DE SELECCION");
    }
}
