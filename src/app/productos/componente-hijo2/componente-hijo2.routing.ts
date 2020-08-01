
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo2Component } from './componente-hijo2.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const COMPONENTEHIJO2_ROUTE: Routes = [
    { path: '', component: ComponenteHijo2Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(COMPONENTEHIJO2_ROUTE);
