/* Dentro de la carpeta irá las directivas, pipes y componentes que se reutilizarán a lo largo del proyecto.

Cada componente que se repita siendo parte de la 'maquetación' se incluirá aquí.

Ejemplo: Loaders */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Componente1Component
    ],
    declarations: [
        Componente1Component
    ],
    providers: [],
})

export class LayoutModule { }

