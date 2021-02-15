import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

URL = 'http://localhost/../../../archivoPhp/comprovacioRegistre.php';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor( private http: HttpClient) {

  }
}
