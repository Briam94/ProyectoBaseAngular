import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './service/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;
  postLists = [];
  users = [];
  indexComment;
  openNewComment = false;
  openEdit = false;
  postEdit = '';
  color = {
    background: '#333'
  };

  listImg = [];
  imgUser;
  img = new Image();
  imagen = false;
  base64textString = [];
  indexPost;

  textoPipe = 'componente hijo 2';
  public commentForm: FormGroup;

  constructor(private route: Router, private service: HomeService) {
    //obtener el usuario logeado
    this.user = JSON.parse(sessionStorage.getItem('user'));
    //obtener la lista de posts en el archivo posts.json
    const listPosts = this.service.getJSON().subscribe(data => {
      this.postLists = data;
      this.postLists.forEach(element => {
        this.imgUser = element.imagen;
        this.img.src = this.imgUser;
        //ajustar la imagen los usuarios creadores de los posts
        this.resizeImage();
        element.imagen = this.imgUser;
      });
    });
    this.commentForm = new FormGroup({
      comment: new FormControl('', [
        Validators.required
      ]),
    });
   }

  ngOnInit() {
  }

  
  //metodo para ajustar la imagen los usuarios creadores de los posts
  resizeImage() {
    // create an off-screen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // set its dimension to target size
    canvas.width = 100;
    canvas.height = (100 * this.img.naturalHeight) / this.img.naturalWidth;

    // draw source image into the off-screen canvas:
    ctx.drawImage(this.img, 0, 0, 100, (100 * this.img.naturalHeight) / this.img.naturalWidth);
    if (canvas.toDataURL('image/png')) {
      this.imgUser = canvas.toDataURL('image/png');
      this.listImg.push(this.imgUser);
    }
  }


  //metodo para dar like al post
  like(post){
    //se envia la peticion al servicio newLike para aumentar la cantidad de likes que tiene el post
    const newLike = this.service.newLike().subscribe(data => {
      newLike.unsubscribe();
    }, error => {
      newLike.unsubscribe();
    });
    this.postLists.forEach(element => {
      if(element.id === post.id){
        if(element.likeme){
          //si el post no tiene like por el usuario logeado, se aumenta en +1 la cantidad de likes del post
          element.likeme = false;
          element.likes = element.likes - 1;
        }else{
          //si el post ya tiene like por el usuario logeado, se resta en 1 la cantidad de likes del post
          element.likeme = true;
          element.likes = element.likes + 1;
        }
      }
    });
  }

  //disparador que indica que se registrara un nuevo comentario
  openComment(index){
    this.indexComment = index;
    this.openNewComment = true;
  }

  //metodo para registrar un nuevo comentario
  setComment(index){
    //se obtiene el usuario actual logeado
    const user = JSON.parse(sessionStorage.getItem('user'));
    //se aumenta en +1 el contador de comentarios del post
    this.postLists[index].comment++;
    //se armana el json que sera enviado al servicio
    const comment = {
      comment: this.commentForm.controls.comment.value,
      date: new Date(),
      user: user.nombreUsuario
    }
    //se realiza la peticion para registrar el nuevo comentario
    const newComment = this.service.newComment(comment).subscribe(data => {
      newComment.unsubscribe();
    }, error => {
      newComment.unsubscribe();
    });
    this.postLists[index].comments.push({
      comment: this.commentForm.controls.comment.value,
      date: new Date(),
      user: user.nombreUsuario
    });
    this.openNewComment = false;
  }

  //metodo para eliminar un post si el usuario que lo posteo es el usuario logeado
  deletePost(index){
    //se envia la peticios delete al servicio
    const deletePost = this.service.deletePost().subscribe(data => {
      deletePost.unsubscribe();
    })
    this.postLists.splice(index,1);
  }

  //disparador que indica que el post sera editado, solo si el usuario logeado es el dueño del post
  editPost(index){
    this.indexPost = index;
    this.postEdit = this.postLists[index].post;
    this.openEdit = true;
  }

  //metodo para actualizar el post
  updatePost(){
    //se envia la peticion al servicio put para actualizar el post
    const updatePost = this.service.updatePost(this.postEdit).subscribe(data => {
      updatePost.unsubscribe();
    })
    this.postLists[this.indexPost].post = this.postEdit ;
    this.openEdit = false;
  }


}
