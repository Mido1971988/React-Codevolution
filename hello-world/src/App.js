import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

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

function App() {
  return (
    <div className="App">
      <Greet name="Mohamed" heroName="Batman"><button>Action</button></Greet>
      <Welcome name="Ahmed" heroName="Superman"><button>Stop</button></Welcome>
    </div>
  );
}

export default App;