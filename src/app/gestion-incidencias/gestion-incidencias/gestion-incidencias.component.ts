import { Component, OnInit } from '@angular/core';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {
  constructor(private incidenciasServicio: IncidenciasServicioService) { }
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  conexion = 'Incidencias';
  listadoIncidencias: any[] = [];
  documentId: string = '';

  getTodosLosClientes() {
    this.incidenciasServicio.getAll(this.conexion).subscribe(
      (resp: any) => {
        this.listadoIncidencias = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.listadoIncidencias.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })
  }



  ngOnInit() {
    this.getTodosLosClientes();
  }

}
