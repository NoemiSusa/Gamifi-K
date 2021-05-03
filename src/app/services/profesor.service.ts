import { Ranking } from 'src/app/models/ranking.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../models/profesor.model';
import Swal from 'sweetalert2';
import { Contrasenyas } from '../models/Contrasenyas.model';
import { Router } from '@angular/router';
import { Respuesta } from '../models/respuesta.model';

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
    return this.http.post(`${environment.serverUrl}comprovacioRegistre.php`, JSON.stringify(nuevoRegistro));
  }

  // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion con el nickProfesor
  public pedirDatosProfesor(sesion: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}datosPerfil.php`, JSON.stringify(sesion));
  }

  loginProfesorService(profesor: Profesor): void {
    // console.log(profesor.nickProfesor + " " + profesor.contrasenyaProfesor + " Datos del formulario");
    console.log(profesor);
    // envio unos valores que seran de tipo respuesta
    this.http.post<Respuesta>(`${environment.serverUrl}loginProfesor.php`, JSON.stringify(profesor)).subscribe(
      (respuesta: Respuesta) => {
        console.log(respuesta);

        if (!respuesta.resultado) {
          console.log("Usuario no existe");

          Swal.fire(
            'Datos incorrectos',
            respuesta.msg,
            'error'
          )

        } else {
          console.log("Usuario existe");
          Swal.fire(
            'Bienvenido/a ' + respuesta.datos[0].nickProfesor,
            '',
            'success'
          );
          environment.vsesion = profesor.nickProfesor;
          // profesorObj declarado arriba aquí recoge el objeto respuesta del PHP
          this.profesorObj = respuesta.datos[0];
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
  public editarDatosPerfil(datosPerfil: Profesor): Observable<any> {
    return this.http.post(`${environment.serverUrl}editarPerfil.php`, JSON.stringify(datosPerfil));
  }


  comprobarContrasenyaService(modificarContra: Contrasenyas): Observable<any> {
    return this.http.post(`${environment.serverUrl}editarContrasenyaProfesor.php`, JSON.stringify(modificarContra));
  }

  altaRankingService(rankingTs: Ranking): Observable<any> {
    return this.http.post(`${environment.serverUrl}comprobacionRanking.php`, JSON.stringify(rankingTs));

  }

  // Función para pedir listado de rankings por profesor
  public pedirListadoRankings(sesion: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}listarRankings.php`, JSON.stringify(sesion));
  }



  //Función que se usa para obtener la lista de tareas que tiene un ranking
  pedirListaTareas(idRanking:any): Observable<any>{
    console.log(idRanking);
    return this.http.post(`${environment.serverUrl}seleccionarTareas.php`, JSON.stringify(idRanking));
  }

  //Función para pedir todos los datos del ranking a la base de datos.
    //creamos la constante body para generar un objeto ya que el service debe mandar un objeto al php y generamos el objeto con los valores que nosotros necessitamos.
  pedirRankingaEditar(sesion:string, idRanking:number, nombreTarea:string): Observable<any> {
    //sirve para crear un objeto con las dos o más variables que le queremos pasar al php porque el php solo puede recibir objetos.
    const body ={
      sesion,
      idRanking,
      nombreTarea
    }
    // console.log(JSON.stringify(body));
    return this.http.post(`${environment.serverUrl}listarPuntuacionUnaTarea.php`, body);
  }

  actualizarPuntuacion(idRanking:number,nombreTarea:string, nickAlumno:string, nuevaPuntuacion:number): Observable<any>{
    const body ={
      idRanking,
      nombreTarea,
      nickAlumno,
      nuevaPuntuacion
    }
    return this.http.put(`${environment.serverUrl}modificarPuntuacionUnaTarea.php`, body);
  }
}
