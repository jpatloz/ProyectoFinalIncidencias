import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidenciasServicioService } from '../../../Servicio/incidencias-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private incidenciasServicio: IncidenciasServicioService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      correo: new FormControl(),
      contraseña: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    try{
      this.incidenciasServicio.login(this.formLogin.value);
      this.router.navigate(['menu']);
      alert("Has iniciado sesión");
    }catch(error){
      console.log(error);
    }
  }
  }


