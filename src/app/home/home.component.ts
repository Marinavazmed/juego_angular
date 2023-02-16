import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  username = new FormControl('')

  muestraNombre(){
    //Aquí irá la petición POST al servidor. Por ahora sólo imprime el valor
    console.log(this.username.value)
  }
}


