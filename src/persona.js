"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(nombre, edad, cargo) {
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.cargo}.`);
    }
}
exports.Empleado = Empleado;
