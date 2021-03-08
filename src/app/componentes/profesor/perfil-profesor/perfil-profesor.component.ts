import { Profesor } from './../../../models/profesor.model';
import { environment } from './../../../../environments/environment';
import { ProfesorService } from './../../../services/profesor.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//import { get } from 'http';



@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

// Variables
profesor: Profesor;
resp;
response: string = null;
categoria: string = null;

//sesion: string = environment.vsesion;
sesion: string = 'adminNick';


  constructor (
    // creamos el objeto profe del ServiceProfesor
    private perfilProfesor: ProfesorService
    ) { }

  ngOnInit(): void {

    this.profesor = new Profesor();

// usamos el servicio para pedir todos los campos del profesor logeado
    this.perfilProfesor.pedirDatosProfesor(this.sesion).subscribe(
      (resp: Profesor[])=>{
        this.profesor = resp[0];

        // console.log(resp);

      },
      (error: any) => {
        console.log(error);
      }
    )
}


// Función para cuando hacemos (click) a editar nos haga el cambio al componente editar-perfil
cambiarAccio(categoria: string):void {
  this.categoria = categoria;
}

}
