import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
// var moment = require('moment/moment');

export const TEST_USER = new User();
TEST_USER.id = '1';
TEST_USER.email = 'test@domain.com';
TEST_USER.firstName = 'Test';
TEST_USER.lastName = 'Domain';
TEST_USER.password = 'Test@123';
TEST_USER.date = new Date();

@Injectable()
export class UserService {

    private authenticatedData = false;
    public authenticate(email: string, password: string): Observable<User> {
        if (email === TEST_USER.email && password === TEST_USER.password) {
            this.authenticatedData = true;
            return of(TEST_USER);
        }
        return throwError(new Error('Invalid email or password'));
    }

    public authenticated(): Observable<boolean> {
        return of(this.authenticatedData);
    }

    public authenticatedUser(): Observable<User> {
        return of(TEST_USER);
    }

    public signout(): Observable<boolean> {
        this.authenticatedData = false;
        return of(true);
    }
}
