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
  constructor(private http:HttpClient, private _peticion: FraseService){
    this.frases = []
  }

  ngOnInit():void{
    this._peticion.getFrases().subscribe(data=>{    
      console.log(data)})
  }
}






