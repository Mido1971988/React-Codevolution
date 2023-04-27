import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  return children
}

export const RequireAuthLogin = ({ children }) => {
  const auth = useAuth()
  if (auth.user) {
    return <Navigate to='/profile'  />
  }
  return children
}