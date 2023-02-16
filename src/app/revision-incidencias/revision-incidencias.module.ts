import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';
import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { DatosRevisionComponent } from './datos-revision/datos-revision.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    DatosRevisionComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,    
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class RevisionIncidenciasModule { }
