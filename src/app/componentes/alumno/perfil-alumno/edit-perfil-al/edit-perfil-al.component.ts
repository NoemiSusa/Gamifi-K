// Importamos los elementos necesarios,
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-edit-perfil-al',
  templateUrl: './edit-perfil-al.component.html',
  styleUrls: ['./edit-perfil-al.component.css']
})


export class EditPerfilAlComponent implements OnInit {

  //variables
  // datosPerfil: Alumno;
  alumno: FormGroup;
  submitted = false;
  mostrarMensaje = '';
  sesion: string = environment.vsesion;
  // sesion: string = 'adminNick';
  alumne: Alumno;
  perfilAlumno: any;
  modificarAlumno: Alumno;


  constructor(
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,
    private alumnoperfil: AlumnoService,
    //creamos el objeto alu del ServiceAlumno
    private alu: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumne = this.alumnoperfil.alumnoObj;
    //creamos las condiciones de los campos del formulario de registro
    this.alumno = this.formBuilder.group({
      nickAlumno: [this.alumne.nickAlumno],
      nombreAlumno: [this.alumne.nombreAlumno, [Validators.required, Validators.minLength(2)]],
      apellidosAlumno: [this.alumne.apellidosAlumno, [Validators.required, Validators.minLength(2)]],
      emailAlumno: [this.alumne.emailAlumno, [Validators.required, Validators.email]],
      imagenAlumno: [this.alumne.imagenAlumno]
    });
  }


  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.alumno.controls;
  }

  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.modificarAlumno = new Alumno(
      this.alumno.controls.nickAlumno.value,
      this.alumno.controls.nombreAlumno.value,
      this.alumno.controls.apellidosAlumno.value,
      this.alumno.controls.emailAlumno.value,
      this.alumno.controls.imagenAlumno.value
      );

      console.log(this.modificarAlumno);

      //si todos los datos y campos son correctos se muestra la ventana emergente
     // Swal.fire('Los datos introducidos son corectos2');

      // Llamamos a la función comprobarUsuarioService(está en el alumnoService) y le pasamos el objeto con todos los datos del Alumno
      this.alu.editarDatosPerfilAl(this.alumne).subscribe(
        (datos: any) => {
          console.log(datos);
        if (datos == 1) {
          Swal.fire(
            'Bine',
            'Has actualizado tu perfil',
            'success'
          );

        } else if (datos == 0){

          Swal.fire(
            'Problemas',
            'No se ha actualizado correctamente',
            'error'
          )
        } else {
          Swal.fire(
            'Datos no insertados',
            'problemas con el paso de los datos del Alumno',
            'warning')
        }
      },
      // Disparador error, lo que hace es guardar en la variable error any(qualquier) tipo de error y nos lo imprimirá por
      // consola con el console.log(error)
      (error: any) => {
        console.log(error);
        Swal.fire(
          'FATAL ERROR EditAlumno',
          'Se ha producido un error',
          'error'
        )
      }
    )
  }
}
