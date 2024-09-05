/**
 * @jest-environment jsdom
 */

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { PrivateRoutes } from "../../../src/router/PrivateRoutes";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <PrivateRoutes/>',()=>{

    beforeEach(() => {
        // Mock localStorage methods before each test
        Object.defineProperty(global, 'localStorage', {
          value: {
            getItem: jest.fn(),
            setItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn(),
          },
          writable: true,
        });
      });
    
    test('debe mostrar el children si esta autenticado',()=>{

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
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/MarvelPage');
    })
})