import { render, screen } from "@testing-library/react"
import { PublicRoutes } from "../../../src/router/PublicRoutes"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";


describe('Pruebas en <PublicRoutes/>', () => { 

    test('debe mostrar el children si no esta autenticado',()=>{

        const contextValue = {
            logged: false,
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


    test('debe navegar si esta autenticado',()=>{

        const contextValue = {
            logged: true,
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

        expect(screen.getByText('login')).toBeTruthy();
    })


})