import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <!--La primera vista que se muestra en ROUTER-OUTLET es INICIO -->
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class CoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
