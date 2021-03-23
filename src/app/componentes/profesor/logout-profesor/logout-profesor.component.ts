import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { Routes, RouterModule, RouterLink ,Router} from '@angular/router';
import { maxHeaderSize } from 'http';

@Component({
  selector: 'app-logout-profesor',
  templateUrl: './logout-profesor.component.html',
  styleUrls: ['./logout-profesor.component.css']
})
export class LogoutProfesorComponent implements OnInit {


  constructor(
// routerLink: Routes;
private router: Router,
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
          this.router.navigate(['/perfilProfesor']);
      }

    })

  }



}
