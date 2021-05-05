import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './../../../services/profesor.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking.model';
import { Respuesta } from 'src/app/models/respuesta.model';
import Swal from 'sweetalert2';

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
  respuesta: Respuesta;
  nombreRanking: Ranking;
  rankingSelected: Ranking;
  idR: number = null;

  sesion: string = environment.vsesion;
  idRanking: number;

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
  selectRanking(nombreRanking: Ranking): void {
    // this.rankingSelected = nombreRanking;
    console.log(nombreRanking);
    // especifico el campo del objeto que quiero guardar como variable global
    environment.idRanking = nombreRanking['idRanking'];
    //environment.idRanking = this.idRanking;
    console.log(environment.idRanking);

  }

  eliminarRanking(nombreRanking : Ranking): void {
    environment.idRanking = nombreRanking['idRanking'];

    console.log(environment.idRanking+"  El id del ranking line 64: ");
    Swal.fire({
      title: 'Estas seguro que quieres borrar el ranking?',
      text: "No pueder revertir la decision",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        this.listarRankings.eliminarRanking(environment.idRanking).subscribe(
          (resp: any) => {
            this.respuestaR = resp;
            console.log(this.respuestaR);
            Swal.fire(
              'Borrado!',
              this.respuesta.msg,
              'success'
            )

            // console.log(this.respuestaR[0]['nombreRanking']);
          },
          (error: any) => {
            console.log(error);
          }
        )
      }

      // Swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )
    }
    )
    // console.log(nombreRanking);
    // environment.idRanking  = nombreRanking['idRanking'];


  }


}

