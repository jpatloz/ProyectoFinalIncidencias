import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasServicioService } from 'src/app/Servicio/incidencias-servicio.service';

@Component({
  selector: 'app-datos-incidencias',
  templateUrl: './datos-incidencias.component.html',
  styleUrls: ['./datos-incidencias.component.css']
})
export class DatosIncidenciasComponent implements OnInit {

  datosIncidencias = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: ['', Validators.required],
    estado: ['', Validators.required],
    revisada: ['', Validators.required],
    }
  )

  conexion = 'Incidencias';
  listadoIncidencias: any;
  id: any;

  constructor(private incidenciasServicio: IncidenciasServicioService,
    private ruta: ActivatedRoute,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.incidenciasServicio.getIncidencia('Incidencias',this.id).subscribe((resp: any) => {
    this.listadoIncidencias = resp.payload.data();
    this.datosIncidencias.setValue(this.listadoIncidencias);
    });
  }

  editar() {
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    this.incidenciasServicio.getAll(this.conexion).subscribe((resp: any) => {
      this.datosIncidencias.setValue(resp.payload.data());
    });
  }

  actualizar(){
    this.listadoIncidencias = this.datosIncidencias.value;

    if (this.datosIncidencias.valid) {

      this.incidenciasServicio.actualizarIncidencia("Incidencias",this.id, this.listadoIncidencias).then(
        () => {
          alert("Registro actualizado");
        },
        (error) => {
          alert("Ha ocurrido un error");
          console.log(error);
        }
      );

    }else{
      this.datosIncidencias.reset();
      alert("Complete los campos");
    }
  }

  borrar() {
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    this.incidenciasServicio.borrarIncidencia(this.conexion, this.id);
  }
}
