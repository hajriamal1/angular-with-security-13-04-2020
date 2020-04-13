import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    private URL ='http://localhost:8080/user';

   
    constructor(private httpClient: HttpClient) { }
   
    getUser(id:number): Observable<any>{
      return  this.httpClient.get(`${this.URL}/${id}`);
       }
  
   /* addUser(user:Object): Observable<Object> {
      return this.httpClient.post(`${this.URL}`,user);
    }*/
    addUser(info: User): Observable<Object> {
      return this.httpClient.post<Object>(this.URL, info, this.httpOptions);
      }
  
    updateUser(id: number, value: any): Observable<Object> {
      return this.httpClient.put(`${this.URL}/${id}`,value);
    }
  
    deleteUser(id:number): Observable<any> {
      return this.httpClient.delete(`${this.URL}/${id}`,{responseType:'text'});
    }
  
  
    getUserList(): Observable<any> {
      return this.httpClient.get(`${this.URL}`);
    }
  
  
  }