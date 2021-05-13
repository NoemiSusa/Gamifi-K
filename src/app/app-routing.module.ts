import { EditPerfilComponent } from './componentes/profesor/perfil-profesor/edit-perfil/edit-perfil.component';
import { CambiarContraProfesorComponent } from './componentes/profesor/perfil-profesor/edit-perfil/cambiar-contra-profesor/cambiar-contra-profesor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { LoginAlumnoComponent } from './componentes/alumno/login-alumno/login-alumno.component';
import { LogoutAlumnoComponent } from './componentes/alumno/logout-alumno/logout-alumno.component';
import { PerfilAlumnoComponent } from './componentes/alumno/perfil-alumno/perfil-alumno.component';
import { RegistroAlumnoComponent } from './componentes/alumno/registro-alumno/registro-alumno.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginProfesorComponent } from './componentes/profesor/login-profesor/login-profesor.component';
import { LogoutProfesorComponent } from './componentes/profesor/logout-profesor/logout-profesor.component';
import { PerfilProfesorComponent } from './componentes/profesor/perfil-profesor/perfil-profesor.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { RegistroProfesorComponent } from './componentes/profesor/registro-profesor/registro-profesor.component';
import { CambiarContraAlComponent } from './componentes/alumno/perfil-alumno/edit-perfil-al/cambiar-contra-al/cambiar-contra-al.component';
import { EditPerfilAlComponent } from './componentes/alumno/perfil-alumno/edit-perfil-al/edit-perfil-al.component';
import { DesktopComponent } from './componentes/inicio/desktop/desktop.component';
import { GenerarRankingComponent } from './componentes/profesor/generar-ranking/generar-ranking.component';
import { ListarRankingsComponent } from './componentes/profesor/listar-rankings/listar-rankings.component';
import { EditarRankingComponent } from './componentes/profesor/listar-rankings/editar-ranking/editar-ranking.component';
import { VistaRankingComponent } from './componentes/profesor/listar-rankings/vista-ranking/vista-ranking.component';
import { DesktopAlumnoComponent } from './componentes/inicio/desktop-alumno/desktop-alumno.component';
import { ListarRankingsAlumnoComponent } from './componentes/alumno/listar-rankings-alumno/listar-rankings-alumno.component';
import { VistaRankingsAlumnoComponent } from './componentes/alumno/listar-rankings-alumno/vista-rankings-alumno/vista-rankings-alumno.component';




const routes: Routes = [{path: '',pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent }, //aqui vamos a poner las rutas de los componentes
  { path: 'profesor', component: ProfesorComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'loginProfesor', component: LoginProfesorComponent },
  { path: 'loginAlumno', component: LoginAlumnoComponent },
  { path: 'registroProfesor', component: RegistroProfesorComponent },
  { path: 'registroAlumno', component: RegistroAlumnoComponent },
  { path: 'perfilProfesor', component: PerfilProfesorComponent },
  { path: 'perfilAlumno', component: PerfilAlumnoComponent },
  { path: 'logoutProfesor', component: LogoutProfesorComponent },
  { path: 'logoutAlumno', component: LogoutAlumnoComponent},
  { path: 'editPerfil' , component: EditPerfilComponent},
  { path: 'editPerfilAl' , component:EditPerfilAlComponent},
  { path: 'cambiarContraProfesor', component: CambiarContraProfesorComponent},
  { path: 'cambiarContraAl', component: CambiarContraAlComponent} ,
  { path: 'desktop', component: DesktopComponent},
  { path: 'generarRanking', component: GenerarRankingComponent},
  { path: 'listarRankings', component: ListarRankingsComponent},
  { path: 'editarRanking', component: EditarRankingComponent},
  { path: 'vistaRanking', component: VistaRankingComponent},
  { path: 'desktopAlumno', component: DesktopAlumnoComponent},
  { path: 'listarRankingsAlumno', component: ListarRankingsAlumnoComponent},
  { path: 'vistaRankingsAlumno', component: VistaRankingsAlumnoComponent},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
