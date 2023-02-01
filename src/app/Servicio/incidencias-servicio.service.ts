import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServicioService {

  conexion: any = this.firebase.collection('Incidencias'); //Método para la conexión con firebase

  constructor(
    private firebase: AngularFirestore //Creamos la propiedad firebase para hacer el método de conexión
  ) { }

  getAll() {
    return this.conexion.snapshotChanges(); //Método para leer todas las incidencias
  }

  getIncidencia(documentId: string){
    return this.conexion.doc(documentId).snapshotChanges(); //Método para leer una incidencia
  }

  crearIncidencia(data: any){
    return this.conexion.add(data); //Método para añadir una nueva incidencia
  }

  actualizarIncidencia(documentId: string, data: any) {
    return this.conexion.doc(documentId).update(data); //Método para actualizar la información de una incidencia
  }

  borrarIncidencia(documentId: string){
    return this.conexion.doc(documentId).delete(); //Método para dar borrar una incidencia
  }
}
