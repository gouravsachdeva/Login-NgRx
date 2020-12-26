import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from "@ngrx/store";
import * as RouterAction from '../shared/route-actions';

// rxjs
import { Observable } from "rxjs";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/takeWhile";

// actions
import { AuthenticateAction } from "../user-login.actions";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginForm: FormGroup;

  // loginForm = new FormBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
      { provide: Store, useClass: Store },
      //{ provide: Observable, useClass: Observable },
      FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
