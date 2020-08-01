import { Component, OnInit } from '@angular/core';
import { ComponenteHijo1Service } from './componente-hijo1.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InicioService } from 'src/app/inicio/servicios/inicio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-componente-hijo1',
  templateUrl: './componente-hijo1.component.html',
  styleUrls: ['./componente-hijo1.component.css']
})
export class ComponenteHijo1Component implements OnInit {

  color = {
    background: '#333'
  };
  imgUser;
  img = new Image();
  imagen = false;
  base64textString = [];
  respuesta: string;
  items: Observable<any[]>;
  user;

  letEdit = false;
  public userForm: FormGroup;

  constructor(private _service: ComponenteHijo1Service, firestore: AngularFirestore, private inicioService: InicioService) {
    //inicializacion del formulario del perfil del usuario
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
      img: new FormControl('', [
        Validators.required
      ])
    });
    //obtener el usuario logeado almacenado en el sesion storage
    this.user = JSON.parse(sessionStorage.getItem('user'));
    let users = [];
    //obtener todos los datos del usuario actual
    const getUsers = this.inicioService.getJSON().subscribe(data =>{
      users = data;
      users.forEach(element => {
        if(element.nombreUsuario === this.user.nombreUsuario){
          this.user = element;
          //metodo para obtener la imagen en base64
          this.imgUser = element.imagen;
          this.img.src = this.imgUser;
          //cambiar el tamaño de la imagen para ajustarla a la pantalla
          this.resizeImage();
        }
      });
      getUsers.unsubscribe();
    });
   }

  ngOnInit() { }

  //metodo para cargar una nueva imagen
  cargarImagen(evt) {
    const data = evt.target.files[0].name;;
    const dato = data.split('.');
    this.imagen = false;
    this.imgUser = '/assets/img/icons/user.png';
    const file = evt.target.files[0];
    if (file) {
      //convertir la imagen en base64
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  //metodo para convertir la imagen cargada a base65
  handleReaderLoaded(e) {
    this.imagen = true;
    this.base64textString = ['data:image/png;base64,' + btoa(e.target.result)];
    [this.imgUser] = this.base64textString;
    setTimeout(() => {
      this.img.src = this.imgUser;
      this.resizeImage();
    }, 700);
  }

  //metodo para ajustar el tamaño de la imagen  
  resizeImage() {
    // create an off-screen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // set its dimension to target size
    canvas.width = 200;
    canvas.height = (200 * this.img.naturalHeight) / this.img.naturalWidth;

    // draw source image into the off-screen canvas:
    ctx.drawImage(this.img, 0, 0, 200, (200 * this.img.naturalHeight) / this.img.naturalWidth);
    if (canvas.toDataURL('image/png')) {
      this.imgUser = canvas.toDataURL('image/png');
    }
  }

  update(){
    const user = {
        id: this.user.id,
        nombres: this.userForm.controls.name.value,
        apellidos: this.userForm.controls.lastName.value,
        fechaNacimiento: this.userForm.controls.date.value,
        nombreUsuario: this.user.nombreUsuario,
        contrasenia: this.user.contrasenia,
        imagen: this.imgUser,
        fecha: new Date
    }
    const updateUser = this._service.updateUser(user).subscribe(data => {
      updateUser.unsubscribe();
    });
    this.user.nombres = this.userForm.controls.name.value;
    this.user.apellidos = this.userForm.controls.lastName.value,
    this.user.fechaNacimiento = this.userForm.controls.date.value,
    this.user.imagen = this.imgUser
    console.log('this.user:', this.user);
    this.letEdit = false;
  }

  cancelar(){
    this.userForm.reset();
    this.letEdit = false;
  }
}
