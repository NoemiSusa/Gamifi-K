import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout-alumno',
  templateUrl: './logout-alumno.component.html',
  styleUrls: ['./logout-alumno.component.css']
})
export class LogoutAlumnoComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    Swal.fire({
      width: 600,
      heightAuto:true,
      background:"#EAEAEA",
      title: 'Estas seguro que quieres salir?',
      // text: "You won't be able to revert this!",
      // icon: 'warning',

      showCancelButton: true,
      cancelButtonText:"NO",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI',

    }).then((result) => {
      if (result.isConfirmed) {
        environment.vsesion="";
        this.router.navigate(['/inicio']);


        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
      else if (result.isConfirmed===false){
          this.router.navigate(['/perfilAlumno']);
      }

    })

  }

}
