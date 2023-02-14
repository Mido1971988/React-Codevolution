import react from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import ClassCounterThree from './components/ClassCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOneClass from './components/UseEffectOneClass'
import UseEffectOne from './components/UseEffectOne';
import MouseClass from './components/MouseClass'
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA'

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

export const UserContext = react.createContext()
export const ChannelContext = react.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
					<ComponentA />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

// function App() {
//   return (
//     <div>
//       {/* <ClassCounter></ClassCounter> */}
//       {/* <HookCounter></HookCounter> */}
//       {/* <HookCounterTwo></HookCounterTwo> */}
//       {/* <ClassCounterThree></ClassCounterThree> */}
//       {/* <HookCounterThree></HookCounterThree> */}
//       {/* <HookCounterFour></HookCounterFour> */}
//       {/* <UseEffectOneClass></UseEffectOneClass> */}
//       {/* <UseEffectOne></UseEffectOne> */}
//       {/* <MouseClass></MouseClass> */}
//       {/* <HookMouse></HookMouse> */}
//       {/* <IntervalClassCounter></IntervalClassCounter> */}
//       {/* <IntervalHookCounter></IntervalHookCounter> */}
//       <DataFetching></DataFetching>
//     </div>
//   )
// }

export default App;
