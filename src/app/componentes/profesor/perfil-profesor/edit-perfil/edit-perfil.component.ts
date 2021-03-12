// Importamos los elementos necesarios,
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profesor } from 'src/app/models/profesor.model';
import Swal from 'sweetalert2';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {


  //variables
 // datosPerfil: Profesor;
  profesor: FormGroup;
  submitted = false;
  mostrarMensaje = '';
  modificarProfe: Profesor;
  sesion: string = environment.vsesion;
  // sesion: string = 'adminNick';

  profesore: Profesor;
  perfilProfesor: any;

  constructor(
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,
    //creamos el objeto profe del ServiceProfesor
    private profeperfil: ProfesorService,
    private profe: ProfesorService
  ) { }

  ngOnInit(): void {

    // del service llamo al getprofesor para recoger el objeto profesor
   /* this.profesore = this.profe.getprofesor();
    console.log(this.profesore);*/

    // usamos el servicio para pedir todos los campos del profesor logeado
    this.profeperfil.pedirDatosProfesor(this.sesion).subscribe(
      (resp: Profesor[])=>{
        this.profesore = resp[0];


        // console.log(resp);

      },
      (error: any) => {
        console.log(error);
      }
    )

    //creamos las condiciones de los campos del formulario de registro
    this.profesor = this.formBuilder.group({
      // nickProfesor: ['', [Validators.required, Validators.minLength(2)]],
      // contrasenyaProfesor: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      // confirmarContrasenyaProfesor: ['', [Validators.required, Validators.minLength(2)]],
      nombreProfesor: ['', [Validators.required, Validators.minLength(2)]],
      apellidoProfesor: ['', [Validators.required, Validators.minLength(2)]],
      correoProfesor: ['', [Validators.required, Validators.email]],
      centroProfesor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.profesor.controls;
  }


  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.modificarProfe = new Profesor(
      //this.profesor.controls.nickProfesor.value,
      // this.profesor.controls.contrasenyaProfesor.value,
      // this.profesor.controls.confirmarContrasenyaProfesor.value,
      this.profesor.controls.nombreProfesor.value,
      this.profesor.controls.apellidoProfesor.value,
      this.profesor.controls.correoProfesor.value,
      // this.profesor.controls.imagenProfesor.value,
      this.profesor.controls.centroProfesor.value);

      console.log(this.modificarProfe);

      //si todos los datos y campos son correctos se muestra la ventana emergente
      Swal.fire('Los datos introducidos son corectos');

      // Llamamos a la función comprobarUsuarioService(está en el profesorService) y le pasamos el objeto con todos los datos del Profesor
      this.profe.editarDatosPerfil(this.modificarProfe).subscribe(
        (datos: any) => {
          console.log(datos);
        if (datos == 1) {
          console.log("usuario existe");

          Swal.fire(
            'Problemas',
            'Este usuario ya existe',
            'error'
          );

        } else if (datos == 0){

          Swal.fire(
            'Insert realizado',
            'Usuario creado correctamente',
            'success'
          )
        } else {
          console.log(datos);
          Swal.fire(
            'Datos no insertados',
            'problemas con el paso de los datos',
            'warning')
        }
      },
      // Disparador error, lo que hace es guardar en la variable error any(qualquier) tipo de error y nos lo imprimirá por
      // consola con el console.log(error)
      (error: any) => {
        console.log(error);
        Swal.fire(
          'FATAL ERROR 3',
          'Se ha producido un error',
          'error'
        )
      }
    )
  }





}
