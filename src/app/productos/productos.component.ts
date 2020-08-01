import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/servicios/inicio.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  user;

  datoService: any;

  constructor(private service: InicioService) {
    //obtener el usuario logeado actualmente
    this.user = JSON.parse(sessionStorage.getItem('user'));
   }

  ngOnInit() {
  }

}
