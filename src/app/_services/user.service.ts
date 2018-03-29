import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://neat-mvp-api.herokuapp.com/v1/users');
    }


    create(user: User) {
        const formData: FormData = new FormData();
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('first_name', user.first_name);
        formData.append('last_name', user.last_name);
        formData.append('telephone_number', user.telephone_number);


        return this.http.post('http://neat-mvp-api.herokuapp.com/v1/users', formData);
    }
}
