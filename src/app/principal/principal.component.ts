import { Component, OnInit,ElementRef, AfterViewInit } from '@angular/core';
import { FraseService } from '../frase-service.service';
import { UsuarioService } from '../usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { Frase } from './frase';
import { Usuario } from './usuario';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styles: [
    '.roulette-container{position: relative; width: 800px; margin: 50px auto;}',
    '.roulette-list { display: flex; flex-wrap: wrap; justify-content: center; margin: 0; padding: 0; list-style: none; text-align: center; font-size: 24px;}',
    '.roulette-list li {display: inline-block; width: 40px; height: 40px; line-height: 40px; background-color: #fff; color: #000; border-radius: 50%; margin: 5px; box-shadow: 1px 1px 5px #000; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;}',
    '.roulette-list li:hover { transform: scale(1.2); box-shadow: 2px 2px 10px #000;}',
 
  ],
  providers: [FraseService]
})
export class PrincipalComponent implements OnInit,AfterViewInit{
  public frases:Array<Frase>
  public seleccionada:Frase
  public pista:String
  public usuario:Usuario
  public nivel:Number
  public vocales:Array<any>
  public consonantes: Array<any>
  public padre: any

  constructor(private http:HttpClient, private _peticion: FraseService,private panel: ElementRef){
    this.frases = []
    this.seleccionada = new Frase("","")
    this.pista = ""
    //Iniciamos usuario con 1 punto para hacer las pruebas. NO DEFINITIVO
    this.usuario = new Usuario("",100,0)
    this.nivel = 1
    this.vocales = ['a','e','i','o','u']
    this.consonantes = ['b','c','d','f','g','h', 'j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z']
    this.padre = document.createElement('div')
  }
  ngAfterViewInit() {
    const element = this.panel.nativeElement.querySelector('#panel');
    console.log(element); // el elemento seleccionado
    
    const padre = document.createElement('div');
    padre.classList.add('roulette-container')
    let ul = document.createElement('ul');
    element.appendChild(padre);
    padre.appendChild(ul)
    let frase = "HOLAAA"
    frase = frase.toUpperCase();
    let contador = 1;

    for (let i = 0; i < frase.length; i++) {
      let li = document.createElement('li');

      
      let letra = frase[i];
      let letraPanel = document.createTextNode(letra);
      li.appendChild(letraPanel);
      ul.appendChild(li);
      if (letra == ' ') {
        li.classList.add('blue');
        if (contador == 2) {
          li.classList.add('intro');
          contador = 0;
          
        }
        contador++;
      } else {
        li.classList.add('white');
      }
    }
  }

  ngOnInit():void{
    this._peticion.getFrases().subscribe(data=>{    
      this.frases = data  
      this.seleccionada = this.getAleatoria()
      this.pista = this.seleccionada.pista_inicial
      //aquí falta añadir el constructor del último usuario creado mediante POST
      //Puede enviarse 

    })
  }


  //Devuelve un OBJETO frase aleatorio de las recibidas por el servidor
  getAleatoria(): Frase{
    const fraseSeleccionada = this.frases[Math.floor(Math.random() * this.frases.length)];
    return fraseSeleccionada
  }

  //Compra una letra, gasta puntos del usuario. 
  //Esta función está en onclick
  comprarLetraVocal():void{
    if(this.usuario.puntuacion>0){
      this.usuario.puntuacion = this.usuario.puntuacion -25
    }else{
      this.usuario.puntuacion = 0
    }
  }
  comprarLetraConsonante():void{
    if(this.usuario.puntuacion>0){
      this.usuario.puntuacion = this.usuario.puntuacion -1
    }else{
      this.usuario.puntuacion = 0
    }
  }

  //Función para generar la siguiente frase. Funciona al 
  //usar el botón "saltar a siguiente pregunta por falta de puntos"
  //Y opción de reutilizar esta función al adivinar la frase
  siguienteFrase():void{
    this.seleccionada = this.getAleatoria()
    this.pista = this.seleccionada.pista_inicial
  }

  ocultar(consonante:string){
    if(this.usuario.puntuacion>0){
      document.getElementById(consonante)?.setAttribute("style", "display:none;")
    }

  }

}







