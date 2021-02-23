import { HttpClient } from '@angular/common/http';
import { Injectable, ɵConsole } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  URL = `${environment.serverUrl}`;
  constructor( private http: HttpClient) {
  }

    // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
        // esta función es llamada por profesro.ts y le pasa el parámetro(nickProfesor) y se va al PHP
    public comprobarUsuarioService(nickProfesor: string){
        return this.http.get(`${this.URL}comprovacioRegistre.php?nickProfesor=${nickProfesor}`);
      }

    // Función para insertar los datos del nuevo registro en la DB
      public insertarProfesorService(nuevoRegistro: Profesor) {
        console.log(nuevoRegistro);

        return this.http.get(`${this.URL}insertar.php?nuevoRegistro=${nuevoRegistro}`);
      }


}
