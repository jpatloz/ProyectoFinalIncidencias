import { Component, OnInit } from '@angular/core';
import { IncidenciasServicioService } from '../Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  correo: any = this.incidenciasServicio.cogerCorreo()?.toString();
  rolUsuarios: any[] = [];

  constructor(
    private incidenciasServicio: IncidenciasServicioService
  ) { }

  ngOnInit(): void {

    this.getRoles();
  }

  
  getRoles(){
    this.incidenciasServicio.cogerRol(this.correo).subscribe(
      (resp: any) => {
        this.rolUsuarios = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.rolUsuarios.push(
            
              ...incidenciasSnapshot.payload.doc.data()            
            
          )
        });
      })
  }


}
