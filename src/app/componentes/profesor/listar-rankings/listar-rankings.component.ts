import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './../../../services/profesor.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import Swal from 'sweetalert2';
import { env } from 'process';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-listar-rankings',
  templateUrl: './listar-rankings.component.html',
  styleUrls: ['./listar-rankings.component.css']
})
export class ListarRankingsComponent implements OnInit {

  // Variables
  //rankingsArray: Ranking[] = null;
  respuestaR: Ranking[];
  respuestaRR: Ranking;
  resp;

  nombreRanking: Ranking;
  rankingSelected: Ranking;
  idR: number = null;

  sesion: string = environment.vsesion;
  idRanking: number = environment.idRanking;
  rankingmap: any;


  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private cambiarNombre: ProfesorService,
    private router: Router
  ) { }

  ngOnInit(): void {


    // Usamos el servicio para pedir todos los campos del ranking y poder listarlo
    this.listarRankings.pedirListadoRankings(this.sesion).subscribe(
      (resp: any) => {
        this.respuestaR = resp;

        console.log(this.respuestaR);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  // Función que se ejecuta con click en el ranking que queremos seleccionar para editar
  selectRanking(nombreRanking: Ranking): void {
    console.log(nombreRanking);
    // especifico el campo del objeto que quiero guardar como variable global
    environment.idRanking = nombreRanking['idRanking'];
    this.idRanking = environment.idRanking;
    console.log(this.idRanking);
  }

  // Funcion que se ejecuta con click en el ranking que queremos seleccionar para modificar el nombre
  selectRankingNombre(nombreRanking: Ranking): void {
    Swal
      .fire({
        title: "Modifica el nombre del Ranking " + nombreRanking['nombreRanking'],
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
      })
      .then(resultado => {
        if (resultado.value) {
          let nombre = resultado.value;
          console.log("Hola, " + nombre);

          // Funció que permet canviar el nom del ranking seleccionat, envia al service l'id del ranking seleccionat i el nom que s'ha canviat al sweetAlert
          this.cambiarNombre.selectRankingNombre(nombreRanking['idRanking'], nombre).subscribe(
            (resp: any) => {
              this.respuestaRR = resp;

              nombreRanking.nombreRanking = nombre;
              console.log(nombreRanking.nombreRanking);

              this.respuestaR.map((value: Ranking) => {

                if (value['idRanking'] === environment.idRanking) {
                  value['nombreRanking'] = nombre;
                }
              }
              );
              //this.nombreRanking['idRanking']
            },
            (error: any) => {
              console.log(error);
            }
          )
        }
      });
  }
}

