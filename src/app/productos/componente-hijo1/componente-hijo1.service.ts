import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from './../../../assets/urlConfig/urlConfig';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class ComponenteHijo1Service {

  constructor(private http: HttpClient) { }

  //metodo para obtener la lista de los usuarios en el archivo users.json
  updateUser(user){
    return this.http.put("./assets/json/users.json", user,
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }
}
