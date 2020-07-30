import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = {
    background: '#333'
  };

  textoPipe = 'componente hijo 2';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // PRODUCTOS

  componenteHijo1() {
    this.route.navigate(['productos', 'componenteHijo1']);
  }

  componenteHijo2() {
    this.route.navigate(['productos', 'componenteHijo2']);
  }


}
