import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../Servicio/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router,
    private firebase: FormBuilder
  ) {
    this.formLogin = this.firebase.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    try{
      this.usuarioServicio.login(this.formLogin.value).then(
        () => {
          this.router.navigate(['menu']);
          alert("Has iniciado sesión");
        }
      );

    }catch(error){
      console.log(error);
    }
  }
  }


