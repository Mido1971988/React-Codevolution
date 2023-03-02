import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ArrayUseReducer } from './components/ImmutableState/ArrayUseReducer';
import { ObjectUseReducer } from './components/ImmutableState/ObjectUseReducer';
import { Parent } from './components/Parent-Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { OptimizedParentOne } from './components/Optimization/OptimizedParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { ParentThree } from './components/Optimization/ParentThree';
import { ParentFour } from './components/Optimization/ParentFour';

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
    // <Parent></Parent>
    // <ParentOne></ParentOne>
    // <OptimizedParentOne><ChildOne></ChildOne></OptimizedParentOne>
    // <GrandParent></GrandParent>
    // <ParentTwo></ParentTwo>
    // <ParentThree></ParentThree>
    <ParentFour></ParentFour>
  )
}
export default App;
