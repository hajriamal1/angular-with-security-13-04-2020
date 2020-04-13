import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from'@angular/common/http'
import { from, Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';
import { JwtResponse } from './jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  constructor(private http: HttpClient) { }
 
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
}
