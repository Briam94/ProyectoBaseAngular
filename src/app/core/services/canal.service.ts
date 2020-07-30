import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from './../../../assets/urlConfig/urlConfig';
import { map } from 'rxjs/operators/map';

import 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  configuradorApp(query) {
    return this.http.get(`${BASEURL.ip}:${BASEURL.puerto}/nombre del microservicio/nombre de la funcion del microservicio/${query}`)
      .pipe(
      map(response => response[0], error => error)
      );
  }

}
