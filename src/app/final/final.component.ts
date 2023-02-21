import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { UsuarioService } from '../usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../principal/usuario';


@Component({
  selector: 'final',
  templateUrl: './final.component.html',
  styles: [
  ], 
  providers: [UsuarioService]
})
export class FinalComponent {
  public usuarios: Array<Usuario>

  constructor(private http: HttpClient, private _peticion: UsuarioService, private panel: ElementRef) {
    this.usuarios = []
  }

  ngOnInit(): void {
    this._peticion.getUsuarios().subscribe(data => {
      this.usuarios = data
    })
  }
}
