import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private firebase: AngularFirestore, //Creamos la propiedad firebase
    private auth: Auth
  ) { }

   //Métodos para los roles

   cogerCorreo() {
    /*this.auth.currentUser
      .then((resp) => {
        console.log(resp);
        return resp?.email;
      })
      .catch((error) => console.log(error.message));
    return true;
    */
   const usuario = this.auth.currentUser;
   return usuario?.email?.toString();
  }

  cogerRol(correo: string) {
    return this.firebase.collection('Usuarios', (ref) => ref.where('correo', '==', correo)).snapshotChanges();
  }
}

