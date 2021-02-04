import { Injectable } from '@angular/core';


import { Alumno } from 'src/app/models/alumno.model';



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnosArray: Alumno[] = [];

  constructor() { }


  public getAllAlumnos(): Alumno[] {

    return this.alumnosArray;

  }
}
