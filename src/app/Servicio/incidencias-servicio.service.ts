import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
//import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServicioService {

  constructor(
    private firebase: AngularFirestore, //Creamos la propiedad firebase
    private auth: Auth
  ) { }

    //Métodos para los componentes de gestión, revisión e introducción

  getAll(conexion: string) {
    return this.firebase.collection(conexion).snapshotChanges(); //Método para leer todas las incidencias
  }

  getIncidencia(conexion: string, documentId: string){
    return this.firebase.collection(conexion).doc(documentId).snapshotChanges(); //Método para leer una incidencia
  }

  crearIncidencia(data: any, conexion: string){
    return this.firebase.collection(conexion).add(data); //Método para añadir una nueva incidencia
  }

  actualizarIncidencia(conexion: string, documentId: string, data: any) {
    return this.firebase.collection(conexion).doc(documentId).update(data); //Método para actualizar la información de una incidencia
  }

  borrarIncidencia(conexion: string, documentId: string){
    return this.firebase.collection(conexion).doc(documentId).delete(); //Método para dar borrar una incidencia
  }

  estadoIncidencia(conexion: string, estado: string){
    return this.firebase.collection(conexion, a => a.where('estado', '==', estado)).snapshotChanges(); //Método para comprobar el estado de una incidencia
  }
    //Métodos para login y registro

    registro({correo, contraseña}: any){
      return createUserWithEmailAndPassword(this.auth, correo, contraseña);
    }

    login({correo, contraseña}: any){
      return signInWithEmailAndPassword(this.auth, correo, contraseña);
    }

  //Métodos para los roles

  

}
