import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ListarInfoService } from '../../services/listar-info.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Listar } from '../../interfaces/listar.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  nombre;
  correo;
  listarDoc: AngularFirestoreDocument<Listar>;
  constructor( private afs: AngularFirestore) { }

  displayedColumns: string[] = ['nombre', 'correo'];
  dataSource = new MatTableDataSource;

  @ViewChild
  (MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.listarDoc = this.afs.doc('usuarios/0zNh9emudI3vf9jXEtLVs');
    this.dataSource.paginator = this.paginator;
    this.consultar().subscribe ( resp => {
      this.dataSource.data = resp;
      console.log(resp);
    });
  }

  consultar() {
    return this.afs.collection('usuarios').valueChanges();
  }
  editar(){

  }

}
// const ELEMENT_DATA: Listar [] = [{nombre: this.nombre, correo: this.correo}];

// constructor(public listarInfoService: ListarInfoService) { }
