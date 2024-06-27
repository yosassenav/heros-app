import React from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import { Marvel } from "../heroes/pages/Marvel";
import { DC } from "../heroes/pages/DC";
import { Login } from "../auth/pages/Login";
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
