import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { User } from "../models/user";

export const TEST_USER = new User();
TEST_USER._id = "1";
TEST_USER.email = "test@domain.com";
TEST_USER.firstName = "Test";
TEST_USER.lastName = "Domain";
TEST_USER.password = "Test@123";

@Injectable()
export class UserService {

    private _authenticated = false;
    public authenticate(email: string, password: string): Observable<User> {
        if (email === TEST_USER.email && password === TEST_USER.password) {
            this._authenticated = true;
            return of(TEST_USER);
        }
        return throwError(new Error("Invalid email or password"));
    }

    public authenticated(): Observable<boolean> {
        return of(this._authenticated);
    }

    public authenticatedUser(): Observable<User> {
        return of(TEST_USER);
    }

    public signout(): Observable<boolean> {
        this._authenticated = false;
        return of(true);
    }
}