import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }
url="https://reqres.in/api/users"

get(){
  return this.http.get(this.url);
}
saveUser(data:any){
  return this.http.post(this.url,data);
}
}
