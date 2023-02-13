import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServicioService {

  constructor(
    private firebase: AngularFirestore, //Creamos la propiedad firebase para hacer el método de conexión
    //private auth: Auth
  ) { }

  getAll(conexion: string) {
    return this.firebase.collection(conexion).snapshotChanges(); //Método para leer todas las incidencias
  }

  getIncidencia(documentId: string, conexion: string){
    return this.firebase.collection(conexion).doc(documentId).snapshotChanges(); //Método para leer una incidencia
  }

  crearIncidencia(data: any, conexion: string){
    return this.firebase.collection(conexion).add(data); //Método para añadir una nueva incidencia
  }

  actualizarIncidencia(documentId: string, data: any, conexion: string) {
    return this.firebase.collection(conexion).doc(documentId).update(data); //Método para actualizar la información de una incidencia
  }

  borrarIncidencia(documentId: string, conexion: string){
    return this.firebase.collection(conexion).doc(documentId).delete(); //Método para dar borrar una incidencia
  }
}
