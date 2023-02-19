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
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentD from './components/ComponentD';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import MemoCounter from './components/MemoCounter';

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


// ------ useContext()
// export const UserContext = react.createContext()
// export const ChannelContext = react.createContext()
// function App() {
// 	return (
// 		<div className="App">
// 			<UserContext.Provider value={'Vishwas'}>
//         <ChannelContext.Provider value={'Codevolution'}>
// 					<ComponentA />
// 				</ChannelContext.Provider>
// 			</UserContext.Provider>
// 		</div>
// 	)
// }

// ----------------useReducer + useContext
// import React, { useReducer } from 'react'
// const initialState = 0
// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1
// 		case 'decrement':
// 			return state - 1
// 		case 'reset':
// 			return initialState
// 		default:
// 			return state
// 	}
// }

// export const CountContext = React.createContext()

// function App() {
// 	const [count, dispatch] = useReducer(reducer, initialState)
// 	return (
// 		<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
// 			Count - {count}
// 			<div className="App">
// 				<ComponentD />
// 			</div>
// 		</CountContext.Provider>
// 	)
// }



function App() {
	return (
		<div>
			{/* <ClassCounter></ClassCounter> */}
			{/* <HookCounter></HookCounter> */}
			{/* <HookCounterTwo></HookCounterTwo> */}
			{/* <ClassCounterThree></ClassCounterThree> */}
			{/* <HookCounterThree></HookCounterThree> */}
			{/* <HookCounterFour></HookCounterFour> */}
			{/* <UseEffectOneClass></UseEffectOneClass> */}
			{/* <UseEffectOne></UseEffectOne> */}
			{/* <MouseClass></MouseClass> */}
			{/* <HookMouse></HookMouse> */}
			{/* <IntervalClassCounter></IntervalClassCounter> */}
			{/* <IntervalHookCounter></IntervalHookCounter> */}
			{/* <DataFetching></DataFetching> */}
			{/* <CounterOne></CounterOne> */}
			{/* <CounterTwo></CounterTwo> */}
			{/* <CounterThree></CounterThree> */}
			{/* <DataFetchingOne></DataFetchingOne> */}
			{/* <DataFetchingTwo></DataFetchingTwo> */}
			{/* <ParentComponent></ParentComponent> */}
			<MemoCounter></MemoCounter>
		</div>
	)
}

export default App;
