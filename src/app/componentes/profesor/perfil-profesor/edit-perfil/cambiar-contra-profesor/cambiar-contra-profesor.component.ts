import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validarContrasenya } from '../../../registro-profesor/validarContrasenya';
import { EncriptarDecriptarService } from 'src/app/services/encriptar-decriptar.service';
import Swal from 'sweetalert2';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';
import { Contrasenyas } from 'src/app/models/Contrasenyas.model';


@Component({
  selector: 'app-cambiar-contra-profesor',
  templateUrl: './cambiar-contra-profesor.component.html',
  styleUrls: ['./cambiar-contra-profesor.component.css']
})
export class CambiarContraProfesorComponent implements OnInit {

  formCambiarPass: FormGroup;
  // contravieja: string = "";
  // contranueva: string = "";
  contrasenyas: String[] = [];
  submitted = false;
  mostrarMensaje = '';

  modificarContra: Contrasenyas = null;

  constructor(
    private formBuilder: FormBuilder,
    private encriptar: EncriptarDecriptarService,
    private contra: ProfesorService


  ) { }

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


  formCambiarContrasenya(): void {

    this.modificarContra = new Contrasenyas(
      this.formCambiarPass.controls.contrasenyaAntigua.value,
      this.formCambiarPass.controls.contrasenyaProfesor.value,
      environment.vsesion
    );
    console.log(this.modificarContra + "este console log");

    this.modificarContra.contraVieja = this.encriptar.set("", this.modificarContra.contraVieja);
    this.modificarContra.contranueva = this.encriptar.set("", this.modificarContra.contranueva);

    console.log(this.modificarContra);


    this.contra.comprobarContrasenyaService(this.modificarContra).subscribe(
      (datos: any) => {
        console.log(datos);

      },
      (error: any) => {
        console.log(error);
        Swal.fire(
          'FATAL ERROR 2',
          'SE HA PRODUCIDO UN ERROR',
          'error'
        )

      }

    )


  }





}
