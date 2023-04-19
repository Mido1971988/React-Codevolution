import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/newCakeContainer'
import ItemContainer from './components/ItemContainer'
import UsersContainer from './components/UsersContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer ice-cream/> */}
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
