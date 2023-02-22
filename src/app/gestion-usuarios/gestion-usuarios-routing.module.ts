import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';

const routes: Routes = [
  {
    path:'', component: GestionUsuariosComponent, ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  { path: 'detalles/:documentId', component: DatosUsuariosComponent},

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsuariosRoutingModule { }
