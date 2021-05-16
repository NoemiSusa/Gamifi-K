
import { Respuesta } from 'src/app/models/respuesta.model';
import { Ranking } from 'src/app/models/ranking.model';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-rankings-alumno',
  templateUrl: './listar-rankings-alumno.component.html',
  styleUrls: ['./listar-rankings-alumno.component.css']
})
export class ListarRankingsAlumnoComponent implements OnInit {

  // Variables
  respuestaR: Ranking[];
  respuestaRR: Ranking;
  resp;
  respuesta:Respuesta;
  nombreRanking: Ranking;
  rankingSelected: Ranking;
  idR: number = null;

  sesion: string = environment.vsesion;
  idRanking: number = environment.idRanking;
  rankingmap: any;

  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankingsAlumno: AlumnoService,
    private nuevaMatriculaAlumno: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Usamos el servicio para pedir todos los campos del ranking y poder listarlo
    this.listarRankingsAlumno.pedirListadoRankingsAlumno(this.sesion).subscribe(
      (resp: any) => {
        this.respuestaR = resp;

        console.log(this.respuestaR);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  // Función que se ejecuta con click en el ranking que queremos seleccionar para visualizar
  selectRanking(nombreRanking: Ranking): void {
    console.log(nombreRanking);
    // especifico el campo del objeto que quiero guardar como variable global
    environment.idRanking = nombreRanking['idRanking'];
    this.idRanking = environment.idRanking;
    console.log(this.idRanking);
  }

// Función que se ejecuta con click en el botón del HTML para nueva matrícula en ránking existente
  nuevaMatricula(): void {

    Swal
    .fire({
      title: "Inserta el código del Ranking ",
      input: "number",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    })
    .then(resultado => {
      if (resultado.value) {
        let codigoRanking = resultado.value;
        console.log("Hola, " + codigoRanking);

        // Función que permite a través del serviceAlumno insertar al alumno en el nuevo Ránking
        this.nuevaMatriculaAlumno.insertarNuevaMatriculaAl(codigoRanking, this.sesion).subscribe(
          (resp: any) => {
            this.respuestaRR = resp;

           // idRanking.idRanking = idRkg;
            console.log(this.respuestaRR);

            Swal.fire(
              'Matrícula a nuevo Ránking realizada correctamente!',
              '',
              'success'
            )
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    });
  }


}
