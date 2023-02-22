import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasServicioService } from 'src/app/Servicio/incidencias-servicio.service';
import { UsuarioService } from '../../Servicio/usuario.service';

@Component({
  selector: 'app-datos-usuarios',
  templateUrl: './datos-usuarios.component.html',
  styleUrls: ['./datos-usuarios.component.css']
})
export class DatosUsuariosComponent implements OnInit {

  datosUsuarios = this.form.group({
    email: ['', Validators.required],
    contraseña: ['', Validators.required],
    rol: ['', Validators.required]
  });

  conexion = 'Usuarios';
  listadoUsuarios: any;
  documentId: any;

  constructor(
    private usuariosServicio: UsuarioService,
    private ruta: ActivatedRoute,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId');
    this.usuariosServicio
      .getUsuario(this.conexion, this.documentId)
      .subscribe((resp: any) => {
        this.listadoUsuarios = resp.payload.data();
        this.datosUsuarios.setValue(this.listadoUsuarios);
      });
  }

  editar() {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.usuariosServicio.getAllUsuarios(this.conexion).subscribe((resp: any) => {
      this.datosUsuarios.setValue(resp.payload.data());
    });
  }

  actualizar() {
    this.listadoUsuarios = this.datosUsuarios.value;

      this.usuariosServicio.actualizarUsuario(this.conexion,this.documentId, this.listadoUsuarios).then(
        () => {
          alert("Usuario actualizado con exito");
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      );
  }

  borrar() {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.usuariosServicio.borrarUsuario(this.conexion, this.documentId);
    this.datosUsuarios.reset;
  }

  cancelar() {
    this.datosUsuarios.reset();
  }

}
