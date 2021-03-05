import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) {
  }

  // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
  // esta función es llamada por profesro.ts y le pasa el parámetro(nuevoRegistro) y se va al PHP
  comprobarUsuarioService(nuevoRegistro: Profesor): Observable<any> {
      // Swal.fire('prueba Service',nuevoRegistro.nickProfesor );
    return this.http.post(`${environment.serverUrl}comprovacioRegistre.php`,JSON.stringify(nuevoRegistro));
  }


    // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion con el nickProfesor
    public pedirDatosProfesor(sesion: any): Observable<any> {
      return this.http.post(`${environment.serverUrl}datosPerfil.php`,JSON.stringify(sesion));
    }


  loginProfesorService(profesor: Profesor): Observable<any> {
    console.log(profesor.nickProfesor + " " + profesor.contrasenyaProfesor + " Datos del formulario");
    return this.http.post(`${environment.serverUrl}loginProfesor.php`, JSON.stringify(profesor));
    //return this.http.post(`${environment.url}db_nube.php`,JSON.stringify(profesor));  // db nube

  }
}





