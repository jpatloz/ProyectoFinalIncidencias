import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias/introduccion-incidencias.component';
import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IntroduccionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class IntroduccionIncidenciasModule { }
