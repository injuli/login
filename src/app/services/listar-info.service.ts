import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarInfoService {

  constructor( private http: HttpClient ) {
    this.cargarUsurios();
   }

   private cargarUsurios() {

   }
}
