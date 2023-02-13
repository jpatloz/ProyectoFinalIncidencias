import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { DatosIncidenciasComponent } from './datos-incidencias/datos-incidencias.component';

const routes: Routes = [
  {
    path:'gestion-incidencias', component: GestionIncidenciasComponent
  },

  {
    path: '**', redirectTo: 'gestion-incidencias', pathMatch: 'full'
  },

  { path: 'gestion-incidencias/:documentId', component: DatosIncidenciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
