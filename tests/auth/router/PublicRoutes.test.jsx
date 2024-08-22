import { render, screen } from "@testing-library/react"
import { PublicRoutes } from "../../../src/router/PublicRoutes"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";


describe('Pruebas en <PublicRoutes/>', () => { 

    test('debe mostrar el children (rutas públicas) si no esta autenticado',()=>{

        const contextValue = {
            isLogged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoutes>
                    <h1>Ruta publica</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();
    })


    test('debe navegar a /MarvelPage si esta autenticado',()=>{

        const contextValue = {
            isLogged: true,
            user: {
                name: 'Juan',
                id: 'VH1209'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoutes>
                                <h1>Ruta publica</h1>
                            </PublicRoutes>
                        }/>
                        <Route path={'MarvelPage'} element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina Marvel')).toBeTruthy();

        // const loginText = screen.getByText((content)=>content.includes('login'));
        // expect(loginText).toBeTruthy();
    })


})