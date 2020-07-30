import { NgModule } from '@angular/core';
import { MouseOverDirective } from './mouse-over.directive';


@NgModule({
    exports: [
        MouseOverDirective
    ],
    declarations: [
        MouseOverDirective
    ],
})
export class MouseOverModule { }

