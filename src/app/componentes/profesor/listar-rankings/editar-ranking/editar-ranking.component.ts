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
respuestaR: string [];
resp;

nombreRanking: string;


idRanking: string = environment.vsesion;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private router: Router
  ) { }

  ngOnInit(): void {



// Usamos el servicio par pedir todos los campos del ranking y poder listarlo
    this.listarRankings.pedirInfoRanking(this.idRanking).subscribe(
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
