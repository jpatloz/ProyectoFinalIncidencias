import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent //Esta ruta nos dirige a la página principal
  },

  {
    path: 'revision-incidencias', loadChildren: () =>
  import('./revision-incidencias/revision-incidencias.module').then(m=>m.RevisionIncidenciasModule)
  },

  {
    path: 'gestion-incidencias', loadChildren: () =>
  import('./gestion-incidencias/gestion-incidencias.module').then(m=>m.GestionIncidenciasModule)
  },

  {
    path: 'introduccion-incidencias', loadChildren: () =>
  import('./introduccion-incidencias/introduccion-incidencias.module').then(m=>m.IntroduccionIncidenciasModule)
  },

  {
    path: 'login', loadChildren: () =>
  import('./autenticacion/login/login.module').then(m=>m.LoginModule)
  },

  {
    path: 'registro', loadChildren: () =>
  import('./autenticacion/registro/registro.module').then(m=>m.RegistroModule)
  },

  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
