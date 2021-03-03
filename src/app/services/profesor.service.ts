import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


    // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion con el nickProfesor
    public pedirDatosProfesor(datosPerfilProfesor: any): Observable<any> {
      return this.http.post('S{environment.serverUrl}datosPerfil.php',JSON.stringify(datosPerfilProfesor));
    }


}
