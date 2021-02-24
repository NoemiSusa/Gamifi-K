import { HttpClient } from '@angular/common/http';
import { Injectable, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) {
  }

  // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
  // esta función es llamada por profesro.ts y le pasa el parámetro(nuevoRegistro) y se va al PHP
  public comprobarUsuarioService(nuevoRegistro: Profesor): Observable<any> {
    return this.http.post(`${environment.serverUrl}comprovacioRegistre.php`,JSON.stringify(nuevoRegistro));
  }



}
