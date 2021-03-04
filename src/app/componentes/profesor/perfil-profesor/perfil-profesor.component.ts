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
resp;
response: string = null;
sesion: string = environment.vsesion;



  constructor (
    // creamos el objeto profe del ServiceProfesor
    private perfilProfesor: ProfesorService
    ) { }

  ngOnInit(): void {


// usamos el servicio para pedir todos los campos del profesor logeado

    this.perfilProfesor.pedirDatosProfesor(this.sesion).subscribe(
      (resp: any)=>{
        //this.profesor = resp,
        //console.log(this.profesor);
        console.log(resp);
      },
      (error: any) => {
        console.log(error);
      }
    );

    }


}
