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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        APP_ROUTES,
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MouseOverModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule
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
