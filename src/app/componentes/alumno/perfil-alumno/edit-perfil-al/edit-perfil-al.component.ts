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


  constructor(
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,
    private alumnoperfil: AlumnoService,
    //creamos el objeto alu del ServiceAlumno
    private alu: AlumnoService
  ) { }

  ngOnInit(): void {
    // del service llamo al getAlumno para recoger el objeto alumno
    /* this.alumne = this.alu.getalumno();
    console.log(this.alumne);*/

    // usamos el servicio para pedir todos los campos del alumno logeado
    this.alumnoperfil.pedirDatosAlumno(this.sesion).subscribe(
      (resp: Alumno[])=>{
        this.alumne = resp[0];
        // console.log(resp);
      },
      (error: any) => {
        console.log(error);
      }
    )

    //creamos las condiciones de los campos del formulario de registro
    this.alumno = this.formBuilder.group({
      nickAlumno: ['', [Validators.required, Validators.minLength(2)]],
      // contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      // confirmarContrasenyaAlumno: ['', [Validators.required, Validators.minLength(2)]],
      nombreAlumno: ['', [Validators.required, Validators.minLength(2)]],
      apellidoAlumno: ['', [Validators.required, Validators.minLength(2)]],
      correoAlumno: ['', [Validators.required, Validators.email]],
      centroAlumno: ['', [Validators.required, Validators.minLength(2)]]
    });
  }


  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.alumno.controls;
  }

  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.alumne = new Alumno(this.alumno.controls.nickProfesor.value,
      this.alumno.controls.contrasenyaProfesor.value,
      this.alumno.controls.confirmarContrasenyaProfesor.value,
      this.alumno.controls.nombreProfesor.value,
      this.alumno.controls.apellidoProfesor.value,
      this.alumno.controls.correoProfesor.value);

      console.log(this.alumne);

      //si todos los datos y campos son correctos se muestra la ventana emergente
      Swal.fire('Los datos introducidos son corectos2');

      // Llamamos a la función comprobarUsuarioService(está en el alumnoService) y le pasamos el objeto con todos los datos del Alumno
      this.alu.editarDatosPerfilAl(this.alumne).subscribe(
        (datos: any) => {
          console.log(datos);
        if (datos == 1) {
          console.log("Alumno existe ");

          Swal.fire(
            'Problemas',
            'Este Alumno ya existe2',
            'error'
          );

        } else if (datos == 0){

          Swal.fire(
            'Insert realizado',
            'Alumno creado correctamente2',
            'success'
          )
        } else {
          console.log(datos);
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
