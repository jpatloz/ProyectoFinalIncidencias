import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidenciasServicioService } from '../../../Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private incidenciasServicio: IncidenciasServicioService
  ) {
    this.formLogin = new FormGroup({
      correo: new FormControl(),
      contraseña: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.incidenciasServicio.login(this.formLogin.value)
    .then((response) => console.log(response), ()=> {alert("Has iniciado sesión correctamente")} )
    .catch(error => console.log(error));
  }

}
