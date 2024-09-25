/**
 * @jest-environment jsdom
 */

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { HeroPage } from "../../../src/heroes/pages/HeroPage"
import { MemoryRouter } from "react-router-dom"

// mock of useNavigate hook from react testing library
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate
}))

describe('Pruebas en <HeroPage/>',()=>{

    beforeAll(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrarse correctamente con los valores por defecto',()=>{
        const {container} = render(
            <MemoryRouter>
                <HeroPage/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
    })

    test('debe regresar a MarvelPage al hacer click en el boton Back',()=>{
        render(
            <MemoryRouter initialEntries={['/HeroPage']}>
                <HeroPage/>
            </MemoryRouter>
        )

        const btn = screen.getByRole('button')
        fireEvent.click(btn);
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1);


    })
    
})