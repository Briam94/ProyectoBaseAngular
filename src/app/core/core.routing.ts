import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './../inicio/inicio.component';
import { ProductosComponent } from './../productos/productos.component';
import { PRODUCTOS_ROUTES } from './../productos/productos.routing';

const routes: Routes = [
    { path: '', component: InicioComponent },
    {
        path: 'productos', component: ProductosComponent,
        children: PRODUCTOS_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
