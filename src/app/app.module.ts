/* Dejar el app.module lo más limpio posible, esto para futuras y posibles integraciones con novedades de Angular.

La única función del app.module será cargar el CoreModule y la vista en el CoreComponent. */

import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
