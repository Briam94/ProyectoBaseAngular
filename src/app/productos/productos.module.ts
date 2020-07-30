import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from './../core/core.routing';
import { LayoutModule } from './../core/layout/layout.module';
import { ProductosComponent } from './../productos/productos.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MouseOverModule } from '../core/layout/directives/mouse-over.module';
import { CapitalizePipe } from '../core/layout/pipes/capitalizado.pipe';

@NgModule({
    imports: [
        APP_ROUTES,
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MouseOverModule
    ],
    exports: [
    ],
    declarations: [
        ProductosComponent,
        HomeComponent,
        CapitalizePipe
    ],
    providers: [],
    entryComponents: [
    ],
})
export class ProductosModule { }
