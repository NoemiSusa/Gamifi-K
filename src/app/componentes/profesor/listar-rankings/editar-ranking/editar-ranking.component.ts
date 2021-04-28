import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';

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
  respuesta:string[];

  nombreRanking: string;

  sesion: string = environment.vsesion;
  idRanking: number = environment.rkg;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private listarTareas: ProfesorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //En esta función recojemos todas las tareas que tiene asignadas este ranking
    this.listarTareas.pedirListaTareas(this.idRanking).subscribe(
      (resp: any) => {
        this.respuesta = resp;

        console.log(this.respuesta);
        // console.log(this.respuestaR[0]['nombreRanking']);


      },
      (error: any) => {
        console.log(error);
      }
    )

    // Usamos el servicio par pedir todos los campos del ranking y poder listarlo en este caso lo mostramos ordenado por puntuación
    this.listarRankings.pedirRankingaEditar(this.sesion, this.idRanking).subscribe(
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

}
