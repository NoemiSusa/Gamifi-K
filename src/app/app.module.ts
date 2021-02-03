import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ComponentesComponent } from './componentes/componentes.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { LoginProfesorComponent } from './componentes/profesor/login-profesor/login-profesor.component';
import { RegistroProfesorComponent } from './componentes/profesor/registro-profesor/registro-profesor.component';
import { PerfilProfesorComponent } from './componentes/profesor/perfil-profesor/perfil-profesor.component';
import { LogoutProfesorComponent } from './componentes/profesor/logout-profesor/logout-profesor.component';
import { LoginAlumnoComponent } from './componentes/alumno/login-alumno/login-alumno.component';
import { RegistroAlumnoComponent } from './componentes/alumno/registro-alumno/registro-alumno.component';
import { PerfilAlumnoComponent } from './componentes/alumno/perfil-alumno/perfil-alumno.component';
import { LogoutAlumnoComponent } from './componentes/alumno/logout-alumno/logout-alumno.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    ProfesorComponent,
    AlumnoComponent,
    LoginProfesorComponent,
    RegistroProfesorComponent,
    PerfilProfesorComponent,
    LogoutProfesorComponent,
    LoginAlumnoComponent,
    RegistroAlumnoComponent,
    PerfilAlumnoComponent,
    LogoutAlumnoComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGroup,
    FormsModule,
    SweetAlert2LoaderService,
    SweetAlert2Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
