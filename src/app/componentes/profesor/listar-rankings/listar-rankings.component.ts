import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './../../../services/profesor.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';

@Component({
  selector: 'app-listar-rankings',
  templateUrl: './listar-rankings.component.html',
  styleUrls: ['./listar-rankings.component.css']
})
export class ListarRankingsComponent implements OnInit {

// Variables
//rankingsArray: Ranking[] = null;
respuestaR: string [];
resp;

nombreRanking: string = null;
rankingSelected: string = null;


sesion: string = environment.vsesion;
idRanking: number = environment.idRanking;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private router: Router
  ) { }

  ngOnInit(): void {

// Usamos el servicio par pedir todos los campos del ranking y poder listarlo
    this.listarRankings.pedirListadoRankings(this.sesion).subscribe(
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

// Función que se ejecuta con click en el ranking que queremos seleccionar para editar
    selectRanking(nombreRanking: string):void  {
      this.rankingSelected = nombreRanking;
      environment.idRanking = nombreRanking['nombreRanking'];
      console.log(environment.idRanking);
    }
}
