import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';


import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  profesor: FormGroup;
  mostrarMissatge = '';

  constructor(private formBuilder: FormBuilder ) { }

  newProfesor: Profesor = null;


  // variables

  //alumno = variable de tipo formgroup.




  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      // nick
      nickProfesor: ['', Validators.required],
      //contrasenya
      contrasenyaProfesor: ['', [Validators.required, Validators.minLength(6)]],





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
 console.log(this.loginForm);
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }


  //si totes les dades i camps són correctes es mostra la següent finestra emergent
  // Swal.fire('Les dades introduïdes són correctes');
}



