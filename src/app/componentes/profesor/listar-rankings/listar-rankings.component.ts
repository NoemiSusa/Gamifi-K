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
respuestaR: Respuesta;
resp;
response: string = null;

sesion: string = environment.vsesion;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private router: Router
  ) { }

  ngOnInit(): void {



// Usamos el servicio par pedir todos los campos del ranking y poder listarlo
    this.listarRankings.pedirListadoRankings(this.sesion).subscribe(
      (resp: Respuesta) => {
        this.respuestaR = resp;

        console.log(this.respuestaR);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
