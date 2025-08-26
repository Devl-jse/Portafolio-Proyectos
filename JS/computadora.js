class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton [ID: ${this._idRaton}, ${super.toString()}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}, ${super.toString()}]`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }
    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }
    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }

    toString() {
        return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}, ${this._monitor.toString()}, ${this._teclado.toString()}, ${this._raton.toString()}]`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static MAX_ORDENES = 5;

    constructor() {
        if (Orden.contadorOrdenes >= Orden.MAX_ORDENES) {
            throw new Error('Se ha alcanzado el máximo de órdenes permitidas.');
        }
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }
    get computadoras() {
        return this._computadoras;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let ordenInfo = `Orden [ID: ${this._idOrden}]\n`;
        for (let computadora of this._computadoras) {
            ordenInfo += computadora.toString() + '\n';
        }
        return ordenInfo;
    }

    toString() {
        return this.mostrarOrden();
    }
}


// Crear monitores
const monitor1 = new Monitor('Dell', '24 pulgadas');
const monitor2 = new Monitor('HP', '27 pulgadas');
const monitor3 = new Monitor('Samsung', '21 pulgadas');
const monitor4 = new Monitor('LG', '32 pulgadas');
const monitor5 = new Monitor('Acer', '19 pulgadas');
const monitor6 = new Monitor('BenQ', '22 pulgadas');

// Crear teclados
const teclado1 = new Teclado('USB', 'Logitech');
const teclado2 = new Teclado('Bluetooth', 'Microsoft');
const teclado3 = new Teclado('USB', 'HP');
const teclado4 = new Teclado('Bluetooth', 'Apple');
const teclado5 = new Teclado('USB', 'Genius');
const teclado6 = new Teclado('Bluetooth', 'Razer');

// Crear ratones
const raton1 = new Raton('USB', 'Logitech');
const raton2 = new Raton('Bluetooth', 'Microsoft');
const raton3 = new Raton('USB', 'HP');
const raton4 = new Raton('Bluetooth', 'Apple');
const raton5 = new Raton('USB', 'Genius');
const raton6 = new Raton('Bluetooth', 'Razer');

// Crear computadoras
const computadora1 = new Computadora('PC Gamer', monitor1, teclado1, raton1);
const computadora2 = new Computadora('PC Oficina', monitor2, teclado2, raton2);
const computadora3 = new Computadora('PC Hogar', monitor3, teclado3, raton3);
const computadora4 = new Computadora('PC Diseño', monitor4, teclado4, raton4);
const computadora5 = new Computadora('PC Estudiante', monitor5, teclado5, raton5);
const computadora6 = new Computadora('PC Portátil', monitor6, teclado6, raton6);

// Crear orden y agregar computadoras
const orden = new Orden();
orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);
orden.agregarComputadora(computadora3);
orden.agregarComputadora(computadora4);
orden.agregarComputadora(computadora5);
orden.agregarComputadora(computadora6);

// Mostrar orden en consola
console.log(orden.toString());