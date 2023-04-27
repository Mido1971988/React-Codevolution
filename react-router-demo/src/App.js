import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import { Navbar } from './components/NavBar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetalis';
import { Admin } from './components/Admin';
import { AuthProvider } from './components/auth'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { RequireAuth } from './components/RequireAuth'
import { RequireAuthLogin } from './components/RequireAuth'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        {/* <Route path='about' element={<About/>}/> */}
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>} />
          <Route path='admin' element={<Admin/>} />
        </Route>
        <Route path='*' element={<NoMatch/>}/>
        <Route path='/login' element={<RequireAuthLogin><Login /></RequireAuthLogin>} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
