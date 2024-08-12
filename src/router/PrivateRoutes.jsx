import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoutes = ({ children }) => {

    const { isLogged } = useContext(AuthContext);

    const {pathname, search} = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath',lastPath);

    console.log("Priv isLogged: ",isLogged)

  return (isLogged) ? children : <Navigate to='/login'/>
}
