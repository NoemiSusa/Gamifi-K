import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { EventEmitter } from 'events';
import { Alumno } from 'src/app/models/alumno.model';

import {AlumnoService} from 'src/app/services/alumno.service';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {


  loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
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

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }




}




