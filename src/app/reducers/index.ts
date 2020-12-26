import { ActionReducer, createSelector, combineReducers, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUserLogin from '../user-login.reducer';
import { compose } from "@ngrx/core/compose";
import { routerReducer, RouterState } from "@ngrx/router-store";
import { storeFreeze } from "ngrx-store-freeze";

export interface State {
  // router: RouterState;
  [fromUserLogin.userLoginFeatureKey]: fromUserLogin.State;
}

export const reducer = {
  // router: routerReducer,
  [fromUserLogin.userLoginFeatureKey]: fromUserLogin.reducer
};

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }

export const getUsersState = (state: State) => state[fromUserLogin.userLoginFeatureKey];
export const getAuthenticatedUser = createSelector(getUsersState, state => state.authenticated);
export const getAuthenticationError = createSelector(getUsersState, state => state.error);
export const isAuthenticated = createSelector(getUsersState, state => state.user);
export const isAuthenticatedLoaded = createSelector(getUsersState, state => state.loaded);
export const isAuthenticationLoading = createSelector(getUsersState, state => state.loading);
export const getSignOutError = createSelector(getUsersState, state => state.error);
// export const getSignUpError = createSelector(getUsersState, fromUserLogin.getSignUpError);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
