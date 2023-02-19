import { Component } from '@angular/core';
import { IncidenciasServicioService } from './Servicio/incidencias-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinalIncidencias';

  constructor(public incidenciasServicio: IncidenciasServicioService, private router: Router) {}

  cerrarSesion(){
    try{
      this.incidenciasServicio.cerrarSesion();
      this.router.navigate(['login']);
      alert("Has cerrado sesión");
    }catch(error){
      console.log(error);
    }
  }
}
