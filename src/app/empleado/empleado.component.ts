import { Component } from '@angular/core';
//Aquí importa la clase empleado, sobre la cual estamos creando este componente
import { Empleado } from './empleado';
//Si quieres usar parámetros pasados por ULRs, importamos:
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'empleado',
  //templateUrl vincula el selector html con el componente. Cuando usemos este elemento, traeremos 
  //el html equivalente a este componente, que se define en templateUrl:
  templateUrl: './empleado.component.html',
  styles: [
  ]
})
//Este es el constructor del COMPONENTE basado en empleado. Tiene una variable empleado de tipo Empleado,
//y en su constructor (que es el constructor del componente) construimos los objetos que vamos a imprimir en el html 
export class EmpleadoComponent {
    nombre = new FormControl('');
    public empleados:Array<Empleado>
    public empleado:Empleado;
    public empleado2:Empleado;
    public empleado3:Empleado;
    public colorSeleccionado:string;

    //aquí declararíamos el parámetro que traemos por URL
    //id:string;

    constructor(public fb: FormBuilder){
      this.empleados = [new Empleado("Pedro"), new Empleado("Ana"), new Empleado("Carlos")]
      this.empleado = new Empleado("Pedro")
      this.empleado2 = new Empleado("Ana")
      this.empleado3 = new Empleado("Carlos")
      this.colorSeleccionado = '#ccc';

      //this.id= this.actRoute.snapshot.params.['id']
    }


    saveData(){
      console.log(this.nombre.value)
      if(this.nombre.value!=null){
        this.empleados.push(new Empleado(this.nombre.value))
      }
    }

    cambiarNombre(nuevoNombre:string){
      this.empleado.nombre=nuevoNombre;
    }
}
