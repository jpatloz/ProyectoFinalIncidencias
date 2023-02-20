import { Component, OnInit } from '@angular/core';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {
  listadoIncidencias: any[] = [];
  conexion: string = 'Incidencias';

  constructor(private incidenciasServicio: IncidenciasServicioService) {}

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
}
