import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ListarInfoService } from '../../services/listar-info.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Listar } from '../../interfaces/listar.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id;
  nombre;
  correo;
  asunto;
  mensaje;


  listarDoc: AngularFirestoreDocument<Listar>;
  constructor( private afs: AngularFirestore,
              private usuerService: ListarInfoService) { }

  displayedColumns: string[] = ['nombre', 'correo'];
  dataSource = new MatTableDataSource;

  @ViewChild
  (MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.listarDoc = this.afs.doc('usuarios/0zNh9emudI3vf9jXEtLVs');
    this.dataSource.paginator = this.paginator;
    this.consultar().subscribe ( data => {
      this.dataSource.data = data;
      console.log(data);
    });
  }


  cambiardatos(row) {
    this.nombre = row.nombre;
    this.correo = row.correo;
    this.asunto = row.asunto;
    this.mensaje = row.mensaje;
    this.id = row.id;
  }


  consultar() {
    return this.usuerService.consultar();
  }

  editarUsuario() {
    const usuario = {
      nombre: this.nombre,
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje

    };
    console.log(usuario);
    this.afs.doc( 'usuarios/' + this.id   ).set(usuario);

  }

  eliminarUsuario() {
    const usuario = {
      nombre: this.nombre,
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje

    };
    console.log(usuario);
    this.afs.doc( 'usuarios/' + this.id   ).delete();
  }

}
// const ELEMENT_DATA: Listar [] = [{nombre: this.nombre, correo: this.correo}];

// constructor(public listarInfoService: ListarInfoService) { }
