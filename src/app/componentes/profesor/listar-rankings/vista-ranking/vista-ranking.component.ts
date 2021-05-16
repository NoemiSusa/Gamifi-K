import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../../services/profesor.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-vista-ranking',
  templateUrl: './vista-ranking.component.html',
  styleUrls: ['./vista-ranking.component.css']
})
export class VistaRankingComponent implements OnInit {
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
     private listarRanking: ProfesorService,
     private router: Router
  ) { }

  ngOnInit(): void {


// Usamos el servicio par pedir todos los campos del ranking y poder listarlo
    this.listarRanking.pedirListadoRanking(this.idRanking).subscribe(
      (resp: any) => {
        this.respuestaR = resp;

        console.log(this.respuestaR);

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
