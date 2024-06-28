import { Navbar } from "../../ui"
import { Routes, Route, Navigate } from "react-router-dom";
import {DC, Marvel, Search, Hero} from "../pages/";


export const HeroesRoutes = () => {
    return (
    <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DC />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero" element={<Hero />} />
                </Routes>
            </div>
            
    </>
    )
}