import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionUsuariosComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionUsuariosModule { }
