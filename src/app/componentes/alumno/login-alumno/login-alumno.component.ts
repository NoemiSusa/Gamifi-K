import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { EventEmitter } from 'events';

import { Alumno } from 'src/app/models/alumno.model';

// importo el servicio alumno.service para luego enviarle los datos.
import { AlumnoService } from 'src/app/services/alumno.service';

//imports http client
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {
  // variable loginForm de tipo FormGroup
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
     private _loginAlumno: AlumnoService,
     private http: HttpClient
    ) { }



  ngOnInit() {

// en le login form entran los datos del formulario y aqui hago la comprobacion

    this.loginForm = this.formBuilder.group({

      // nick
      nickAlumno: ['', Validators.required],
      //contrasenya
      contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6)]],

    }, {

    });
  }

  // convenience getter for easy access to form fields
  get controlFormulario() { return this.loginForm.controls; }



  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {

      return;
    }
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }



loginAlumno(){

  // creo una instancia para el service de login alumno pasandole los datos del formulario
  this._loginAlumno.loginAlumno(this.loginForm.controls.nickAlumno.value,
    this.loginForm.controls.contrasenyaAlumno.value).subscribe(
// con el subscribe recibo la respuesta del php.

// si funciona printo el resultado en la consola
  resultado => console.log (resultado),
// si peta saco el error por consola
  error => console.log (error)

  )

}

// funcion para el reset

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }




}




