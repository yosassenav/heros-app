import { Navbar } from "../../ui"
import { Routes, Route, Navigate } from "react-router-dom";
import {DCPage, MarvelPage, SearchPage, HeroPage} from "../pages/";


export const HeroesRoutes = () => {
    return (
    <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="MarvelPage" element={<MarvelPage />} />
                    <Route path="DCPage" element={<DCPage />} />
                    <Route path="/" element={<Navigate to="/MarvelPage" />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/MarvelPage"/>}/>
                </Routes>
            </div>
            
    </>
    )
}