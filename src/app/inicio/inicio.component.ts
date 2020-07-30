import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfiguradorCanal } from '../core/services/configuradorCanal';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  datoService: any;

  constructor(
    public dialog: MatDialog,
    private _configCanal: ConfiguradorCanal
  ) { }


  ngOnInit() {
    this.datoService = this._configCanal.configDatos();
  }


  modalLogin() {
    let dialogRef = this.dialog.open(IniciarSesionComponent, {
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe(result => {
      /* Función para ejecutar algo después de cerrar el modal */
    });
  }


  ngOnDestroy() {
    this.dialog.closeAll();
  }

}
