import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  //metodo para obtener la lista de usuarios registrados en el archivo users.json el cual esta en esta ruta ./assets/json/users.json
  getJSON() {
    return this.http.get("./assets/json/users.json",
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }

  //registrar un nuevo usuario
  newUser(user){
    return this.http.post("./assets/json/users.json", user,
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }
}
