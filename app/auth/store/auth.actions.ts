import { Action } from "@ngrx/store";

export const LOGIN = "[Auth] Login";



export class Login implements Action{
    readonly type = LOGIN;
    constructor(public payload: { email: string, password:string }) { }
}

export type AuthActions = Login;