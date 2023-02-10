import { Component } from '@angular/core';
import { PatineteService } from '../patinete.service';
import { HttpClient } from '@angular/common/http';
import { Patinete } from './patinete';

@Component({
  selector: 'patinete',
  templateUrl: './patinete.component.html',
  styles: [
  ],
  providers: [PatineteService]
})
export class PatineteComponent {
  public patinetes:Array<any>

  constructor(private http:HttpClient, private _peticion: PatineteService){
    this.patinetes = []
  }

  ngOnInit():void{
    this._peticion.getPatinetes().subscribe(data=>{    
      console.log(data)})
  }
}


