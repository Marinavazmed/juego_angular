import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styles: [
  ]
})
export class RankingComponent {
  username = new FormControl('')
  puntuacion = ""

  //se supone que recoge el parámetro correspondiente a la route
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.puntuacion = params['param1'];
    });
    console.log(this.puntuacion)
}


  muestraNombre(){
    //Aquí irá la petición POST al servidor. Por ahora sólo imprime el valor
    console.log(this.username.value)
  }
}