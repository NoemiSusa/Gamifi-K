import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  URL = `${environment.serverUrl}comprovacioRegistre.php`;

  constructor( private http: HttpClient) {

  }
}
