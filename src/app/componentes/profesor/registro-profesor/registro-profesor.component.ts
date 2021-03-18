//realizamos las importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profesor } from 'src/app/models/profesor.model';
import { validarContrasenya } from './validarContrasenya'
import Swal from 'sweetalert2';
import { ProfesorService } from 'src/app/services/profesor.service';
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})

//creamos la clase registro profesor
export class RegistroProfesorComponent implements OnInit {

  //variables
  nuevoRegistro: Profesor = null;
  profesor: FormGroup;
  submitted = false;
  mostrarMensaje = '';

  constructor(
    // declaro variable para encriptar
    private encriptar: EncriptarDecriptarService,
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,
    //creamos el objeto profe del ServiceProfesor
    private profe: ProfesorService,
    //creamos el Router para moverte por las diferentes rutas
    private router: Router
  ) { }

  ngOnInit(): void {

    //creamos las condiciones de los campos del formulario de registro
    this.profesor = this.formBuilder.group({
      nickProfesor: ['', [Validators.required, Validators.minLength(2)]],
      contrasenyaProfesor: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      confirmarContrasenyaProfesor: ['', [Validators.required, Validators.minLength(2)]],
      nombreProfesor: ['', [Validators.required, Validators.minLength(2)]],
      apellidosProfesor: ['', [Validators.required, Validators.minLength(2)]],
      emailProfesor: ['', [Validators.required, Validators.email]],
      centroProfesor: ['', [Validators.required, Validators.minLength(2)]]
    }, {
      validator: validarContrasenya('contrasenyaProfesor', 'confirmarContrasenyaProfesor')
    });
  }

  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.profesor.controls;
  }


  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.nuevoRegistro = new Profesor(this.profesor.controls.nickProfesor.value,
      this.profesor.controls.contrasenyaProfesor.value,
      this.profesor.controls.confirmarContrasenyaProfesor.value,
      this.profesor.controls.nombreProfesor.value,
      this.profesor.controls.apellidosProfesor.value,
      this.profesor.controls.emailProfesor.value,
      this.profesor.controls.centroProfesor.value);

    console.log(this.nuevoRegistro);


    //passEncriptada= variable para guarda la contraseña encriptada
    //this.encriptar.set("",this.nuevoRegistro.contrasenyaProfesor paso el valor de la contraseña y lo encripto
    var passEncriptada = this.encriptar.set("", this.nuevoRegistro.contrasenyaProfesor);
    //Guardo la contraseña encriptada en el objeto del profesor para luego hacerle el insert a la BD
    this.nuevoRegistro.contrasenyaProfesor = passEncriptada;



    //si todos los datos y campos son correctos se muestra la ventana emergente
    // Swal.fire('Los datos introducidos son corectos+ Contraseña encriptada: ' + passEncriptada);

    // Llamamos a la función comprobarUsuarioService(está en el profesorService) y le pasamos el objeto con todos los datos del Profesor
    this.profe.comprobarUsuarioService(this.nuevoRegistro).subscribe(
      (datos: any) => {
        console.log(datos);
        if (datos == 1) {
          console.log("usuario existe");

          Swal.fire(
            'Problemas',
            'Este usuario ya existe',
            'error'
          );

        } else if (datos == 0) {

          Swal.fire(
            'Insert realizado',
            'Usuario creado correctamente',
            'success'
          )
          this.router.navigate(['/loginProfesor']);

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
