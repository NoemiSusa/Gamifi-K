import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  newProfesor: Profesor = null;

prueba;
  // Funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void {

    // Guardamos los valores del formulario en un personaje nuevo
    this.newProfesor = new Profesor(itemForm.controls.nickAlumno.value,
                                itemForm.controls.contrasenyaAlumno.value);





    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    // this.eventoAlumno.emit(this.newAlumno);

  }

}
