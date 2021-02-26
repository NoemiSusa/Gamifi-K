import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }
  loginProfesorService(profesor: Profesor): Observable<any> {

    console.log(profesor.nickProfesor + " " + profesor.contrasenyaProfesor + " Datos del formulario");



    return this.http.post(`${environment.url}loginProfesor.php`, JSON.stringify(profesor));

    //return this.http.post(`${environment.url}db_nube.php`,JSON.stringify(profesor));  // db nube

  }
}





