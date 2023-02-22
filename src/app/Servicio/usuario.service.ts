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

  registro({ email, contraseña }: any) {
    return this.auth.createUserWithEmailAndPassword(email, contraseña);
  }

  login({ email, contraseña }: any) {
    return this.auth.signInWithEmailAndPassword(email, contraseña);
  }

  cerrarSesion() {
    this.auth.signOut();
  }

  crearUsuarios(conexion: string, data: any) {
    return this.firebase.collection(conexion).add(data);
  }

  getAllUsuarios(conexion: string){
    return this.firebase.collection(conexion).snapshotChanges(); //Método para leer todos los usuarios
  }

  getUsuario(conexion: string, documentId: string) {
    return this.firebase.collection(conexion).doc(documentId).snapshotChanges(); //Método para leer un usuario
  }

  actualizarUsuario(conexion: string, documentId: string, data: any) {
    return this.firebase.collection(conexion).doc(documentId).update(data); //Método para actualizar la información de una incidencia
  }

  borrarUsuario(conexion: string, documentId: string) {
    return this.firebase.collection(conexion).doc(documentId).delete(); //Método para dar borrar una incidencia
  }

}
