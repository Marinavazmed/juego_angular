import { Component } from '@angular/core';
import { FraseService } from '../frase-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styles: [
  ],
  providers: [FraseService]
})
export class PrincipalComponent {
  public frases:Array<any>
  public seleccionada:Array<any>
  constructor(private http:HttpClient, private _peticion: FraseService){
    this.frases = []
    this.seleccionada = []
  }


  ngOnInit():void{
    this._peticion.getFrases().subscribe(data=>{    
      this.frases = data  
      this.seleccionada = this.getAleatoria()
      console.log(this.seleccionada)
    })

  }

  getAleatoria(): Array<any>{
    const fraseSeleccionada = this.frases[Math.floor(Math.random() * this.frases.length)];
    return (fraseSeleccionada.frase.toString()).split('')
  }

}






