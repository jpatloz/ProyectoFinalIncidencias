import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';

const routes: Routes = [
  {
    path:'gestion-incidencias', component: GestionIncidenciasComponent
  },

  {
    path: '**', redirectTo: 'gestion-incidencias', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
