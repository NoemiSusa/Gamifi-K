import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { EditPerfilComponent } from './componentes/profesor/perfil-profesor/edit-perfil/edit-perfil.component';
import { CambiarContraProfesorComponent } from './componentes/profesor/perfil-profesor/edit-perfil/cambiar-contra-profesor/cambiar-contra-profesor.component';
import { EditPerfilAlComponent } from './componentes/alumno/perfil-alumno/edit-perfil-al/edit-perfil-al.component';
import { CambiarContraAlComponent } from './componentes/alumno/perfil-alumno/edit-perfil-al/cambiar-contra-al/cambiar-contra-al.component';
import { DesktopComponent } from './componentes/inicio/desktop/desktop.component';
import { GenerarRankingComponent } from './componentes/profesor/generar-ranking/generar-ranking.component';
import { ListarRankingsComponent } from './componentes/profesor/listar-rankings/listar-rankings.component';
import { EditarRankingComponent } from './componentes/profesor/listar-rankings/editar-ranking/editar-ranking.component';
import { VistaRankingComponent } from './componentes/profesor/listar-rankings/vista-ranking/vista-ranking.component';
import { DesktopAlumnoComponent } from './componentes/inicio/desktop-alumno/desktop-alumno.component';
import { ListarRankingsAlumnoComponent } from './componentes/alumno/listar-rankings-alumno/listar-rankings-alumno.component';
import { VistaRankingsAlumnoComponent } from './componentes/alumno/listar-rankings-alumno/vista-rankings-alumno/vista-rankings-alumno.component';


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
    EditPerfilComponent,
    CambiarContraProfesorComponent,
    EditPerfilAlComponent,
    CambiarContraAlComponent,
    DesktopComponent,
    GenerarRankingComponent,
    ListarRankingsComponent,
    EditarRankingComponent,
    VistaRankingComponent,
    DesktopAlumnoComponent,
    ListarRankingsAlumnoComponent,
    VistaRankingsAlumnoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
