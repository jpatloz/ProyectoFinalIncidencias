import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';

const routes: Routes = [
  {
    path:'revision-incidencias', component: RevisionIncidenciasComponent
  },

  {
    path: '**', redirectTo: 'revision-incidencias', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
