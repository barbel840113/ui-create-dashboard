import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initializeUserState } from './user.state';
import { IAuthState, initializeAuthState } from './auth.state';

export interface IAppState{
    router? :RouterReducerState,
    users: IUserState,
    auth: IAuthState
}

export const initialAppState = {
    users: initializeUserState,
    auth: initializeAuthState
};

