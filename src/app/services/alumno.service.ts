import { Injectable } from '@angular/core';

// import modelo alumno
import { Alumno } from 'src/app/models/alumno.model';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  //private _loginAlumnoUrl = "http://localhost:8080/api/login  o la ruta que vamos a tener";
  // private _loginAlumnoUrl = "http://localhost:8080/index.php";

  // alumnosArray: Alumno[] = [];


  constructor(private http: HttpClient) { }


  loginAlumno(alumno: Alumno): Observable<any> {

    // cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)
    return this.http.get<any>(`${URL}db.php`);
  }


// loginAlumno(Alumno){
//   return this.http.post<any>(this._loginAlumnoUrl,Alumno);
// }


  // public getAllAlumnos(): Alumno[] {
  //   return this.alumnosArray;
  // }




}
