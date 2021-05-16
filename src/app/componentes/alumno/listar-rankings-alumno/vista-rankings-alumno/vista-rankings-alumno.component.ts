import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import { Tarea } from 'src/app/models/tarea.model';
import { environment } from 'src/environments/environment';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-vista-rankings-alumno',
  templateUrl: './vista-rankings-alumno.component.html',
  styleUrls: ['./vista-rankings-alumno.component.css']
})
export class VistaRankingsAlumnoComponent implements OnInit {
// Variables
  respuestaR: string [];
resp;

nombreRanking: string = null;
rankingSelected: string = null;


sesion: string = environment.vsesion;
idRanking: number = environment.idRanking;

  constructor(
// Creamos el objeto ranking del ServiceAlumno
private listarRankingAlumno: AlumnoService,
private router: Router
  ) { }

  ngOnInit(): void {

    // Usamos el servicio par pedir todos los campos del ranking y poder listarlo
    this.listarRankingAlumno.pedirListadoRankingAlumno(this.idRanking).subscribe(
      (resp: any) => {
        this.respuestaR = resp;
        console.log(this.respuestaR);
      //  console.log(this.respuestaR[0]['nickAlumno']);

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Función que utilizamos en el HTML para destacar el nick del alumno logeado
  nickAlLog():boolean {
    console.log(this.sesion);
    console.log(this.respuestaR['nickAlumno']);
    if(this.respuestaR['nickAlumno'] === this.sesion ) {
      console.log(this.respuestaR[1]['nickAlumno']);

          return true;
//     // }else {
//     //   return false;
      }
 }

}
