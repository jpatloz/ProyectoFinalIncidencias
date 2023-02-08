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
  import('./gestion-incidencias/gestion-incidencias-routing.module').then(m=>m.GestionIncidenciasRoutingModule)
  },

  {
    path: 'introduccion-incidencias', loadChildren: () =>
  import('./introduccion-incidencias/introduccion-incidencias-routing.module').then(m=>m.IntroduccionIncidenciasRoutingModule)
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
