import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Contrasenyas } from '../models/Contrasenyas.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnoObj: Alumno = null;

  constructor(private http: HttpClient, private router: Router) { }

  // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
  // esta función es llamada por profesro.ts y le pasa el parámetro(nuevoRegistro) y se va al PHP
  comprobarAlumnoService(nuevoRegistro: Alumno): Observable<any> {
    // Swal.fire('prueba Service',nuevoRegistro.nickAlumno );
    return this.http.post(`${environment.serverUrl}comprobacionRegistroAl.php`,JSON.stringify(nuevoRegistro));
  }

//************ Recojer toda la info del Usuario Logueado para poderla llamar siempre que la necesites ***************************** */
//**************************** quitar esta función  de aquí y del service Alumno **************************************** */
//****** realitzar el subscribe del login aquí perquè sempre que necessiti info del objecte la tinguem aquí al service per poder fer un get del usuari des del component al service. ******************************************** */

  // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion con el nickProfesor
  public pedirDatosAlumno(sesion: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}datosPerfilAl.php`,JSON.stringify(sesion));
  }



  // Función para loguear el alumno.
  loginAlumnoService(alumno: Alumno): void{

    // cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)
     this.http.post(`${environment.serverUrl}loginAlumno.php`, JSON.stringify(alumno)).subscribe(
      (respuesta: Alumno[]) => {
        console.log(respuesta);

        if (respuesta.length === 0) {
          console.log("Usuario no existe");
          // mostrar una alerta con sweet alert
          Swal.fire('Datos incorrectos',
          'Verifica el nick o la contraseña y vuelve a intentarlo',
          'error')
        }else {
        console.log("Usuario existe");
        Swal.fire('Usuario correcto')
        environment.vsesion = alumno.nickAlumno;
        this.alumnoObj = respuesta[0];
        // aqui tengo que llamar el siguiente componente
        this.router.navigate(['/perfilAlumno']);
        }
      },
      (error: any) => {
        console.log(error);
      }
     )
}

  // Función para editar y modificar los datos del perfil
  public editarDatosPerfilAl(datosPerfil: Alumno): Observable<any>  {
    return this.http.post(`${environment.serverUrl}editarPerfilAl.php`,JSON.stringify(datosPerfil));
  }



// Función para editar contraseña
  comprobarContrasenyaService(modificarContraAl : Contrasenyas):Observable<any>{
    return this.http.post(`${environment.serverUrl}editarContrasenyaAl.php`, JSON.stringify(modificarContraAl));
  }

}

