
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ROUTES } from './../core/core.routing';
import { LayoutModule } from './../core/layout/layout.module';
import { InicioComponent } from './../inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

/* Se cargará en cada módulo los componentes de Material que sean necesarios */
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        APP_ROUTES,
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,        
        MatFormFieldModule
    ],
    exports: [
        InicioComponent,
        IniciarSesionComponent
    ],
    declarations: [
        InicioComponent,
        IniciarSesionComponent,
    ],
    entryComponents: [
        IniciarSesionComponent
    ],
    providers: [],
})
export class InicioModule { }
