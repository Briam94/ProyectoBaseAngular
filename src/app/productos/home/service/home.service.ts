import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getJSON() {
    return this.http.get("./assets/json/posts.json",
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }
  
  getJSONUser() {
    return this.http.get("./assets/json/users.json",
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }

  newLike(){
    return this.http.put("./assets/json/posts.json",
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }

  newComment(comment){
    return this.http.post("./assets/json/posts.json", comment,
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }

  deletePost(){
    return this.http.delete("./assets/json/posts.json",
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }

  updatePost(post){
    return this.http.put("./assets/json/posts.json", post,
    { responseType: 'text'}
    ).pipe(map((response: any) => JSON.parse(response),
    error => error));
  }
}
