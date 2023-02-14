import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { DatosIncidenciasComponent } from './datos-incidencias/datos-incidencias.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    DatosIncidenciasComponent
  ],

  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class GestionIncidenciasModule { }
