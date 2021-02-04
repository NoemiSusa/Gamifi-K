import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor() { }

  profesoresArray: Profesor[] = [];



  public getAllProfesores(): Profesor[] {

    return this.profesoresArray;

  }



}
