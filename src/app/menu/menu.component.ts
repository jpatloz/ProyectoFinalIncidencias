import { Component, OnInit } from '@angular/core';
import { RolesService } from '../Servicio/roles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  rolUsuarios: any[] = [];

  constructor(private rolesServicio: RolesService,
    private router: Router) {}

  getCorreo() {
    this.rolesServicio
      .cogerCorreo()
      .then((resp) => {
        console.log(resp?.email);
        if(resp?.email == null){
          this.router.navigate(['login']);
        }else{
        this.getRoles(resp?.email);
        }
      })
      .catch((error) => console.log(error.message));
  }

  getRoles(correo: any) {
    this.rolesServicio.cogerRol(correo).subscribe((resp: any) => {
      console.log(resp[0].email);
      this.rolUsuarios = [];
      resp.forEach((incidenciasSnapshot: any) => {
        this.rolUsuarios.push({ ...incidenciasSnapshot });
      });
    });
  }

  ngOnInit(): void {
    this.getCorreo();
  }
}
