import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
  // esta función es llamada por profesro.ts y le pasa el parámetro(nuevoRegistro) y se va al PHP
  comprobarAlumnoService(nuevoRegistro: Alumno): Observable<any> {
    // Swal.fire('prueba Service',nuevoRegistro.nickAlumno );
  return this.http.post(`${environment.serverUrl}comprobacionRegistroAl.php`,JSON.stringify(nuevoRegistro));
  }

  //función para loguear el alumno.
  loginAlumnoService(alumno: Alumno): Observable<any> {
    console.log(alumno.nickAlumno + " " + alumno.contrasenyaAlumno + " Datos del formulario");
    // cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)
    return this.http.post(`${environment.serverUrl}loginAlumno.php`, JSON.stringify(alumno));
    //return this.http.post(`${environment.url}db_nube.php`,JSON.stringify(alumno));

  }

}

