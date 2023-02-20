import { Component } from '@angular/core';
import { IncidenciasServicioService } from './Servicio/incidencias-servicio.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from './Servicio/usuario.service';
import { RolesService } from './Servicio/roles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinalIncidencias';

  correo: any;
  usuarioAutenticado = false;

  constructor(private rolesServicio: RolesService,
    private usuarioServicio: UsuarioService,
     private router: Router,
     private auth: AngularFireAuth) {

    this.auth.authState.subscribe((usuario) => {
      if (usuario) {
        this.correo = this.correo;
      }
      this.auth.authState.subscribe(usuario => {
        this.usuarioAutenticado = !!usuario;
      });

    });

    this.correo = this.rolesServicio.cogerCorreo();
  }

  cerrarSesion(){
    try{
      this.usuarioServicio.cerrarSesion();
      this.router.navigate(['login']);
      alert("Has cerrado sesión");
    }catch(error){
      console.log(error);
    }
  }
}
