import { Component, OnInit } from '@angular/core';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {

  conexion = 'Incidencias';
  listadoIncidencias: any[] = [];
  documentId: any;

  constructor(private incidenciasServicio: IncidenciasServicioService,
    private location: Location ) {}

  ngOnInit(): void {
    this.getIncidencias;
  }

  getIncidencias() {
    this.incidenciasServicio
      .getAll(this.conexion)
      .subscribe((resp: any) => {
        this.listadoIncidencias = [];
        resp.forEach((data: any) => {
          this.listadoIncidencias.push({
            ...data.payload.doc.data(),
            documentId: data.payload.doc.id,
          });
        });
      });
  }

  getIncidenciasRevisadas() {
    this.incidenciasServicio
      .estadoIncidencia(this.conexion, "revisada")
      .subscribe((resp: any) => {
        this.listadoIncidencias = [];
        resp.forEach((data: any) => {
          this.listadoIncidencias.push({
            ...data.payload.doc.data(),
            documentId: data.payload.doc.id,
          });
        });
      });
  }

  getIncidenciasNoRevisadas() {
    this.incidenciasServicio
      .estadoIncidencia(this.conexion, "noRevisada")
      .subscribe((resp: any) => {
        this.listadoIncidencias = [];
        resp.forEach((data: any) => {
          this.listadoIncidencias.push({
            ...data.payload.doc.data(),
            documentId: data.payload.doc.id,
          });
        });
      });
  }

  cancelar() {
    this.location.back();
  }

}
