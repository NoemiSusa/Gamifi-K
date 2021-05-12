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
import { Router } from '@angular/router';



@Component({
  selector: 'app-generar-ranking',
  templateUrl: './generar-ranking.component.html',
  styleUrls: ['./generar-ranking.component.css']
})
export class GenerarRankingComponent implements OnInit {
  //variable de tipo ranking para rellenar los datos del formulario
  public nuevoRanking: Ranking;
  public rankingProfesor: FormGroup;
  public submitted = false;

  public datainicio: string;
  // prueba de la data minima
  public fechaMinimaParsed: string;

  public dataFinNoParsed
  router: Router;



  public nuevoCodigoRanking:Ranking;


  constructor(
    private formBuilder: FormBuilder,
    private rankingTs: ProfesorService,
    private cambiarCodigoRKGService: ProfesorService,

  ) {

  }

  ngOnInit() {
    this.rankingProfesor = this.formBuilder.group({
      nombreRanking: ['', [Validators.required, Validators.minLength(2)]],
      dataFin: ['', Validators.required]
    }, {});

    // creo variable para que me ponga toda la fecha en fechaminima
    var fechaminima = new Date();
    // cojo las partes de la fecha por separado
    var dia = fechaminima.getDate();
    var mes = fechaminima.getMonth() + 1;
    var año = fechaminima.getFullYear();

    // valido la fecha
    if (dia < 10 && mes < 10) {
      this.fechaMinimaParsed = (año + "-" + "0" + mes + "-" + "0" + dia);
      console.log(this.fechaMinimaParsed + " data minima 1");
    }
    else if (mes < 10 && dia > 9) {
      this.fechaMinimaParsed = (año + "-" + "0" + mes + "-" + dia);
      console.log(this.fechaMinimaParsed + " data minima 2");
    }
    else if (mes > 9 && dia > 9) {
      this.fechaMinimaParsed = (año + "-" + mes + "-" + dia);
      console.log(this.fechaMinimaParsed + " data minima 3");
    }
    console.log(this.fechaMinimaParsed + " data minima @@@@@@@@@@@@@@@@@@@@@");
  }
  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.rankingProfesor.controls;
  }


  formularioRankingFuncion(): void {
    console.log(this.rankingProfesor.controls.nombreRanking.value + " hibirihibiri");

    //guardo los valores del formulario en la variable nuevo ranking
    this.nuevoRanking = new Ranking(null,
      this.rankingProfesor.controls.nombreRanking.value);
    console.log(this.nuevoRanking.nombreRanking + " nuevoranking");



    console.log(this.nuevoRanking.nombreRanking + " Nuevo ranking ");
    //cojo la fecha del formulario en su formato para luego formatearla correctamente
    this.dataFinNoParsed = (this.rankingProfesor.controls.dataFin.value);


    var dataFinParced = this.dataFinNoParsed.split("-",);
    console.log(dataFinParced + "Fecha fin :   datafinparce");

    var diaFin = dataFinParced[2];
    var mesFin = dataFinParced[1];
    var añoFin = dataFinParced[0];

    var fechaFinRkg = diaFin + "/" + mesFin + "/" + añoFin;


    console.log(fechaFinRkg + "  Fecha fin :   fechaFinRkg");

    //guardo la fecha fin en el objeto
    this.nuevoRanking.fechaFinal = fechaFinRkg;



    console.log(this.nuevoRanking.fechaFinal + "DATA-FIN-FINAL");

    console.log(dataFinParced)
    this.submitted = true;

    this.nuevoRanking.nickProfesorRK = environment.vsesion;
    //codigo de acceso
    this.nuevoRanking.codigoAcceso = Date.now();

    var fechaEntera = new Date();
    var dia = fechaEntera.getDate();
    var mes = fechaEntera.getMonth() + 1;
    var año = fechaEntera.getFullYear();

    if (dia < 10 && mes < 10) {
      this.datainicio = ("0" + dia + "/" + "0" + mes + "/" + año);
    }
    else if (dia < 10 && mes > 9) {
      this.datainicio = ("0" + dia + "/" + mes + "/" + año);
    }
    else
      this.datainicio = (dia + "/" + mes + "/" + año);


    this.nuevoRanking.fechaInicio = this.datainicio;
    console.log(this.datainicio);
    console.log(this.nuevoRanking);



    if (this.rankingProfesor.invalid) {
      return;
    }




    this.rankingTs.altaRankingService(this.nuevoRanking).subscribe(

      // lo primero si ha funcionado
      (datosDelProfesorServiceTsPHP: any) => {
        console.log(datosDelProfesorServiceTsPHP);
        if (datosDelProfesorServiceTsPHP.resultado) {
          Swal.fire('Genial', datosDelProfesorServiceTsPHP.msg, 'success');
         // this.router.navigate(['/listarRankings']);
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



  ModificarCodigoRKG(){
    this.nuevoCodigoRanking = new Ranking();

    this.nuevoCodigoRanking.codigoAcceso=Date.now();
    this.nuevoCodigoRanking.idRanking=1;
    // this.nuevoCodigoRanking.nickProfesorRK=environment.vsesion;
    this.nuevoCodigoRanking.nickProfesorRK="Lucian123";
    console.log(this.nuevoCodigoRanking)




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

