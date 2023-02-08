import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  //templateUrl vincula el html con el componente.
  templateUrl: './empleado.component.html',
  styles: [
  ]
})
//Este es el constructor del COMPONENTE basado en empleado. Tiene una variable empleado de tipo Empleado,
//y en su constructor (que es el constructor del componente) construimos los objetos que vamos a imprimir en el html 
export class EmpleadoComponent {
    public empleado:Empleado;
    public empleado2:Empleado;
    public colorSeleccionado:string;

    constructor(){
      this.empleado = new Empleado("Pedro")
      this.empleado2 = new Empleado("Ana")
      this.colorSeleccionado = '#ccc';
    }

    cambiarNombre(nuevoNombre:string){
      this.empleado.nombre=nuevoNombre;
    }
}
