import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { Store, StateObservable , ActionsSubject,ReducerManager,ReducerManagerDispatcher} from "@ngrx/store";
import * as RouterAction from '../shared/route-actions';

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

       Store, StateObservable,ActionsSubject,ReducerManager,ReducerManagerDispatcher
       
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
