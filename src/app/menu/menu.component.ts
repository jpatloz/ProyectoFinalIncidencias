import { Component, OnInit } from '@angular/core';
import { RolesService } from '../Servicio/roles.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  correo: any;
  rolUsuarios: any[] = [];

  constructor(
    private rolesServicio: RolesService
  ) {
    this.correo = this.rolesServicio.cogerCorreo();
   }

  getRoles(){
    this.rolesServicio.cogerRol(this.correo).subscribe(
      (resp: any) => {
        this.rolUsuarios = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.rolUsuarios.push(
            {...incidenciasSnapshot.payload.doc.data()}
          )
        });
      })
  }

  ngOnInit(): void {
    this.getRoles();
  }

}
