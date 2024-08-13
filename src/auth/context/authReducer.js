import { types } from "../types/types";

const initialState = {
    logged: false,
    user: null,
}

export const authReducer = ( action, state = initialState ) => {

    switch( action.type ){

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            }

        case types.logout:
            return {
                logged: false,
                user: null,
            }

        default:
            return state;

    }
}