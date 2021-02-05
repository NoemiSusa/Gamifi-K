import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';

import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  newProfesor: Profesor = null;


   // variables

 //alumno = variable de tipo formgroup.
 profesor: FormGroup;
 submitted = false;
 mostrarMissatge = '';

  ngOnInit(): void {
   //posem les condicions dels camps
   this.profesor = this.formBuilder.group({
    nombreProfesor: ['', Validators.required],

    contrasenya: ['', Validators.required],

    // confirmarContrasenya: ['', Validators.required]
  },{
    //validem la contrasenya
    // validator: validarContrasenya('contrasenya', 'confirmarContrasenya')
  });

  }




  prueba;





  // Funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void {




    // Guardamos los valores del formulario en un personaje nuevo
    this.newProfesor = new Profesor(itemForm.controls.nickProfesor.value,
                                itemForm.controls.contrasenyaProfesor.value);



                                console.log(this.newProfesor);


    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    // this.eventoAlumno.emit(this.newAlumno);

  }

  get controlLogin() {
    return this.profesor.controls;
  }



 //funció per enviar datos
 enviarDatosForm() {
  this.submitted = true;
  //si cap camp no compleix les condicions
  if ( this.profesor.invalid) {
    return;

  }

//si totes les dades i camps són correctes es mostra la següent finestra emergent
  // Swal.fire('Les dades introduïdes són correctes');
}



}
