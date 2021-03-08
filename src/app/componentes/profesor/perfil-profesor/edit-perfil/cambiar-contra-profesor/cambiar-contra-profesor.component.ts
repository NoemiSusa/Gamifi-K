import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validarContrasenya } from '../../../registro-profesor/validarContrasenya';

@Component({
  selector: 'app-cambiar-contra-profesor',
  templateUrl: './cambiar-contra-profesor.component.html',
  styleUrls: ['./cambiar-contra-profesor.component.css']
})
export class CambiarContraProfesorComponent implements OnInit {

  formCambiarPass: FormGroup;

  submitted = false;
  mostrarMensaje = '';
  constructor(  private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formCambiarPass = this.formBuilder.group({
      contrasenyaAntigua: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      
      contrasenyaProfesor: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      confirmarContrasenyaProfesor: ['', [Validators.required, Validators.minLength(2)]],
    
    }, {
      validator: validarContrasenya('contrasenyaProfesor', 'confirmarContrasenyaProfesor')
    });
  }
  
    //sirve para ejecutar el control del formulario en el html
    get controlFormulario() {
      return this.formCambiarPass.controls;
    }
  

  formCambiarContrasenya(): void{
    //  guardamos los datos del nuevo usuario en un registro nuevo
    

       this.formCambiarPass.controls.contrasenyaAntigua.value,
    
      this.formCambiarPass.controls.contrasenyaProfesor.value,
      this.formCambiarPass.controls.confirmarContrasenyaProfesor.value
      

    // console.log(this.formCambiarPass);

  }
     




}
