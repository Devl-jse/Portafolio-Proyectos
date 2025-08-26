class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro = new Date()) {
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro instanceof Date ? fechaRegistro : new Date(fechaRegistro);
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro instanceof Date ? fechaRegistro : new Date(fechaRegistro);
    }
    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro.toLocaleDateString()}`;
    }
}

let personas = [
    new Persona('Juan', 'Perez', 30),
    new Persona('Ana', 'Gomez', 25)
];

let empleados = [
    new Empleado('Carlos', 'Lopez', 40, 50000),
    new Empleado('Maria', 'Rodriguez', 35, 60000)
];

let clientes = [
    new Cliente('Luis', 'Martinez', 28, '2024-06-01'),
    new Cliente('Sofia', 'Fernandez', 32, '2024-07-15')
];
//consultas:
console.log('Personas:');
personas.forEach(persona => {
    console.log(`ID: ${persona.idPersona}, Nombre: ${persona.nombre}, Apellido: ${persona.apellido}, Edad: ${persona.edad}`);
});
console.log('\nEmpleados:');
empleados.forEach(empleado => {
    console.log(`ID Persona: ${empleado.idPersona}, Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, Edad: ${empleado.edad}, ID Empleado: ${empleado.idEmpleado}, Sueldo: ${empleado.sueldo}`);
});
console.log('\nClientes:');
clientes.forEach(cliente => {
    console.log(`ID Persona: ${cliente.idPersona}, Nombre: ${cliente.nombre}, Apellido: ${cliente.apellido}, Edad: ${cliente.edad}, ID Cliente: ${cliente.idCliente}, Fecha Registro: ${cliente.fechaRegistro.toLocaleDateString()}`);
});
