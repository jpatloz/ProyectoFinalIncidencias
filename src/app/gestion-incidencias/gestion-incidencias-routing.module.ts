import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { DatosIncidenciasComponent } from './datos-incidencias/datos-incidencias.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path:'', component: GestionIncidenciasComponent, ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  { path: 'detalles/:documentId', component: DatosIncidenciasComponent},

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
