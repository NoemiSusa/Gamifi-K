import { Respuesta } from './../../../models/respuesta.model';
import Swal from 'sweetalert2';
// import { environment } from './../../../../environments/environment';
import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'crypto-js';
import { Ranking } from 'src/app/models/ranking.model';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-generar-ranking',
  templateUrl: './generar-ranking.component.html',
  styleUrls: ['./generar-ranking.component.css']
})
export class GenerarRankingComponent implements OnInit {
  //variable de tipo ranking para rellenar los datos del formulario
  nuevoRanking: Ranking;
  rankingProfesor: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private rankingTs: ProfesorService
  ) {

  }

  ngOnInit() {
    this.rankingProfesor = this.formBuilder.group({
      nombreRanking: ['', [Validators.required, Validators.minLength(2)]],
      // fechaInicio:['',[Validators.required]]
    }, {});
  }
  get controlFormulario() {
    return this.rankingProfesor.controls;
  }

  //sirve para ejecutar el control del formulario en el html


  formularioRankingFuncion() {
    this.nuevoRanking = new Ranking(this.rankingProfesor.controls.nombreRanking.value);
    // if (this.nuevoRanking.nombreRanking.length < 1) {
    //   return;
    // }

    // this.rankingProfesor.controls.fechaInicio.value,


    this.submitted = true;

    if(this.rankingProfesor.invalid){
      return;
    }

    this.nuevoRanking.nickProfesorRK = environment.vsesion;
    this.nuevoRanking.codigoAcceso = Date.now();

    var fechaEntera = new Date();

    var dia = fechaEntera.getDate();
    var mes = fechaEntera.getMonth() + 1;
    var año = fechaEntera.getFullYear();

    var datainicio: string = (dia + "/" + mes + "/" + año);

    this.nuevoRanking.fechaInicio = datainicio;

    console.log(datainicio);

    console.log(this.nuevoRanking);

    this.rankingTs.altaRankingService(this.nuevoRanking).subscribe(
      // lo primero si ha funcionado
      (datosDelProfesorServiceTsPHP: any) => {
        console.log(datosDelProfesorServiceTsPHP);
        if (datosDelProfesorServiceTsPHP.resultado) {
          Swal.fire('Genial', datosDelProfesorServiceTsPHP.msg, 'success');
        }

        // si es false
        else if (!datosDelProfesorServiceTsPHP.resultado) {
          Swal.fire('Problemas', datosDelProfesorServiceTsPHP.msg, 'warning');
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

