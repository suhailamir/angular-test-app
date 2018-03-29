import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const formData: FormData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        return this.http.post<any>('http://neat-mvp-api.herokuapp.com/v1/auth', formData)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.id) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
