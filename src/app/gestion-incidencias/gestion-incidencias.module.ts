import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';



@NgModule({
  declarations: [
    GestionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule
  ]
})
export class GestionIncidenciasModule { }
