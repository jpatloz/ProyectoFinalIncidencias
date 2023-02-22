import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DatosRevisionComponent } from './datos-revision/datos-revision.component';

const routes: Routes = [
  {
    path:'', component: RevisionIncidenciasComponent, ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  { path: 'detalles/:documentId', component: DatosRevisionComponent},

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
