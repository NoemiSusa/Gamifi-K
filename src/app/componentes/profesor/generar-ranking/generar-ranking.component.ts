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
import { invalid } from '@angular/compiler/src/render3/view/util';




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

  fechavalida = false;

  // prueba de la data minima
  public mindate: String;
  public fechaMinimaParsed: String;
  constructor(
    private formBuilder: FormBuilder,
    private rankingTs: ProfesorService,

  ) {

  }

  ngOnInit() {

    var fechaminima = new Date();
    var dia = fechaminima.getDate();
    var mes = fechaminima.getMonth() + 1;
    var año = fechaminima.getFullYear();

    if (mes<10){
      var fechaMinimaParsed: string = (año + "-" +"0"+ mes + "-" + dia);
    }
    else{
      var fechaMinimaParsed: string = (año + "-" + mes + "-" + dia);
    }



    console.log(fechaMinimaParsed+" data minima @@@@@@@@@@@@@@@@@@@@@");







    // this.mindate.toUTCString();
    // console.log(this.mindate+" data minima @@@@@@@@@@@@@@@@@@@@@");

    this.rankingProfesor = this.formBuilder.group({
      nombreRanking: ['', [Validators.required, Validators.minLength(2)]],
      dataFin: ["", Validators.required],

      // fechaInicio:['',[Validators.required]]
    }, {});
  }
  get controlFormulario() {
    return this.rankingProfesor.controls;

  }


  //sirve para ejecutar el control del formulario en el html


  formularioRankingFuncion() {
    console.log(this.mindate + "   mindate@@@@@@@@@@");

    this.nuevoRanking = new Ranking(this.rankingProfesor.controls.nombreRanking.value);
    var dataFinNoParsed = (this.rankingProfesor.controls.dataFin.value);

    var dataFinParced = dataFinNoParsed.split("-",);

    for (let i = 0; i < 3; i++) {
      console.log(dataFinParced[i] + "año mes y dia");
    }

    var diaFin = dataFinParced[2];
    var mesFin = dataFinParced[1];
    var añoFin = dataFinParced[0];









    this.nuevoRanking.fechaFinal = diaFin + "/" + mesFin + "/" + añoFin;

    console.log(this.nuevoRanking.fechaFinal + "TODOS LOS DATOS @@@@@@@@@@");




    console.log(dataFinParced)


    // if (this.nuevoRanking.nombreRanking.length < 1) {
    //   return;
    // }

    // this.rankingProfesor.controls.fechaInicio.value,


    this.submitted = true;





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




    if (año < añoFin || año == añoFin && mes < mesFin || año == añoFin && mes == mesFin && dia < diaFin) {
      this.fechavalida = true;

    } else {
      this.fechavalida = false;
    }
    console.log(this.fechavalida + " ESTADO DE LA FECHA VALIDA")

    if (this.rankingProfesor.invalid && this.fechavalida == false) {

      return;
    }
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

