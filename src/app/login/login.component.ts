import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from "@ngrx/store";
import * as RouterAction from '../shared/route-actions';

// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/takeWhile";

// actions
import { AuthenticateAction } from "../user-login.actions";

// reducers
import {
  getAuthenticationError,
  isAuthenticated,
  isAuthenticationLoading,
  State
} from "../reducers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  public error: Observable<string | any>;
  private alive = true;

  constructor(private formBuilder: FormBuilder,
    private store: Store<State>) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.error = this.store.select(getAuthenticationError);
    console.log(this.error);
    this.store.select(isAuthenticated)
      .takeWhile(() => this.alive)
      .subscribe(value => {
        this.store.dispatch(new RouterAction.Go({ path: ["/home"] }));
      });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const email: string = this.loginForm?.get("email")?.value;
      const password: string = this.loginForm?.get("password")?.value;
      // trim values
      email.trim();
      password.trim();

      // set payload
      const payload = {
        email: email,
        password: password
      };

      this.store.dispatch(new AuthenticateAction(payload));
    } else {
      return
    }

  }
  onReset(): void {
    this.loginForm.reset();
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  public home() {
    this.store.dispatch(new RouterAction.Go({ path: ["/"] }));
  }

}
