import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { AppRouter } from "../../../src/router/AppRouter";

describe('Pruebas en <AppRouter/>',()=>{

    test('debe mostrar el login si NO esta autenticado',()=>{

        const contextValue = {
            isLogged: false
        }
        render(
            <MemoryRouter initialEntries={'/MarvelPage'}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
            
        )
    })
})