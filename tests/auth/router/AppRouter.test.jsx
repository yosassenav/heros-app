/**
 * @jest-environment jsdom
 */

import React from "react"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../../src/router/AppRouter"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { render } from "@testing-library/react"



describe('Pruebas en <AppRouter/>',()=>{

    // test('debe mostrar el login si NO esta autenticado',()=>{

    //     const contextValue = {
    //         isLogged: false,
    //     }

    //     render(
    //         <MemoryRouter initialEntries={['/MarvelPage']}>
    //             <AuthContext.Provider value={contextValue}>
    //                 <AppRouter/>
    //             </AuthContext.Provider>
    //         </MemoryRouter> 
    //     )

    //     expect(screen.getAllByText()).toBeTruthy();

    // })

    test('debe mostrar el componente de Marvel si esta autenticado',()=>{
        const contextValue = {
            isLogged: true,
            user: {
                id: '123',
                name: 'Michael'
            }
        }

        render(
            <MemoryRouter initialEntries={['/MarvelPage']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel')).toBeTruthy()
    })
})