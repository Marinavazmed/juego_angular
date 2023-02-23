import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FraseService } from '../frase-service.service';
import { UsuarioService } from '../usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { Frase } from './frase';
import { Usuario } from './usuario';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
export class PrincipalComponent implements OnInit, AfterViewInit {
  public frases: Array<Frase>
  public seleccionada: Frase
  public pista: String
  public usuario: Usuario
  public nivel: Number
  public vocales: Array<any>
  public consonantes: Array<any>
  public padre: any
  public completaFraseForm!: FormGroup;

  constructor(private http: HttpClient, private _peticion: FraseService, private panel: ElementRef, public fb:FormBuilder) {
    this.frases = []
    this.seleccionada = new Frase("", "")
    this.pista = ""
    //Iniciamos usuario con 1 punto para hacer las pruebas. NO DEFINITIVO
    this.usuario = new Usuario("", 100, 0)
    this.nivel = 1
    this.vocales = ['a', 'e', 'i', 'o', 'u']
    this.consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  }
  ngAfterViewInit() {
    this._peticion.getFrases().subscribe(data => {
      this.frases = data
      this.seleccionada = this.getAleatoria()
      this.pista = this.seleccionada.pista_inicial
      this.muestraPanel()
    })
  }

  ngOnInit(){
    this.completaFraseForm = this.fb.group({
      completa: new FormControl('')
    })
  }


  //Devuelve un OBJETO frase aleatorio de las recibidas por el servidor
  getAleatoria(): Frase {
    const fraseSeleccionada = this.frases[Math.floor(Math.random() * this.frases.length)];
    return fraseSeleccionada
  }

  //Compra una letra, gasta puntos del usuario. 
  //Esta función está en onclick
  comprarLetraVocal(): void {
    if (this.usuario.puntuacion >= 25) {
      this.usuario.puntuacion = this.usuario.puntuacion - 25
    } else {
      this.usuario.puntuacion = 0
    }
  }
  comprarLetraConsonante(): void {
    
    if (this.usuario.puntuacion >= 1) {
      this.usuario.puntuacion = this.usuario.puntuacion - 1
    } else {
      this.usuario.puntuacion = 0
    }

  }

  //Función para generar la siguiente frase. Funciona al 
  //usar el botón "saltar a siguiente pregunta por falta de puntos"
  //Y opción de reutilizar esta función al adivinar la frase
  siguienteFrase(): void {
    this.seleccionada = this.getAleatoria()
    this.pista = this.seleccionada.pista_inicial
    this.muestraPanel()
  }

  ocultar(consonante: string) {
    if (this.usuario.puntuacion > 0) {
      document.getElementById(consonante)?.setAttribute("style", "")
    }

  }

  compruebaFrase():void{
    var formulario = this.completaFraseForm.value
    var frase = formulario.completa
    if(frase.toUpperCase()==this.seleccionada.frase.toUpperCase()){
      console.log("Adivinada!")
      this.usuario.puntuacion += 100
      this.completaFraseForm.reset()
      this.siguienteFrase()
    }
  }

  aparecer(e:any){
    var letraID = e.currentTarget.id
    console.log(letraID)
    var arrayFrase = this.seleccionada.frase.split("")
    for(let i = 0 ; i < arrayFrase.length; i++){
      if(letraID.toUpperCase() == arrayFrase[i].toUpperCase()){
        var letrasPanel = document.querySelectorAll('.ocultar')
        for (let j = 0 ; j < letrasPanel.length; j++){
          console.log("puntuacion del usuario: " + this.usuario.puntuacion)
          if ((letraID.toUpperCase() == letrasPanel[j].textContent) && this.usuario.puntuacion>0){
            letrasPanel[j].classList.remove('ocultar')
            if(!this.vocales.includes(letraID)){
              this.usuario.puntuacion = this.usuario.puntuacion +5
            }

          }
        }
      }

    }
    this.compruebaCompleta()
  }
  
  compruebaCompleta(){
    var ocultas = document.querySelectorAll('.ocultar')
    var arr = Array.from(ocultas).filter((letra:any) => letra.textContent!=" ")
    if(arr.length==0){
      this.siguienteFrase()
    }

  }

  muestraPanel(): void {
    let frase = this.seleccionada.frase
    // aquí se comprueba si el panel existe y se elimina
    var panel_wrapper = document.getElementById('wrapper_panel');
    const panelExistente = this.panel.nativeElement.querySelector('#panel');
    if (panelExistente) {
      panelExistente.remove();
    }
    // y se crea un nuevo panel
    const padre = document.createElement('div');
    padre.id = 'panel'; // se asigna un ID al panel para que se pueda seleccionar en el futuro
    padre.classList.add('panel')
    panel_wrapper?.appendChild(padre)
    let ul = document.createElement('ul');

    padre.appendChild(ul)
    console.log(this.seleccionada)
    frase = frase.toUpperCase();
    let contador = 1;

    for (let i = 0; i < frase.length; i++) {
      let span = document.createElement('span');
      span.classList.add('ocultar')
      let li = document.createElement('li');

      let letra = frase[i];
      let letraPanel = document.createTextNode(letra);
      span.appendChild(letraPanel);
      ul.appendChild(li)
      li.appendChild(span)

      if (letra == ' ') {
        if (contador == 2) {
          contador = 0;
          li.classList.add('blue')
        }
        contador++;
      } else {
        li.classList.add('white')

      }
    }
  }
}







