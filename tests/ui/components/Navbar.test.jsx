/**
 * @jest-environment jsdom
 */

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui/components/Navbar"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"

// mock of useNavigate hook from react testing library
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate
}))


describe('Puebas en <Navbar/>',()=>{
    const contextValue = {
        isLogged: true,
        user: {
            name: 'Juan'
        },
        logout: jest.fn()
    }

    beforeAll(()=>{
        jest.clearAllMocks()
    })

    test('debe mostrar el nombre del usuario',()=>{
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
            
        );

        expect(screen.getByText('Juan')).toBeTruthy()
    })

    test('debe de llamar el logout y el navigate cuando se hace click en el boton de logout',()=>{
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
            
        );

        const onlogoutBtn = screen.getByRole('button');
        fireEvent.click(onlogoutBtn);
        expect(contextValue.logout).toHaveBeenCalledTimes(1);
        expect(mockedUseNavigate).toHaveBeenNthCalledWith('/login', {'replace': true})
    })
})