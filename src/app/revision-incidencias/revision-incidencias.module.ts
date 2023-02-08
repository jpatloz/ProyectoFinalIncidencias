import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';
import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';



@NgModule({
  declarations: [
    RevisionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule
  ]
})
export class RevisionIncidenciasModule { }
