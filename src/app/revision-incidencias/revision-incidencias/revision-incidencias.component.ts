import { Component, OnInit } from '@angular/core';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {
  listadoIncidencias: any[] = [];
  revisado: any[] = [];
  noRevisado: any[] = [];
  conexion: string = 'Incidencias';
  condicion?: string = '';

  constructor(private incidenciasServicio: IncidenciasServicioService) {}

  ngOnInit(): void {}

  getIncidencias() {
    this.incidenciasServicio
      .getAll(this.conexion)
      .subscribe((incidencias: any) => {
        incidencias.forEach((data: any) => {
          this.listadoIncidencias.push({
            documentId: data.payload.doc.documentId,
            data: data.payload.doc.data(),
          });
        });
      });
  }

  getIncidenciasRevisadas() {
    this.incidenciasServicio
      .estadoIncidencia(this.conexion, true)
      .subscribe((incidencias: any) => {
        incidencias.foreach((data: any) => {
          this.revisado.push({
            documentId: data.payload.doc.documentId,
            data: data.payload.doc.data(),
          });
        });
      });
  }

  getIncidenciasNoRevisadas() {
    this.incidenciasServicio
      .estadoIncidencia(this.conexion, false)
      .subscribe((incidencias: any) => {
        incidencias.forEach((data: any) => {
          this.noRevisado.push({
            documentId: data.payload.doc.documentId,
            data: data.payload.doc.data(),
          });
        });
      });
  }
}
