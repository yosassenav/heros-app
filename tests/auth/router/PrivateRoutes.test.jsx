import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { PrivateRoutes } from "../../../src/router/PrivateRoutes";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <PrivateRoutes',()=>{
    test('debe mostrar el children si esta autenticado',()=>{

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            isLogged: true,
            user:{
                id: 'abc',
                name: 'Tiburcio'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/MarvelPage']}>
                    <PrivateRoutes>
                        <h1>Rutas privadas</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Rutas privadas')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenNthCalledWith("lastPath", "/MarvelPage");
    })
})