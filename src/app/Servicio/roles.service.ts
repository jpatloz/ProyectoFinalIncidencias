import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private firebase: AngularFirestore, //Creamos la propiedad firebase
    private auth: AngularFireAuth
  ) { }

   //Métodos para los roles

   cogerCorreo() {
    return this.auth.currentUser;

    //return true;
  }

  cogerRol(email: string) {
    return this.firebase.collection("Usuarios", ref => ref.where('email', '==', email)).valueChanges();
  }
}

