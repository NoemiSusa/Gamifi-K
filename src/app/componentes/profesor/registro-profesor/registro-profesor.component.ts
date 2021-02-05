import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Profesor } from 'src/app/models/profesor.model';
import { validarContrasenya } from '../../../models/validarContrasenya'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {

  //variables
  nuevoRegistro: Profesor = null;
  profesor:FormGroup;
  submitted = false;
  mostrarMensaje = '';

  //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //creamos las condiciones de los campos del formulario de registro
    this.profesor = this.formBuilder.group({
      nickProfesor:['',Validators.required],
      contrasenyaProfesor:['',Validators.required],
      confirmarContrasenyaProfesor:['',Validators.required],
      nombreProfesor:['',Validators.required],
      apellidoProfesor:['',Validators.required],
      correoProfesor:['',Validators.required, Validators.email],
      centroProfesor:['', Validators.required]
    },{
      validator: validarContrasenya('contrasenyaProfesor','confirmarContrasenyaProfesor')
    })

  }

  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void{

    //guardamos los datos del nuevo usuario en un registro nuevo
    this.nuevoRegistro = new Profesor(itemForm.controls.nickProfesor.value,
                                      itemForm.controls.contrasenyaProfesor.value,
                                      itemForm.controls.confirmarContrasenyaProfesor.value,
                                      itemForm.controls.nombreProfesor.value,
                                      itemForm.controls.apellidoProfesor.value,
                                      itemForm.controls.correoProfesor.value,
                                      itemForm.controls.centroProfesor.value,);



  }

  get controlFormulario(){
    return this.profesor.controls;
  }

  //funcion que se ejecuta en el html para mandar los datos
  enviarDatos(){
    this.submitted = true;

    //si no se cumplen las condiciones
    if (this.profesor.invalid){
      return;
    }

  //si todos los datos y campos son correctos se muestra la ventana emergente
  Swal.fire('Los datos introducidos son corectos');
  }



}
