import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { DatosIncidenciasComponent } from './datos-incidencias/datos-incidencias.component';

const routes: Routes = [
  {
    path:'', component: GestionIncidenciasComponent
  },

  { path: 'detalles/:id', component: DatosIncidenciasComponent},
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
