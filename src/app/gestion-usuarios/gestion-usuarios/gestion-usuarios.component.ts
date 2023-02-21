import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  formUsuarios: FormGroup;

  conexion = 'Usuarios';
  listadoUsuarios: any[] = [];

  constructor(private usuariosServicio: UsuarioService,
    private location: Location,
    private firebase: FormBuilder) {
      this.formUsuarios = this.firebase.group({
        email: ['', Validators.required],
        contraseña: ['', Validators.required],
        rol: ['', Validators.required]
      })
     }

    getAllUsuarios() {
      this.usuariosServicio.getAllUsuarios(this.conexion).subscribe(
        (resp: any) => {
          this.listadoUsuarios = [];
          resp.forEach((usuariosSnapshot: any) => {
            this.listadoUsuarios.push(
              {
                ...usuariosSnapshot.payload.doc.data(),
                documentId: usuariosSnapshot.payload.doc.id,
              }
            )
          });
        })
    }

  ngOnInit(): void {
    this.getAllUsuarios()
  }

  cancelar() {
    this.location.back();
  }

}
