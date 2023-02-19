import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css']
})
export class IntroduccionIncidenciasComponent implements OnInit {
  datosIncidencias = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: [null, Validators.required],
    estado: [null, Validators.required],
    revision: [false, Validators.required],
    }
  )

  conexion = 'Incidencias';
  nuevo: boolean = true;
  documentId: any;
  correo: any = this.incidenciasServicio.cogerCorreo();
  rolUsuarios: any[] = [];

  constructor(
    private form: FormBuilder,
    private incidenciasServicio: IncidenciasServicioService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nuevo = false;
        console.log('editar');
        // Mostramos la incidencia en el formulario
        this.incidenciasServicio.getIncidencia(this.documentId, this.conexion).subscribe(
          (resp: any) => {
            this.datosIncidencias.setValue(resp.payload.data());
          }
        )
      }else{
        console.log('nuevo');
        this.nuevo=true;
      }
    })
  }

  guardar() {
    if(this.nuevo){
      this.incidenciasServicio.crearIncidencia(this.datosIncidencias.value, this.conexion).then(
        () => {
          alert('Incidencia creada correctamente');
          this.datosIncidencias.reset;
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }
  }
  
  cancelar() {
    this.datosIncidencias.reset();
  }
}
