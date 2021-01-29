import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InicioComponent } from './inicio/inicio.component';importamos los componentes


const routes: Routes = [
  // { path: 'inicio', component: InicioComponent }, aqui vamos a poner las rutas de los componentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
