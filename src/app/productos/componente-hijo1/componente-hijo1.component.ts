import { Component, OnInit } from '@angular/core';
import { ComponenteHijo1Service } from './componente-hijo1.service';


@Component({
  selector: 'app-componente-hijo1',
  templateUrl: './componente-hijo1.component.html',
  styleUrls: ['./componente-hijo1.component.css']
})
export class ComponenteHijo1Component implements OnInit {

  color = {
    background: '#333'
  };
  respuesta: string;

  constructor(private _service: ComponenteHijo1Service) { }

  ngOnInit() { }

  llamarServicio() {
    this._service.consultaPropiaComponente('parametro')
      .subscribe(response => {
        console.log('respuesta correcta microservicio', response);
        this.respuesta = 'Respuesta Exitosa';
      }
      , error => {
        console.log('respuesta fallida microservicio', error);
        this.respuesta = 'Respuesta No Exitosa';
      });
  }

}
