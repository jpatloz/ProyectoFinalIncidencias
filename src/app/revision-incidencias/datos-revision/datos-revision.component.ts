import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasServicioService } from 'src/app/Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-datos-revision',
  templateUrl: './datos-revision.component.html',
  styleUrls: ['./datos-revision.component.css']
})
export class DatosRevisionComponent implements OnInit {

  datosIncidencias = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: [null, Validators.required],
    estado: [null, Validators.required],
    revision: [false, Validators.required],
  });

  conexion = 'Incidencias';
  listadoIncidencias: any;
  documentId: any;

  constructor(private incidenciasServicio: IncidenciasServicioService,
    private form: FormBuilder,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get("documentId");
    this.incidenciasServicio.getIncidencia(this.conexion, this.documentId).subscribe((resp) => {
    this.listadoIncidencias = resp.payload.data();
    this.datosIncidencias.setValue(this.listadoIncidencias)
    })
  }

  actualizar() {
    this.listadoIncidencias = this.datosIncidencias.value;
    if (this.datosIncidencias.valid) {
      this.incidenciasServicio
        .actualizarIncidencia(
          this.conexion,
          this.documentId,
          this.listadoIncidencias
        )
        .then(
          () => {
            alert('Registro actualizado');
          },
          (error) => {
            alert('Ha ocurrido un error');
            console.log(error);
          }
        );
    } else {
      this.datosIncidencias.reset();
      alert('Complete los campos');
    }
  }

}
