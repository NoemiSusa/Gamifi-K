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
  //rankingsArray: Ranking[] = null;
  respuestaR: string[];
  resp;
  listaTareas:string[];
  //  =["tarea 1","tarea 2","tarea 3", "todas"];
  nombreTarea: string;
  nombreRanking: string = environment.nombrerkg;
  sesion: string = environment.vsesion;
  idRanking: number = environment.rkg;
  nickAlumno: string;
  nuevaPuntuacion:number;


  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private listarTareas: ProfesorService,
    private actualizaPuntuacion:ProfesorService,
    private router: Router
  ) { }

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

  seleccionarTarea(tarea: string):void{
    this.nombreTarea = tarea;
    console.log(this.nombreTarea);

     // Usamos el servicio par pedir todos los campos del ranking y poder listarlo en este caso lo mostramos ordenado por puntuación
      this.listarRankings.pedirRankingaEditar(this.sesion, this.idRanking,this.nombreTarea).subscribe(
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
  actualizarPuntuacion(nombreRanking:any,nuevaPuntuacion:number):void{
    this.nombreRanking = nombreRanking;
    this.nuevaPuntuacion =nuevaPuntuacion;
      this.actualizaPuntuacion.actualizarPuntuacion(this.idRanking,this.nombreTarea, this.nickAlumno, this.nuevaPuntuacion).subscribe(
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
  // onFormSubmit(): void {

  // }


}
