import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { EventEmitter } from 'events';


import { Profesor } from 'src/app/models/profesor.model';

// importo el servicio profesor.service para luego enviarle los datos.
import { ProfesorService } from 'src/app/services/profesor.service';

//imports http client
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgSwitchDefault } from '@angular/common';


//import sweet alert
import Swal from'sweetalert2';
import { environment } from 'src/environments/environment';

// Importo el service para encriptar la contraseña
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {
  // variable loginForm de tipo FormGroup
  loginFormProfesor: FormGroup;
  submitted = false;

  alerta:string="";

  constructor(
    // declaro variable para encriptar
    private encriptar : EncriptarDecriptarService,
    private formBuilder: FormBuilder,
    private _loginProfesor: ProfesorService

  ) { }


  ngOnInit() {
    // en le login form entran los datos del formulario y aqui hago la comprobacion

    this.loginFormProfesor = this.formBuilder.group({
      nickProfesor: ['', [Validators.required]],
      contrasenyaProfesor: ['', [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }


  // con el getter estoy estoy haciendo las comprobaciones del formulario y devolviendo los errores
  get controlFormulario() { return this.loginFormProfesor.controls; }
  loginProfesor() {
    // creo una instancia para el service de login profesor pasandole los datos del formulario
    let profesor = new Profesor(this.loginFormProfesor.controls.nickProfesor.value,
      this.loginFormProfesor.controls.contrasenyaProfesor.value);



    this.submitted = true;
    // Con el submit compruebo si se ha  enviado el formulario para luego
    //passEncriptada= variable para guarda la contraseña encriptada
    //this.encriptar.set("",this.nuevoRegistro.contrasenyaProfesor paso el valor de la contraseña y lo encripto



    //Guardo la contraseña encriptada en el objeto del profesor para luego hacerle el insert a la BD


    // stop here if form is invalid
    // en caso de que el formulario no tiene los valores correctos como contraseña o algun campo lo devuelva marcando asi el campo en rojo
    if (this.loginFormProfesor.invalid) {
      return;
    }
    // en caso de que sea valido envio los datos al subscribe
    else {
      var passEncriptada = this.encriptar.set("", profesor.contrasenyaProfesor);
     profesor.contrasenyaProfesor = passEncriptada;

      this._loginProfesor.loginProfesorService(profesor).subscribe(
        (respuesta: any) => {
          console.log(respuesta);


          if (respuesta[0] == null) {
            console.log("Usuario no existe");
// mostrar una alerta con sweet alert

    Swal.fire('Datos incorrectos', 'Verifica el nick o la contraseña y vuelve a intentarlo', 'error')
          }

          else {
            console.log("Usuario existe");
            // aqui tengo que llamar el siguiente componente
            Swal.fire('Usuario correcto')

            environment.vsesion=profesor.nickProfesor;

            Swal.fire(environment.vsesion+ " Variable de sesion ")
          }
        },
        (error: any) => {
          console.log(error);
        }



      )

    }

  }



  // funcion para el reset
  onReset() {
    this.submitted = false;
    this.loginFormProfesor.reset();
  }


}
