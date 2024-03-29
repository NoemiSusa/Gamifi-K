import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { EventEmitter } from 'events';
import { Alumno } from 'src/app/models/alumno.model';
// importo el servicio alumno.service para luego enviarle los datos.
import { AlumnoService } from 'src/app/services/alumno.service';
//imports http client
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgSwitchDefault } from '@angular/common';
//import sweet alert
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
// Importo el service para encriptar la contraseña
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {
  // variable loginForm de tipo FormGroup
  loginForm: FormGroup;
  submitted = false;


  alerta: string = "";
  Router: any;

  constructor(
    private encriptar:EncriptarDecriptarService,
    private formBuilder: FormBuilder,
    private _loginAlumno: AlumnoService,
    private router: Router

  ) { }


  ngOnInit() {
    // en le login form entran los datos del formulario y aqui hago la comprobacion

    this.loginForm = this.formBuilder.group({
      nickAlumno: ['', [Validators.required]],
      contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }

  // con el getter estoy estoy haciendo las comprobaciones del formulario y devolviendo los errores
  get controlFormulario() {
    return this.loginForm.controls;
  }

  loginAlumno() {
    // creo una instancia para el service de login alumno pasandole los datos del formulario
    let alumno = new Alumno(this.loginForm.controls.nickAlumno.value,
      this.loginForm.controls.contrasenyaAlumno.value);

    this.submitted = true;
    // Con el submit compruebo si se ha  enviado el formulario para luego

    // stop here if form is invalid
    // en caso de que el formulario no tiene los valores correctos como contraseña o algun campo lo devuelva marcando asi el campo en rojo
    if (this.loginForm.invalid) {
      return;
    }
    // en caso de que sea valido envio los datos al subscribe
    else {

      var passEncriptada = this.encriptar.set("", alumno.contrasenyaAlumno);
      alumno.contrasenyaAlumno = passEncriptada;
      this._loginAlumno.loginAlumnoService(alumno)
    }
  }

  // funcion para el reset
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
