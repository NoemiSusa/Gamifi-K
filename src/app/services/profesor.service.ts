import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  URL = `${environment.serverUrl}`;
  constructor( private http: HttpClient) {

  }

  comprobarUsuarioService(nickProfesor: string){
    return this.http.get(`${this.URL}comprovacioRegistre.php?nickProfesor=${nickProfesor}`);
  }
}
