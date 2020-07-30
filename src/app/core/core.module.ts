/* Módulo que toma toda la carga en vez del app.module.

Como Core de la aplicación, aquí se deberá incluir todas las dependencias necesarias globales para el funcionamiento de la App.

*/


// SISTEMA
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// ROUTING
import { APP_ROUTES } from './core.routing';

// VISTA
import { LayoutModule } from './layout/layout.module';
import { CoreComponent } from './core.component';
import { InicioModule } from './../inicio/inicio.module';
import { ProductosModule } from './../productos/productos.module';

// SERVICES
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from './services/canal.service';
import { ConfiguradorCanal } from './services/configuradorCanal';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        APP_ROUTES,
        LayoutModule,
        InicioModule,
        ProductosModule,
        HttpClientModule
    ],
    exports: [
        CoreComponent
    ],
    declarations: [
        CoreComponent
    ],
    providers: [
        CookieService,
        AppService,
        ConfiguradorCanal
    ],
})
export class CoreModule { }
