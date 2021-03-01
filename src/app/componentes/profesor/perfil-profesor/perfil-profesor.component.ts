import { ProfesorService } from './../../../services/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';


@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

profesor: Profesor;
profesorArray: Profesor[] = [];
response: string = null;


  constructor(private swService: ProfesorService) { }

  ngOnInit(): void {
// usamos el servicio para pedir todos los datos en lugar de crearlos aquí
  //  this.profesorArray = this.swService.getAllDades();

    // carreguem les dades que tinguem guardant previament en memoria del navegador
   // const profesore = localStorage.getItem('profesor');
    //this.profesor = JSON.parse(profesore);



    /*this.swService.getPerfilProfesor().subscribe(
      (resp: Profesor[])->{
        this.profesor = resp,
        console.log(this.profesor),
      },
      (error: any) -> {
        console.log(error);
      }
    );*/

    this.profesorArray.push(new Profesor('NickProfesor', 'NombreProfesor', 'ApellidoProfesor', 'correo', 'contrasenyaProfesor', 'confirmarContrasenyaProfesor', 'centroProfesor'));
  }


}
