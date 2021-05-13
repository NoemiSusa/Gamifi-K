import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-desktop-alumno',
  templateUrl: './desktop-alumno.component.html',
  styleUrls: ['./desktop-alumno.component.css']
})
export class DesktopAlumnoComponent implements OnInit {
  sesion: string = environment.vsesion;
  constructor() { }

  ngOnInit(): void {
  }

}
