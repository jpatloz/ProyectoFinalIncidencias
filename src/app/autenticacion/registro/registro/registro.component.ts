import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidenciasServicioService } from '../../../Servicio/incidencias-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(
    private incidenciasServicio: IncidenciasServicioService,
    private router: Router) {
    this.formRegistro = new FormGroup({
      correo: new FormControl(),
      contraseña: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.incidenciasServicio.registro(this.formRegistro.value).then(response => {
      console.log(response);
      this.router.navigate(['login']);
    }).catch(error => console.log(error));
  }

}
