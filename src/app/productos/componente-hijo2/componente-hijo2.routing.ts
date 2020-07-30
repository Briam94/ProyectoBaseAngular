import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo2Component } from './componente-hijo2.component';

const COMPONENTEHIJO2_ROUTE: Routes = [
    { path: '', component: ComponenteHijo2Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(COMPONENTEHIJO2_ROUTE);
