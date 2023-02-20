import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UsuarioService } from '../../../Servicio/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  conexion: string = 'Usuarios';
  formRegistro: FormGroup;

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router,
    private firebase: FormBuilder)
    {
    this.formRegistro = this.firebase.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      rol: new FormControl('Normal')
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usuarioServicio.registro(this.formRegistro.value).then(response => {
      console.log(response);
      this.usuarioServicio.crearUsuarios(this.conexion, this.formRegistro.value);
      this.router.navigate(['login']);
    }).catch(error => console.log(error));
  }

}
