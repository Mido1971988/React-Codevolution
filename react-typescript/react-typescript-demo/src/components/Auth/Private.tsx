import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

// component : Component => Aliasing destructured variables 
export const Private = ({ isLoggedIn, component : Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Vishwas' />
    } else {
        return <Login />
    }
}
