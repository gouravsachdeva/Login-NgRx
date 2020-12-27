import * as UserLoginActions from './user-login.actions';

describe('UserLogin', () => {
  it('should create an instance', () => {
    expect(UserLoginActions).toBeTruthy();
  });
});

describe('AuthenticateAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticateAction).toBeTruthy();
  });
});

describe('AuthenticatedAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedAction).toBeTruthy();
  });
});

describe('AuthenticatedSuccessAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedSuccessAction).toBeTruthy();
  });
});

describe('AuthenticatedErrorAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedErrorAction).toBeTruthy();
  });
});
