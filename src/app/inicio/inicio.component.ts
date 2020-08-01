import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfiguradorCanal } from '../core/services/configuradorCanal';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InicioService } from './servicios/inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  datoService: any;
  public userForm: FormGroup;
  users = [];

  constructor(
    public dialog: MatDialog,
    private _configCanal: ConfiguradorCanal,
    private service: InicioService, private router: Router
  ) {
    //obtener la lista de usuarios
    const getUsers = this.service.getJSON().subscribe(data =>{
      this.users = data;
      getUsers.unsubscribe();
    })
    //inicializacion del formulario de usuarios
    this.userForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
   }


  ngOnInit() {
  }


  //apertura del modal para el registro de usuarios
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

  //metodo para inicio de sesion y redireccionar a la aplicacion
  start(){
    let userCorrect = false;
    this.users.forEach(element => {
      if(element.nombreUsuario === this.userForm.controls.userName.value && element.contrasenia === this.userForm.controls.password.value){
        userCorrect = true;
      }
    });
    //revisar si el usuario y la contraseña pertenecen a un usuario
    if(userCorrect){
      const user = {
        nombreUsuario: this.userForm.controls.userName.value
      }
      //almacenar el nombre del usuario logeado en el sessionStorage del navegador
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/productos');
    }else{
      alert('Usuario y contraseña incorrectos');
    }
  }

}
