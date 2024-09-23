/**
 * @jest-environment jsdom
 */

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"
import { MemoryRouter } from "react-router-dom"

// mock of useNavigate hook from react testing library
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate
}))


describe('Pruebas en <SearchPage/>',()=>{

    beforeAll(()=>{
        jest.clearAllMocks()
    })


    test('debe mostrarse correctamente con valores por defecto',()=>{
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar a Batman y el input con el valor del querySring',()=>{
        render(
            <MemoryRouter initialEntries={['/searchpage?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toBe('/assests/heroes/dc-batman.jpg');
    })

    test('debe de mostrar un error si no se encuentra el hero (batman123)',()=>{
        render(
            <MemoryRouter initialEntries={['/searchpage?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(screen.getByText('No hero with')).toBeTruthy();
    })

    test('debe llamar al navigate a la pantalla nueva',()=>{
        render(
            <MemoryRouter initialEntries={['/searchpage']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

        const form = screen.getByRole('form')
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenNthCalledWith('?q=superman')
    })
})