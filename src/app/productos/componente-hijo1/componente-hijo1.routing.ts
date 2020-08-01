
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo1Component } from './componente-hijo1.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const COMPONENTEHIJO1_ROUTE: Routes = [
    { path: '', component: ComponenteHijo1Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(COMPONENTEHIJO1_ROUTE);
