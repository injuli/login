import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators/map';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ListarInfoService {

  constructor(  private afs: AngularFirestore,
                public afAuth: AngularFireAuth ) {
    this.cargarUsurios();
   }

   private cargarUsurios() {

   }

   consultar() {
    return this.afs.collection( 'usuarios' ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ... data };
      }))
    );
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
