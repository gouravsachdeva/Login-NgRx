import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { Store } from "@ngrx/store";
import * as RouterAction from '../shared/route-actions';

import { Observable } from "rxjs";
import {
  getAuthenticatedUser,
  State
} from "../reducers";

import { User } from "../core/models/user";
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: Store, useClass: Store },
       //{ provide: Observable, useClass: Observable }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
