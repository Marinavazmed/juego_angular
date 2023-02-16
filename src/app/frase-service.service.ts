import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  public url:string;

	constructor(
		private _http: HttpClient
	){
    this.url = "http://localhost:8000/frase/";
	}

	getFrases(): Observable<any[]>{
		return this._http.get<any[]>(this.url);
	}
}
