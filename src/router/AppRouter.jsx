import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/";
import { HeroesRoutes } from '../heroes';
import { PrivateRoutes } from "../router/PrivateRoutes"
import { PublicRoutes } from "../router/PublicRoutes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                }
                />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <HeroesRoutes />
                    </PrivateRoutes>
                }
                />
            </Routes>
        </>
    );
};
