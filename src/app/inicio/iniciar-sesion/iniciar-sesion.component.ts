import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {InicioService} from '../servicios/inicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public userForm: FormGroup;
  users = [];

  constructor(private service: InicioService, private router: Router) {
    //obtener los usuarios almacenados en el archivo users.json
    const getUsers = this.service.getJSON().subscribe(data =>{
      this.users = data;
      getUsers.unsubscribe();
    })
    //inicializacion del formulario para registro de usuarios
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      userName: new FormControl('', [
        Validators.required
      ]),
      password1: new FormControl('', [
        Validators.required
      ]),
      password2: new FormControl('', [
        Validators.required
      ])
    });
   }

  ngOnInit() {
  }

  //metodo para registrar usuarios
  registrarUsuario(){
    let nombreRepetido = false;
    //verificar que no hay mas usuarios con el mismo nombre
    this.users.forEach(element => {
      if(element.nombreUsuario === this.userForm.controls.userName.value){
        nombreRepetido = true;
      }
    });
    if(!nombreRepetido){
      //verificar que las contraseñas sean iguales
      if(this.userForm.controls.password1.value !== this.userForm.controls.password2.value){
        alert('Las contraseñas no coinciden');
      }else {
        //construccion del json para enviarlo al servicio
        const user = {
          nombres: this.userForm.controls.name.value,
          apellidos: this.userForm.controls.lastName.value,
          fechaNacimiento: this.userForm.controls.date.value,
          nombreUsuario: this.userForm.controls.userName.value,
          contrasenia:this.userForm.controls.password1.value,
          imagen: "",
          fecha: new Date()
        }
        //servicio post de creacion de usuario
        const registUser = this.service.newUser(user).subscribe(data =>{
          console.log('data:', data);
          registUser.unsubscribe();
        });
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/productos');
      }
    }else{
      alert('Ya existe un usuario registrado con ese nombre');
    }
  }

  //limpiar el formulario de usuario
  limpiar(){
    this.userForm.reset();
  }

}
