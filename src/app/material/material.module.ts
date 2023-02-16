import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const modulos = [MatButtonToggleModule];

@NgModule({
  imports: modulos,
  exports: modulos
})
export class MaterialModule { }
