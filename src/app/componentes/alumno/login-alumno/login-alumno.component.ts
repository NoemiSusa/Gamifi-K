import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { EventEmitter } from 'events';
import { Alumno } from 'src/app/models/alumno.model';
@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {


  // creo un alumno
  newAlumno: Alumno = null;




  // Creamos un emisor de eventos que enviará el personaje creado
  // @Output() eventoAlumno: EventEmitter<Alumno> = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }
prueba;
  // Funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void {

    // Guardamos los valores del formulario en un personaje nuevo
    this.newAlumno = new Alumno(itemForm.controls.nickAlumno.value,
                                itemForm.controls.contrasenyaAlumno.value);





    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    // this.eventoAlumno.emit(this.newAlumno);

  }






}
