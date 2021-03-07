//realizamos las importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno.model';
import { validarContrasenya } from './validarContrasenya'
import Swal from 'sweetalert2';
import { AlumnoService } from 'src/app/services/alumno.service';
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})

//creamos la clase registro profesor
export class RegistroAlumnoComponent implements OnInit {
  [x: string]: any;

  //variables
  nuevoRegistro: Alumno = null;
  alumno: FormGroup;
  submitted = false;
  mostrarMensaje = '';

  constructor(
    // declaro variable para encriptar
    private encriptar: EncriptarDecriptarService,
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,
    //creamos el objeto profe del ServiceAlumno
    private alu: AlumnoService
  ) { }

  ngOnInit(): void {

    //creamos las condiciones de los campos del formulario de registro
    this.alumno = this.formBuilder.group({
      nickAlumno: ['', [Validators.required, Validators.minLength(2)]],
      contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      confirmarContrasenyaAlumno: ['', [Validators.required, Validators.minLength(2)]],
      nombreAlumno: ['', [Validators.required, Validators.minLength(2)]],
      apellidoAlumno: ['', [Validators.required, Validators.minLength(2)]],
      correoAlumno: ['', [Validators.required, Validators.email]],
      centroAlumno: ['', [Validators.required, Validators.minLength(2)]]
    }, {
      validator: validarContrasenya('contrasenyaAlumno', 'confirmarContrasenyaAlumno')
    });
  }

  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.alumno.controls;
  }


  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.nuevoRegistro = new Alumno(this.alumno.controls.nickAlumno.value,
      this.alumno.controls.contrasenyaAlumno.value,
      this.alumno.controls.confirmarContrasenyaAlumno.value,
      this.alumno.controls.nombreAlumno.value,
      this.alumno.controls.apellidoAlumno.value,
      this.alumno.controls.correoAlumno.value);

    console.log(this.nuevoRegistro);

    //passEncriptada= variable para guarda la contraseña encriptada
    //this.encriptar.set("",this.nuevoRegistro.contrasenyaAlumno paso el valor de la contraseña y lo encripto
    var passEncriptada = this.encriptar.set("", this.nuevoRegistro.contrasenyaAlumno);
    //Guardo la contraseña encriptada en el objeto del alumno para luego hacerle el insert a la BD
    this.nuevoRegistro.contrasenyaAlumno = passEncriptada;

      //si todos los datos y campos son correctos se muestra la ventana emergente
      //Swal.fire('Los datos introducidos son corectos');

    // Llamamos a la función comprobarAlumnoService(está en el AlumnoService) y le pasamos el objeto con todos los datos del Alumno
    this.alu.comprobarAlumnoService(this.nuevoRegistro).subscribe(
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
          // this.router.navigate(['/loginAlumno']);

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
          'FATAL ERROR',
          'Se ha producido un error',
          'error'
        )
      }
    )
  }
}
