import { Profesor } from 'src/app/models/profesor.model';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  sesion: string = environment.vsesion;

  constructor() { }

  ngOnInit(): void {
  }

}
