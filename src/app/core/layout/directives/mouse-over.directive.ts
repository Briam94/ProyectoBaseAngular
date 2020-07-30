/* PARA EL USO DE ESTA DIRECTIVA SE REQUIERE QUE EL ELEMENTO CONTENGA UN ID */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ConfiguradorCanal } from './../../services/configuradorCanal';
import * as $ from 'jquery';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  constructor(public el: ElementRef) {
  }

  // tslint:disable-next-line:no-input-rename
  @Input('appMouseOver') color: object;

  @HostListener('mouseenter') onMouseEnter() {
    this.colorCanal(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorCanal(null);
  }

  private colorCanal(color: object) {
    if (color) {
      $('#' + this.el.nativeElement.id + ' span').css('color', '#fafafa');
      $('#' + this.el.nativeElement.id + ' i').css('color', '#fafafa');
    } else {
      $('#' + this.el.nativeElement.id).removeAttr('style');
      $('#' + this.el.nativeElement.id + ' span').removeAttr('style');
      $('#' + this.el.nativeElement.id + ' i').removeAttr('style');
    }
  }

}
