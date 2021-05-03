import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './../../../services/profesor.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import Swal from 'sweetalert2';
import { env } from 'process';

@Component({
  selector: 'app-listar-rankings',
  templateUrl: './listar-rankings.component.html',
  styleUrls: ['./listar-rankings.component.css']
})
export class ListarRankingsComponent implements OnInit {

// Variables
//rankingsArray: Ranking[] = null;
respuestaR: Ranking;
resp;

nombreRanking: Ranking;
rankingSelected: Ranking;
idR: number = null;

sesion: string = environment.vsesion;
idRanking: number = environment.idRanking;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private cambiarNombre: ProfesorService,
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
    selectRanking(nombreRanking: Ranking):void  {
      console.log(nombreRanking);
      // especifico el campo del objeto que quiero guardar como variable global
      environment.idRanking  = nombreRanking['idRanking'];
      this.idRanking = environment.idRanking;
      console.log(this.idRanking);
    }

// Funcion que se ejecuta con click en el ranking que queremos seleccionar para modificar el nombre
    selectRankingNombre(nombreRanking: Ranking):void  {
      console.log(nombreRanking['nombreRanking']);
      console.log(nombreRanking['idRanking']);

      environment.idRanking  = nombreRanking['idRanking'];
      this.idRanking = environment.idRanking;
      console.log(this.idRanking);

      Swal
    .fire({
        title: "Modifica el nombre del Ranking " + this.idRanking,
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            console.log("Hola, " + nombre);

            this.cambiarNombre.selectRankingNombre(this.idRanking, nombre).subscribe(
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
    });
}
}
