import { Injectable } from '@angular/core';

// import modelo alumno
import { Alumno } from 'src/app/models/alumno.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }
  loginAlumnoService(alumno: Alumno): Observable<any> {
    console.log(alumno.nickAlumno + " " + alumno.contrasenyaAlumno + " Datos del formulario");

    // cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)

    // const user = alumno.nickAlumno;ยบ
    // const pass = alumno.contrasenyaAlumno;

    return this.http.post(`${environment.url}loginAlumno.php`, JSON.stringify(alumno));

    //return this.http.post(`${environment.url}db_nube.php`,JSON.stringify(alumno));

  }
