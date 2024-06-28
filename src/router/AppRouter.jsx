import React from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import { Marvel, DC } from "../heroes/pages/";
import { Login } from "../auth/pages/";
import { Navbar } from "../ui";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<DC />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    );
};
