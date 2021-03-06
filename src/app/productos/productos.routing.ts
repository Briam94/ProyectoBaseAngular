/* RUTAS PARA LAS VISTAS DENTRO DE PRODUCTOS.

Los componentes de las rutas hijas serán cargados por Lazy Load
para evitar la carga innecesaria de archivos al inicio de la aplicación.

*/
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const PRODUCTOS_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'componenteHijo1', loadChildren: () => import('./componente-hijo1/componente-hijo1.module').then(m => m.ComponenteHijo1Module) },
    { path: 'componenteHijo2', loadChildren: () => import('./componente-hijo2/componente-hijo2.module').then(m => m.ComponenteHijo2Module) },
    { path: '**', pathMatch: 'full', redirectTo: '/productos' }
];
