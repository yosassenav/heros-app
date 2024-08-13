
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const initialState = {
  logged: false,
  user: null
}

export const AuthProvider = ({ children }) => {

  const init = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return {
      logged: !!user,
      user,
    }
  }

  const [ authState, dispatch ] = useReducer( authReducer, initialState, init );

  const login = (name = '') => {

    const user ={
      id: 'ABC',
      name,
    }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch( action );
  }

  const logout = () => {

    localStorage.removeItem('user');

    action = {
      type: types.logout,
    }

    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout,
      }}>
        {children}
    </AuthContext.Provider>
  )
}
