import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ranking',
  templateUrl: './editar-ranking.component.html',
  styleUrls: ['./editar-ranking.component.css']
})
export class EditarRankingComponent implements OnInit {
  // Variables
  respuestaR: string[];
  resp;
  listaTareas: string[];   //  =["tarea 1","tarea 2","tarea 3", "todas"];
  nombreTarea: string;
  nombreRanking: string;
  sesion: string = environment.vsesion;
  idRanking: number = environment.rkg;
  nickAlumno: string;
  nuevaPuntuacion: number;


  constructor(
    // Creamos el objeto de la clase que llamarà al ServiceProfesor
    private listarRankings: ProfesorService,
    private listarTareas: ProfesorService,
    private actualizaPuntuacion: ProfesorService,
    private router: Router
  ) { }

  //Funcion que se ejecuta al iniciar la página
  ngOnInit(): void {
    //En esta función recojemos todas las tareas que tiene asignadas este ranking
    this.listarTareas.pedirListaTareas(this.idRanking).subscribe(
      (resp: any) => {
        this.listaTareas = resp;
        console.log(this.listaTareas);
        // console.log(this.respuestaR[0]['nombreRanking']);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  //esta función selecciona la tarea que se desea modificar luego la puntuación
  seleccionarTarea(tarea: string): void {
    this.nombreTarea = tarea;
    console.log(this.nombreTarea);

    // Usamos el servicio par pedir todos los campos del ranking y poder listarlo en este caso lo mostramos ordenado por puntuación
    this.listarRankings.pedirRankingaEditar(this.sesion, this.idRanking, this.nombreTarea).subscribe(
      (resp: any) => {
        this.respuestaR = resp;
        console.log(this.respuestaR);
        // console.log(this.respuestaR[0]['nombreRanking']);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  //función que sirve para que cuando un usuario modifique una puntuación y le hace click al guardar ejecuta esta función
  actualizarPuntuacion(nombreRanking: any, nuevaPuntuacion: number): void {
    console.log(nombreRanking);

    this.nickAlumno = nombreRanking['Nick'];
    this.nombreRanking = nombreRanking;
    this.nuevaPuntuacion = nuevaPuntuacion;

    //llamamos a la función actualizarPuntuacion del serviceProfesor para modificar la puntuación en la base de datos
    this.actualizaPuntuacion.actualizarPuntuacion(this.idRanking, this.nombreTarea, this.nickAlumno, this.nuevaPuntuacion).subscribe(
      (respuesta: Respuesta) => {
        console.log(respuesta);

        if (!respuesta.resultado) {
          Swal.fire(
            'Datos incorrectos',
            respuesta.msg,
            'error'
          )

        } else {
          console.log("Usuario existe");
          Swal.fire(
            'Perfecto ',
            respuesta.msg,
            'success');
        }
      }
    );
  }



}

