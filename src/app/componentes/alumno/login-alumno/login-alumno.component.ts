import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { EventEmitter } from 'events';

import { Alumno } from 'src/app/models/alumno.model';

// importo el servicio alumno.service para luego enviarle los datos.
import { AlumnoService } from 'src/app/services/alumno.service';

//imports http client
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    private _loginAlumno: AlumnoService
  ) { }


  ngOnInit() {
    // en le login form entran los datos del formulario y aqui hago la comprobacion
    this.loginForm = this.formBuilder.group({
      nickAlumno: ['', Validators.required],
      contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6)]],
    }, {

    });
  }

  // convenience getter for easy access to form fields
  get controlFormulario() { return this.loginForm.controls; }


  loginAlumno() {
    // creo una instancia para el service de login alumno pasandole los datos del formulario
    let alumno = new Alumno(this.loginForm.controls.nickAlumno.value,
                            this.loginForm.controls.contrasenyaAlumno.value);

    this._loginAlumno.loginAlumno(alumno).subscribe(
        // con el subscribe recibo la respuesta del php.

        // si funciona printo el resultado en la consola
        (resultado: any) => {
          console.log(resultado)
        },
        // si peta saco el error por consola
        (error: any) => {
          console.log(error);
        }
      )

  }

  // funcion para el reset
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }




}




