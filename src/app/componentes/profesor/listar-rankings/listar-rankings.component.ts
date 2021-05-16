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
  respuesta:Respuesta;
  nombreRanking: Ranking;
  rankingSelected: Ranking;
  idR: number = null;

  sesion: string = environment.vsesion;
  idRanking: number = environment.idRanking;

  // variable para la función map
  rankingmap: any;

  // variable para generar un nuevo código de acceso a un ránking
  nuevoCodigoRanking: Ranking;


  constructor(
    // Creamos el objeto ranking del ServiceProfesor
    private listarRankings: ProfesorService,
    private cambiarNombre: ProfesorService,

    // Objeto para generar nuevo código de un ránking
    private cambiarCodigoRKGService: ProfesorService,

    // Objeto Router
    private router: Router



  ) {this.router = router; }

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

  // Función que se ejecuta con click en el ranking que queremos seleccionar para visualizar
  selectRanking(nombreRanking: Ranking): void {
    console.log(nombreRanking);
    // especifico el campo del objeto que quiero guardar como variable global
    environment.idRanking = nombreRanking['idRanking'];
    this.idRanking = environment.idRanking;
    console.log(this.idRanking);
  }
  // Función que se ejecuta con click en el ranking que queremos seleccionar para cambiar las puntuaciones
  selectRankingTarea(nombreRanking: Ranking): void {
    console.log(nombreRanking);
    // especifico el campo del objeto que quiero guardar como variable global
    environment.idRanking = nombreRanking['idRanking'];
    this.idRanking = environment.idRanking;
    console.log(this.idRanking);
  }

  // Función que se ejecuta con click en el ranking que queremos seleccionar para modificar el nombre
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

              Swal.fire(
                'Nombre Ranking modificado correctamente!',
                '',
                'success'
              )

              this.respuestaR.map((value: Ranking) => {

                if (value['idRanking'] === environment.idRanking) {
                  value['nombreRanking'] = nombre;
                }
              }
              );

            },
            (error: any) => {
              console.log(error);
            }
          )
        }
      });
  }

  // Función que permite eliminar el ranking seleccionado
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
            this.respuesta = resp;
            console.log(this.respuesta);
            Swal.fire(
              'Borrado!',
              this.respuesta.msg,
              'success'
            )
            this.respuestaR.map((value: Ranking) => {

              if (value['idRanking'] === environment.idRanking) {
               value['nombreRanking'] = null;
               value['codigoAcceso'] = null;
              }
            }
            );
            this.router.navigate(['/listarRankings']);
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    }
    )
  }

//  Generamos un nuevo código de acceso para alumnos de un ránking ya existente
  ModificarCodigoRKG(nombreRanking: Ranking): void{

    // se guarda el idRanking que recibe con nombreRanking en environment per poder executar la funció
    environment.idRanking = nombreRanking['idRanking'];

    this.nuevoCodigoRanking = new Ranking();

    this.nuevoCodigoRanking.codigoAcceso=Date.now();
    this.nuevoCodigoRanking.idRanking=environment.idRanking;
    // this.nuevoCodigoRanking.nickProfesorRK=environment.vsesion;
    this.nuevoCodigoRanking.nickProfesorRK=environment.vsesion;
    console.log(this.nuevoCodigoRanking)

     // Se ejecuta la función map para poder visualizar el cambio sin necesidad de refrescar la página y perder el login
      this.respuestaR.map((value: Ranking) => {

        if (value['idRanking'] === environment.idRanking) {
          value['codigoAcceso'] = this.nuevoCodigoRanking['codigoAcceso'];
        }
      }
      );

    this.cambiarCodigoRKGService.modificarCodigoRkg(this.nuevoCodigoRanking).subscribe(

      // lo primero si ha funcionado
      (datosDelPhpService: any) => {
        console.log(datosDelPhpService);
        if (datosDelPhpService.resultado) {
          Swal.fire('Genial', datosDelPhpService.msg, 'success');
         // this.router.navigate(['/listarRankings']);
        }
        // si es false
        else if (!datosDelPhpService.resultado) {
          Swal.fire('Problemas', datosDelPhpService.msg, 'warning');
        }
      },
      //lo segundo que se espera es si no hay datos
      (errorDelProfesorServiceTs: any) => {
        console.log(errorDelProfesorServiceTs);
        Swal.fire('Fallo', 'Fallo desconocido en el servidor', 'error');
      }


    )


 }

}

