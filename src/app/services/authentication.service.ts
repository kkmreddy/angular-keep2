import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:3000/auth/v1', data)

  }

  setBearerToken(token: string) {
    //console.log(token);
    localStorage.setItem('bearerToken', token);

  }

  getBearerToken(): string {
    return localStorage.getItem('bearerToken');

  }

  isUserAuthenticated(token: string) {
    
    return this.httpClient.post(`http://localhost:3000/auth/v1/isAuthenticated`, {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).map(response => response['isAuthenticated'])
      .toPromise();


  }
}
