import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private firebase: AngularFirestore, //Creamos la propiedad firebase
    private auth: AngularFireAuth
  ) { }

   //Métodos para login y registro

   registro({ correo, contraseña }: any) {
    return this.auth.createUserWithEmailAndPassword(correo, contraseña);
  }

  login({ correo, contraseña }: any) {
    return this.auth.signInWithEmailAndPassword(correo, contraseña);
  }

  cerrarSesion() {
    this.auth.signOut();
  }

  crearUsuarios(conexion: string, data: any) {
    return this.firebase.collection(conexion).add(data);
  }
}
