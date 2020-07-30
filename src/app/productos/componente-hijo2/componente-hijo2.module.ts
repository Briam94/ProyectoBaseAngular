import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from './componente-hijo2.routing';
import { ComponenteHijo2Component } from './componente-hijo2.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ROUTING,
    MatButtonModule
  ],
  declarations: [ComponenteHijo2Component]
})
export class ComponenteHijo2Module { }
