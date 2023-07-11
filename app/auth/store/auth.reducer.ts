// import { User } from "../user.model";
// import * as AuthActions from "../store/auth.actions";
// export interface State {
//     user: User
// }

// const initialState: State = {
//     user: null,
// };

// export function authReducer(state = initialState, actions: AuthActions.AuthActions) {
//     switch (actions.type) {
//         case AuthActions.LOGIN:
//             return {
//                 ...state,
//                 user: new User('email', 'token', new Date)
//             }
            
//         default:
//             return state;
//     }
// }