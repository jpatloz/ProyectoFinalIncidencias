import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IncidenciasServicioService } from '../../Servicio/incidencias-servicio.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css']
})
export class IntroduccionIncidenciasComponent implements OnInit {
  datosIncidencias: FormGroup = this.form.group({
    id: ['', Validators.required],
    fecha: ['', Validators.required],
    lugarIncidencia: ['', Validators.required],
    descIncidencia: ['', Validators.required],
    solucion: ['', Validators.required],
    estado: ['', Validators.required],
    revision: ['', Validators.required],
    }
  )


  nuevo: boolean = false;
  documentId: any;

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
        // Mostramos el portero en el formulario
        this.incidenciasServicio.getIncidencia(this.documentId).subscribe(
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

      // guardamos datos con crearPortero
      this.incidenciasServicio.crearIncidencia(this.datosIncidencias.value).then(
        () => {
          alert('Incidencia creada, enhorabuena');
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }else{

      // llamamos a actualizarPortero
      this.incidenciasServicio.actualizarIncidencia(this.documentId, this.datosIncidencias.value).then(
        () => {
          alert('Incidencia actualizado');
        },
        (error: any) => {
          alert('Error: ' + error);
        }
      )
    }
  }

  cancelar() {
    this.datosIncidencias.reset();
  }
}
