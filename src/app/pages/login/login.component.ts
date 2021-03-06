import { Component, OnInit } from '@angular/core';
// import { AuthService } from './core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../../interfaces/usuario.interface';
import { ListarInfoService } from '../../services/listar-info.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


// variables formulario
   nombreConctacto;
   correo;
   asunto;
   mensaje;
   nombreLogin;

  usuarioDoc: AngularFirestoreDocument<Usuario>;

  constructor( private afs: AngularFirestore,
              private iniciar: ListarInfoService,
              private router: Router ) { }

  ngOnInit() {
    this.usuarioDoc = this.afs.doc('usuarios/0zNh9emudI3vf9jXEtLVs');

    this.listUser().subscribe( resp => {
      console.log(resp);

    });
    // this.usuarios = this.usuarioDoc.valueChanges();
  }


  addUser() {
    const usuario = {
      nombre: this.nombreConctacto,
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje

    };
    console.log(usuario);
    this.afs.collection( 'usuarios'  ).add(usuario);

  }


  listUser() {

    return this.afs.collection( 'usuarios'  ).valueChanges();
  }

  ingresar() {
    this.iniciar.login().then(() => {
      this.router.navigate(['/table']);
    });

  }


}
