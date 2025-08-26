class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    getIdProducto() {
        return this._idProducto;
    }

    getNombre() {
        return this._nombre;
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }

    getPrecio() {
        return this._precio;
    }

    setPrecio(precio) {
        this._precio = precio;
    }

    toString() {
        return `Producto [ID: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}]`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    getIdOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            this._contadorProductosAgregados++;
        } else {
            console.log('No se pueden agregar más productos a la orden.');
        }
    }

    calcularTotal() {
        return this._productos.reduce((total, producto) => total + producto.getPrecio(), 0);
    }

    toString() {
        const productosStr = this._productos.map(p => p.toString()).join('\n');
        return `Orden [ID: ${this._idOrden}]\nProductos:\n${productosStr}\nTotal: $${this.calcularTotal()}`;
    }
}

// Prueba de la aplicación de ventas
let producto1 = new Producto('Laptop', 15000);
let producto2 = new Producto('Mouse', 500);
let producto3 = new Producto('Teclado', 800);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

console.log(orden1.toString());