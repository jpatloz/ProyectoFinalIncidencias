import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';
import { DatosRevisionComponent } from './datos-revision/datos-revision.component';

const routes: Routes = [
  {
    path:'', component: RevisionIncidenciasComponent
  },

  { path: 'revision-incidencias/:documentId', component: DatosRevisionComponent},

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
