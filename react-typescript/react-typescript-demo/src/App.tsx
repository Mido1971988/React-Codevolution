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
import { List } from './components/Generics/List';
import { RandomNumber } from './components/Restrictions/RandomNumber';
import { Toast } from './components/TemplateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/Polymorphic/Text';

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
      {/* <Private isLoggedIn={true} component={Profile}></Private> */}
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position='center'></Toast> */}
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>
      <RandomNumber value={10} isPositive />
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;
