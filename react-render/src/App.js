import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ArrayUseReducer } from './components/ImmutableState/ArrayUseReducer';
import { ObjectUseReducer } from './components/ImmutableState/ObjectUseReducer';
import { Parent } from './components/Parent-Child/Parent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){
  return (
    // <UseState></UseState>
    // <UseReducer></UseReducer>
    // <ObjectUseState></ObjectUseState>
    // <ArrayUseReducer></ArrayUseReducer>
    // <ObjectUseReducer></ObjectUseReducer>
    <Parent></Parent>
  )
}
export default App;
