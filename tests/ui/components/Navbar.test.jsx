/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui/components/Navbar"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"

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

        screen.debug()
    })

    test('debe de llamar el logout y el navigate cuando se hace click en el boton de logout',()=>{

    })
})