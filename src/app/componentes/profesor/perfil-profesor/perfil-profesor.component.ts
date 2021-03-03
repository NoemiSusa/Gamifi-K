import { Profesor } from './../../../models/profesor.model';
import { environment } from './../../../../environments/environment';
import { ProfesorService } from './../../../services/profesor.service';
import { Component, OnInit } from '@angular/core';
//import { get } from 'http';



@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

profesor: Profesor;
profesorArray: Profesor[] = [];
response: string = null;
//sesion: string = environment.vsesion;
sesion: string = 'adminNick';


  constructor (
    // creamos el objeto profe del ServiceProfesor
    private perfilProfesor: ProfesorService
    ) { }

  ngOnInit(): void {

   // this.profesor.nickProfesor = this.sesion;

// usamos el servicio para pedir todos los campos del profesor logeado
  //  this.profesorArray = this.swService.getAllDades();
    // carreguem les dades que tinguem guardant previament en memoria del navegador
      //  const profesore = localStorage.getItem('profesor');
        //this.profesor = JSON.parse(profesore);

    this.perfilProfesor.pedirDatosProfesor(this.sesion).subscribe(
      (resp: any)=>{
        this.profesor = resp,
        console.log(this.profesor);
      },
      (error: any) => {
        console.log(error);
      }
    );

    }


}
