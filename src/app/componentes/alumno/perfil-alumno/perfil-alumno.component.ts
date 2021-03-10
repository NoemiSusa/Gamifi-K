import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';
//import { get } from 'http';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})


export class PerfilAlumnoComponent implements OnInit {
// Variables
alumno: Alumno;
resp;
response: string = null;
//categoria: string = null;
sesion: string = environment.vsesion;
// sesion: string = 'adminNick';

  constructor(
    // creamos el objeto profe del ServiceProfesor
    private perfilAlumno: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alumno = new Alumno();

    // usamos el servicio para pedir todos los campos del profesor logeado
    this.perfilAlumno.pedirDatosAlumno(this.sesion).subscribe(
      (resp: Alumno[])=>{
        this.alumno = resp[0];
         // console.log(resp);

      },
      (error: any) => {
        console.log(error);
      }
    )
  }




  // cambiarComponente(): void{
//   this.router.navigate(['/perfil-profesor.component/edit-perfil.component']);
// }
}
