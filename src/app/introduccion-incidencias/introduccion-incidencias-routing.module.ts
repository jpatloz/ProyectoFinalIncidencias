import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias/introduccion-incidencias.component';

const routes: Routes = [
  {
    path:'', component: IntroduccionIncidenciasComponent
  },

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduccionIncidenciasRoutingModule { }
