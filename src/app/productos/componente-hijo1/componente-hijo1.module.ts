import { MouseOverModule } from './../../core/layout/directives/mouse-over.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from './componente-hijo1.routing';
import { ComponenteHijo1Component } from './componente-hijo1.component';
import {MatButtonModule} from '@angular/material/button';
import { ComponenteHijo1Service } from './componente-hijo1.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ROUTING,
    MatButtonModule,
    MouseOverModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ComponenteHijo1Component],
  providers: [ComponenteHijo1Service]
})
export class ComponenteHijo1Module { }
