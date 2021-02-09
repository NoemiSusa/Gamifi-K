import { Injectable } from '@angular/core';


import { Alumno } from 'src/app/models/alumno.model';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  //private _loginAlumnoUrl = "http://localhost:8080/api/login  o la ruta que vamos a tener";
  // private _loginAlumnoUrl = "http://localhost:8080/index.php";

  // alumnosArray: Alumno[] = [];

  constructor(private http: HttpClient) { }


  loginAlumno(nickAlumno: String, contrasenyaAlumno: String){

    return this.http.get("${URL}db.php");

  }




// loginAlumno(Alumno){

//   return this.http.post<any>(this._loginAlumnoUrl,Alumno);


// }




  // public getAllAlumnos(): Alumno[] {

  //   return this.alumnosArray;

  // }




}
