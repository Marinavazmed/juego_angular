import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './principal/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url:string;

	constructor(
		private _http: HttpClient, 
	){
    this.url = 'http://localhost:8000/usuario/';
	}

	getUsuarios(): Observable<any[]>{
		return this._http.get<any[]>(this.url);
	}

    //aquí petición post
	public addUsuario(usuario:Usuario) :Observable<any>{
		const url = this.url
		return this._http.post<any>(url, usuario)
	}
}
