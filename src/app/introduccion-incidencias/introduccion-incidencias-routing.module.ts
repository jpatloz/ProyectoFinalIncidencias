import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias/introduccion-incidencias.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path:'', component: IntroduccionIncidenciasComponent, ...canActivate(() => redirectUnauthorizedTo(['login']))
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
