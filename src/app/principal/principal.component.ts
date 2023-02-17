import { Component } from '@angular/core';
import { FraseService } from '../frase-service.service';
import { HttpClient } from '@angular/common/http';
import { Frase } from './frase';
import { Usuario } from './usuario';

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
  public usuario:Usuario

  constructor(private http:HttpClient, private _peticion: FraseService){
    this.frases = []
    this.seleccionada = new Frase("","")
    this.pista = ""
    //Iniciamos usuario con 1 punto para hacer las pruebas. NO DEFINITIVO
    this.usuario = new Usuario("",1,0)
  }


  ngOnInit():void{
    this._peticion.getFrases().subscribe(data=>{    
      this.frases = data  
      this.seleccionada = this.getAleatoria()
      this.pista = this.seleccionada.pista_inicial
    })

  }


  //Devuelve un OBJETO frase aleatorio de las recibidas por el servidor
  getAleatoria(): Frase{
    const fraseSeleccionada = this.frases[Math.floor(Math.random() * this.frases.length)];
    return fraseSeleccionada
  }

  //Compra una letra, gasta puntos del usuario. 
  //Esta función está en onclick
  comprarLetra():void{
    this.usuario.puntuacion = this.usuario.puntuacion -1
  }

  //Función para generar la siguiente frase. Funciona al 
  //usar el botón "saltar a siguiente pregunta por falta de puntos"
  //Y opción de reutilizar esta función al adivinar la frase
  siguienteFrase():void{
    this.seleccionada = this.getAleatoria()
    this.pista = this.seleccionada.pista_inicial
  }
}






