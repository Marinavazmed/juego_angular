import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../usuario-service.service';
import { Usuario } from '../principal/usuario';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styles: [
  ],
  providers: [UsuarioService]
})
export class RankingComponent {
  public profileForm!: FormGroup;
  puntuacion = ""

  //se supone que recoge el parámetro correspondiente a la route
  constructor(private route: ActivatedRoute, private _peticion: UsuarioService, public fb:FormBuilder ) {
    this.puntuacion = this.route.snapshot.params['puntuacion'] 
  }

  ngOnInit(){
    this.profileForm = this.fb.group({
      usuario: new FormControl(''),
      puntuacion: new FormControl(this.puntuacion),
      puntuacion_inicial: new FormControl(0)
    })
  }

  onSubmit(){
    //Aquí irá la petición POST al servidor. Por ahora sólo imprime el valor
    console.log(this.profileForm.value)
    this._peticion.addUsuario(this.profileForm.value).subscribe(data=>{})
  }
}