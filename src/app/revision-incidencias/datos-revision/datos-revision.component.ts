import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasServicioService } from 'src/app/Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-datos-revision',
  templateUrl: './datos-revision.component.html',
  styleUrls: ['./datos-revision.component.css']
})
export class DatosRevisionComponent implements OnInit {

  datosRevision = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: ['', Validators.required],
    estado: ['', Validators.required],
    revision: ['', Validators.required]
  });

  conexion = 'Incidencias';
  listadoIncidencias: any;
  documentId: any;

  constructor(   private incidenciasServicio: IncidenciasServicioService,
    private ruta: ActivatedRoute,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId');
    this.incidenciasServicio
      .getIncidencia(this.conexion, this.documentId)
      .subscribe((resp: any) => {
        this.listadoIncidencias = resp.payload.data();
        this.datosRevision.setValue(this.listadoIncidencias);
      });
  }

  actualizar() {
    this.listadoIncidencias = this.datosRevision.value;

      this.incidenciasServicio.actualizarIncidencia(this.conexion,this.documentId, this.listadoIncidencias).then(
        () => {
          alert("Incidencia actualizada con exito");
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      );
  }

}
