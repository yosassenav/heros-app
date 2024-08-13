import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer',()=>{

    test('debe retornar el estado por defecto',()=>{

        const state = authReducer({logged: false, user: null});

        expect(state).toEqual({logged: false, user: null});
    })

    test('debe de (login) llamar el login autenticar y establecer el user',()=>{

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '343'
            }
        }

        const state = authReducer(action, {logged: false, user: null});
        expect(state).toEqual({logged: true, user: action.payload});

    })

    test('debe de (logout) borrar el name del usuario y logged en false',()=>{

        const state = {
            logged: true,
            user: {id: '123', name: 'Juan'}
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer(action, state);

        expect(newState).toEqual({logged: false, user: null})

    })

})