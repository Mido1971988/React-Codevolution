import './App.css';
import { Greet } from "./components/props/Greet"
import { Heading } from './components/props/Heading';
import { Person } from './components/props/Person'
import { PersonList } from './components/props/PersonList'
import { Status } from './components/props/Status'
import { Oscar } from './components/props/Oscar'
import { Button } from './components/props/Button'
import { Input } from './components/props/Input'
import { Container } from './components/props/Container'
import { Private } from './components/Auth/Private';
import { Profile } from './components/Auth/Profile';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='Vishwas' isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading"></Status> */}
      {/* <Heading>Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar Goes To Leo!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {console.log('Button clicked', event, id)}}/> */}
      {/* <Input value='' handleChange={event => console.log(event)} /> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
      <Private isLoggedIn={true} component={Profile}></Private>
    </div>
  );
}

export default App;
