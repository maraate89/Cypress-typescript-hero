export interface Persona {
  nombre: string;
  edad: number;
}

export class Empleado implements Persona {
  nombre: string;
  edad: number;
  cargo: string;

  constructor(nombre: string, edad: number, cargo: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
  }

  public presentarse(): void {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.cargo}.`);
  }
}
