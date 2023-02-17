import { Component } from '@angular/core';
import { FraseService } from '../frase-service.service';
import { HttpClient } from '@angular/common/http';
import { Frase } from './frase';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styles: [
  ],
  providers: [FraseService]
})
export class PrincipalComponent {
  public frases:Array<Frase>
  public seleccionada:Frase
  public pista:String

  constructor(private http:HttpClient, private _peticion: FraseService){
    this.frases = []
    this.seleccionada = new Frase("","")
    this.pista = ""
  }


  ngOnInit():void{
    this._peticion.getFrases().subscribe(data=>{    
      this.frases = data  
      this.seleccionada = this.getAleatoria()
      this.pista = this.seleccionada.pista_inicial
    })

  }


  //Devuelve una frase aleatoria de las recibidas por el servidor
  getAleatoria(): Frase{
    const fraseSeleccionada = this.frases[Math.floor(Math.random() * this.frases.length)];
    return fraseSeleccionada
  }

}






