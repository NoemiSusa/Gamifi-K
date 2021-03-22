import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';
import Swal from 'sweetalert2';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import { environment } from 'src/environments/environment';
import { Contrasenyas } from 'src/app/models/Contrasenyas.model';
import { AlumnoService } from 'src/app/services/alumno.service';
import { validarContrasenya } from '../../../registro-alumno/validarContrasenya';

@Component({
  selector: 'app-cambiar-contra-al',
  templateUrl: './cambiar-contra-al.component.html',
  styleUrls: ['./cambiar-contra-al.component.css']
})
export class CambiarContraAlComponent implements OnInit {

  formCambiarPassAl: FormGroup;
  // contravieja: string = "";
  // contranueva: string = "";
  contrasenyas: String[] = [];
  submitted = false;
  mostrarMensaje = '';

  modificarContraAl: Contrasenyas = null;


  constructor(
    private formBuilder: FormBuilder,
    private encriptar: EncriptarDecriptarService,
    private contra: AlumnoService

  ) { }

  ngOnInit(): void {
    this.formCambiarPassAl = this.formBuilder.group({
      contrasenyaAntiguaAl: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],

      contrasenyaAlumno: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})')]],
      confirmarContrasenyaAlumno: ['', [Validators.required, Validators.minLength(2)]],

    }, {
      validator: validarContrasenya('contrasenyaAlumno', 'confirmarContrasenyaAlumno')
    });
  }

  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.formCambiarPassAl.controls;
  }

  formCambiarContrasenyaAl(): void {

    this.modificarContraAl = new Contrasenyas(
      this.formCambiarPassAl.controls.contrasenyaAntiguaAl.value,
      this.formCambiarPassAl.controls.contrasenyaAlumno.value,
      environment.vsesion
    );
    console.log(this.modificarContraAl + "este console log");

    this.modificarContraAl.contraVieja = this.encriptar.set("", this.modificarContraAl.contraVieja);
    this.modificarContraAl.contranueva = this.encriptar.set("", this.modificarContraAl.contranueva);

    console.log(this.modificarContraAl);


    this.contra.comprobarContrasenyaService(this.modificarContraAl).subscribe(
      (datos: any) => {
        console.log(datos);
        if(datos==0){
          Swal.fire(
            'CONTRASEÑA NO EXISTE',
            'te has equivocado de contraseña',
            'error'
          )
        }else if(datos ==1){
          Swal.fire(
            'EXISTE CONTRASEÑA',
            'EXISTE CONTRASEÑA',
            'warning'
          )
        }else if(datos ==2){
          Swal.fire(
            'Bien ',
            'contraseña modificada',
            'success'
          )
        }else{
          Swal.fire(
            'Problemas no se ha realizado el update',
            'SE HA PRODUCIDO UN ERROR EN EL PASO DE DATOS',
            'warning'
          )
        }

      },
      (error: any) => {
        console.log(error);
        Swal.fire(
          'FATAL ERROR cambio Contraseña',
          'SE HA PRODUCIDO UN ERROR',
          'error'
        )
      }
    )
  }

}
