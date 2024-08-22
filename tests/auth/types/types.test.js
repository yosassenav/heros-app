import { types } from "../../../src/auth/types/types"

describe('Pruebas en los types',()=>{

    test('debe regresar los types definidos en Types.js',()=>{

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})