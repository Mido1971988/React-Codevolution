import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import ClassClick from './components/classClick';
import FunctionClick from './components/functionClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline';
import "./appStyles.css"
import styles from "./appStyles.module.css"
import Form from './components/form';
import LifecycleA from './components/lifecycleA';
import FragmentDemo from './components/fragmentDemo';
import Table from './components/table';
import ParentComp from './components/parentComp';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/focusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverConuter'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderProps from './components/RenderProps'
import ComponentA from './components/ComponentA';
import { ContextProvider } from './components/UserContext';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
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

// function App() {
//   return (
//     <div className="App">
//       <Greet></Greet>
//       <Welcome></Welcome>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Hello></Hello>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Greet name="Mohamed" heroName="Batman"><button>Action</button></Greet>
//       <Welcome name="Ahmed" heroName="Superman"><button>Stop</button></Welcome>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Message name="Soliman"></Message>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <FunctionClick></FunctionClick>
//       <ClassClick></ClassClick>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <EventBind></EventBind>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <ParentComponent name="Soliman"></ParentComponent>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <UserGreeting name="Soliman"></UserGreeting>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <NameList></NameList>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <Stylesheet primary={true}></Stylesheet> */}
//       <Inline></Inline>
//       <h1 className='error'>Regular CSS</h1>
//       <h1 className={styles.success}>Module CSS</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Form></Form>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <LifecycleA name="Soliman"></LifecycleA>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <FragmentDemo></FragmentDemo>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Table></Table>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <ParentComp></ParentComp>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <RefsDemo></RefsDemo>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <FocusInput></FocusInput>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <FRParentInput></FRParentInput>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <PortalDemo></PortalDemo>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <ErrorBoundary>
//         <Hero heroName="Batman"></Hero>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName="Superman"></Hero>
//       </ErrorBoundary>
//       {/* <ErrorBoundary>
//         <Hero heroName="Joker"></Hero>
//       </ErrorBoundary> */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <ClickCounter name="Soliman" incNum={1}></ClickCounter>
//       <HoverCounter name="soliman" incNum={2}></HoverCounter>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <RenderProps render={(count , incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}></RenderProps>
//       <RenderProps render={(count , incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}></RenderProps>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <ContextProvider value="Soliman">
        <ComponentA></ComponentA>
      </ContextProvider>
    </div>
  );
}

export default App;
