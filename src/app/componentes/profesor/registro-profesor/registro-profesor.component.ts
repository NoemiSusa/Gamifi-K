import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profesor } from 'src/app/models/profesor.model';
import { validarContrasenya } from './validarContrasenya'
import Swal from 'sweetalert2';
import { ProfesorService } from 'src/app/services/profesor.service';


@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {

  //variables
  nuevoRegistro: Profesor = null;
  profesor: FormGroup;
  submitted = false;
  mostrarMensaje = '';

  //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
  constructor(
    private formBuilder: FormBuilder,
    private profe: ProfesorService) { }

  ngOnInit(): void {

    //creamos las condiciones de los campos del formulario de registro
    this.profesor = this.formBuilder.group({
      nickProfesor: ['', [Validators.required]],
      contrasenyaProfesor: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(20),Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      confirmarContrasenyaProfesor: ['', [Validators.required]],
      nombreProfesor: ['', [Validators.required]],
      apellidoProfesor: ['', [Validators.required]],
      correoProfesor: ['', [Validators.required, Validators.email]],
      centroProfesor: ['', [Validators.required]]
    }, {
      validator: validarContrasenya('contrasenyaProfesor', 'confirmarContrasenyaProfesor')
    });

    console.log(this.profesor);
  }
  prueba;

  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    // console.log(this.profesor);


    //guardamos los datos del nuevo usuario en un registro nuevo
    this.nuevoRegistro = new Profesor(this.profesor.controls.nickProfesor.value,
                                      this.profesor.controls.contrasenyaProfesor.value,
                                      this.profesor.controls.confirmarContrasenyaProfesor.value,
                                      this.profesor.controls.nombreProfesor.value,
                                      this.profesor.controls.apellidoProfesor.value,
                                      this.profesor.controls.correoProfesor.value,
                                      this.profesor.controls.centroProfesor.value);



    console.log(this.nuevoRegistro.nickProfesor);

// Llamamos a la función comprobarUsuarioService(está en el profesorService) y le pasamos el parámetro nickProfesor
    this.profe.comprobarUsuarioService(this.nuevoRegistro.nickProfesor).subscribe(
     datos => {

       this.prueba = datos[0]
        if ( datos == this.nuevoRegistro.nickProfesor ) {
            console.log("usuario existe");
             // Disparador error, lo que hace es guardar en la variable error any(qualquier) tipo de error y nos lo imprimirá por
                // consola con el console.log(error)
                (error: any) => {
                  console.log(error);
                }

            Swal.fire(
              'Este usuario ya existe',
              'Este usuario ya existe',
              'error'
            )
        }else {

            // Llamamos a la función insertarProfesorService (está en el profesorService) y le pasamos el objeto profesor
            this.profe.insertarProfesorService(this.nuevoRegistro).subscribe(
              (resp: any) => {
                if ( resp == 1) {
                  Swal.fire(
                    'Insert realizado',
                    'Usuario creado correctamente',
                    'success'
                  )
                }

              }
            )
        }

      }
    )
  }








  get controlFormulario() {
    return this.profesor.controls;
  }


  //funcion que se ejecuta en el html para mandar los datos
  enviarDatos() {
    this.submitted = true;  //*******************  poner esta linea en la función onFormSubmit para que funcione el reactivo */

    //si no se cumplen las condiciones
    if (this.profesor.invalid) {
      return;
    }

    //si todos los datos y campos son correctos se muestra la ventana emergente
    Swal.fire('Los datos introducidos son corectos');
  }



}
