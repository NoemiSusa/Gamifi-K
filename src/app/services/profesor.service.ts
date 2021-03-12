import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';
import Swal from 'sweetalert2';
import { Contrasenyas } from '../models/Contrasenyas.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  profesorObj: Profesor = null;

  constructor(private http: HttpClient, private router: Router) {
  }

  // Función para comprobar si el usuario que se quiere registrar existe previamente en la DB
  // esta función es llamada por profesro.ts y le pasa el parámetro(nuevoRegistro) y se va al PHP
  comprobarUsuarioService(nuevoRegistro: Profesor): Observable<any> {
      // Swal.fire('prueba Service',nuevoRegistro.nickProfesor );
    return this.http.post(`${environment.serverUrl}comprovacioRegistre.php`,JSON.stringify(nuevoRegistro));
  }

//************ Recojer toda la info del Usuario Logueado para poderla llamar siempre que la necesites ***************************** */
//**************************** quitar esta función  de aquí y del service Alumno **************************************** */
//****** realitzar el subscribe del login aquí perquè sempre que necessiti info del objecte la tinguem aquí al service per poder fer un get del usuari des del component al service. ******************************************** */

// Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion con el nickProfesor
  public pedirDatosProfesor(sesion: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}datosPerfil.php`,JSON.stringify(sesion));
  }

//
  loginProfesorService(profesor: Profesor): void {
    // console.log(profesor.nickProfesor + " " + profesor.contrasenyaProfesor + " Datos del formulario");

    this.http.post(`${environment.serverUrl}loginProfesor.php`, JSON.stringify(profesor)).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        if (respuesta[0] == null) {
          console.log("Usuario no existe");
          // mostrar una alerta con sweet alert
          Swal.fire(
            'Datos incorrectos',
            'Verifica el nick o la contraseña y vuelve a intentarlo',
            'error'
          )
        } else {
          console.log("Usuario existe");
          // aqui tengo que llamar el siguiente componente
          Swal.fire('Usuario correcto')
          environment.vsesion = profesor.nickProfesor;
          // Swal.fire(environment.vsesion+ " Variable de sesion ")
          this.router.navigate(['/perfilProfesor']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    )

  }


    // Función para editar y modificar los datos del perfil
    public editarDatosPerfil(datosPerfil: Profesor): Observable<any>  {
      return this.http.post(`${environment.serverUrl}editarPerfil.php`,JSON.stringify(datosPerfil));
    }


    // setprofesor(profesor) {
    //   this.profesorObj = profesor;
    // }

    // getprofesor() {
    //   return this.profesorObj;
    // }

  comprobarContrasenyaService(modificarContra : Contrasenyas):Observable<any>{



    return this.http.post(`${environment.serverUrl}editarContraseñaProfesor.php`, JSON.stringify(modificarContra));


  }



}






