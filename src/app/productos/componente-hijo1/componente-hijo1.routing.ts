import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo1Component } from './componente-hijo1.component';

const COMPONENTEHIJO1_ROUTE: Routes = [
    { path: '', component: ComponenteHijo1Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(COMPONENTEHIJO1_ROUTE);
