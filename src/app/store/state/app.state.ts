import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initializeUserState } from './user.state';

export interface IAppState{
    router? :RouterReducerState,
    users: IUserState
}

export const initialAppState = {
    users: initializeUserState
};

export function getInitializestate(): IAppState{
    return initialAppState;
}