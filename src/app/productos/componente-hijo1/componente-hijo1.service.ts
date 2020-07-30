import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from './../../../assets/urlConfig/urlConfig';
import 'rxjs/Rx';

@Injectable()
export class ComponenteHijo1Service {

  constructor(private http: HttpClient) { }

  consultaPropiaComponente(params) {
    return this.http.post(`${BASEURL.ip}:${BASEURL.puerto}/nombre del microservicio/nombre de la funcion del microservicio/`, params)
      .map(response => response[0], error => error);
  }
}
