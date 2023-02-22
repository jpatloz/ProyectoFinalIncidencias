import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';


@NgModule({
  declarations: [
    GestionUsuariosComponent,
    DatosUsuariosComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionUsuariosModule { }
