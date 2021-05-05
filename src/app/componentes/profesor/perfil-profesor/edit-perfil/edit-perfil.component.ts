// Importamos los elementos necesarios,
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profesor } from 'src/app/models/profesor.model';
import Swal from 'sweetalert2';
import { ProfesorService } from 'src/app/services/profesor.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {


  //variables
 // datosPerfil: Profesor;
  profesor: FormGroup;
  submitted = false;
  mostrarMensaje = '';
  modificarProfe: Profesor;
  sesion: string = environment.vsesion;
  // sesion: string = 'adminNick';
//guardamos los datos que vamos a cambiar
  profesore: Profesor;
  perfilProfesor: any;

  constructor(
    //iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder,


    //creamos el objeto profe del ServiceProfesor que es el objeto que tenemos guardado en el servicio
    private profeperfil: ProfesorService,
    private profe: ProfesorService
  ) { }

  ngOnInit(): void {



    // profeperfil instancia la clase de profesorservice profesorObj, y guarda el objeto en profesore, que es lo que se visualiza para editar perfil
    this.profesore = this.profeperfil.profesorObj;

    //creamos las condiciones de los campos del formulario para realizar el update
      // dentro de cada campo le ponemos los datos que tiene que mostrar en pantalla solamente mostrar el formulario
    this.profesor = this.formBuilder.group({
      //camp bbdd : [valor que printara al html,[validadors del formulari reactiu]]
      nickProfesor:[this.profesore.nickProfesor],
      contrasenyaProfesor: [this.profesore.contrasenyaProfesor],
      nombreProfesor: [this.profesore.nombreProfesor, [Validators.required, Validators.minLength(2)]],
      apellidosProfesor: [this.profesore.apellidosProfesor, [Validators.required, Validators.minLength(2)]],
      emailProfesor: [this.profesore.emailProfesor, [Validators.required, Validators.email]],
      centroProfesor: [this.profesore.centroProfesor, [Validators.required, Validators.minLength(2)]],
      imagenProfesor:[this.profesore.imagenProfesor]
    });
  }

  //sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.profesor.controls;
  }


  //funcion que se ejecuta al enviar el formulario
  onFormSubmit(): void {

    //guardamos los datos del usuario obteniendo todos los datos que va a recojer en el submit para editar y hacer el update
      //a cada campo recojemos el valor que se modifica del formulario
    this.modificarProfe = new Profesor(
      this.profesor.controls.nickProfesor.value,
      /***********cal posar valor a la contrasenya  i  confirmar contrasenya  que pot ser el que te el objecte que recollim del service per omplir tot l'objecte per fer el update****************************************** */
      this.profesor.controls.contrasenyaProfesor.value,
      this.profesor.controls.contrasenyaProfesor.value,
      this.profesor.controls.nombreProfesor.value,
      this.profesor.controls.apellidosProfesor.value,
      this.profesor.controls.emailProfesor.value,
      this.profesor.controls.centroProfesor.value,
      this.profesor.controls.imagenProfesor.value
    );

      console.log(this.modificarProfe);

      // Llamamos a la función comprobarUsuarioService(está en el profesorService) y le pasamos el objeto con todos los datos del Profesor
      this.profe.editarDatosPerfil(this.modificarProfe).subscribe(
        (datos: any) => {
          console.log(datos);
        if (datos == 1) {
          // console.log("usuario existe");

          Swal.fire(
            'Bien',
            'Has actualizado tu perfil',
            'success'
          );

        } else if (datos == 0){

          Swal.fire(
            'Problemas',
            'No se ha actualizado el perfil',
            'error'
          )
        } else {
          // console.log(datos);
          Swal.fire(
            'Datos no insertados',
            'problemas con el paso de los datos',
            'warning')
        }
      },
      // Disparador error, lo que hace es guardar en la variable error any(qualquier) tipo de error y nos lo imprimirá por
      // consola con el console.log(error)
      (error: any) => {
        console.log(error);
        Swal.fire(
          'FATAL ERROR 3',
          'Se ha producido un error en update Profe',
          'error'
        )
      }
    )
  }





}


