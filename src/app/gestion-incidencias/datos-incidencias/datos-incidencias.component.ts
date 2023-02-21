import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasServicioService } from 'src/app/Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-datos-incidencias',
  templateUrl: './datos-incidencias.component.html',
  styleUrls: ['./datos-incidencias.component.css'],
})
export class DatosIncidenciasComponent implements OnInit {
  datosIncidencias = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: [null, Validators.required],
    estado: [null, Validators.required]
  });

  conexion = 'Incidencias';
  listadoIncidencias: any;
  documentId: any;

  constructor(
    private incidenciasServicio: IncidenciasServicioService,
    private ruta: ActivatedRoute,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId');
    this.incidenciasServicio
      .getIncidencia(this.conexion, this.documentId)
      .subscribe((resp: any) => {
        this.listadoIncidencias = resp.payload.data();
        this.datosIncidencias.setValue(this.listadoIncidencias);
      });
  }

  editar() {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.incidenciasServicio.getAll(this.conexion).subscribe((resp: any) => {
      this.datosIncidencias.setValue(resp.payload.data());
    });
  }

  actualizar() {
    this.listadoIncidencias = this.datosIncidencias.value;

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


  borrar() {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.incidenciasServicio.borrarIncidencia(this.conexion, this.documentId);
    this.datosIncidencias.reset;
  }

  cancelar() {
    this.datosIncidencias.reset();
  }
}
