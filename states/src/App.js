import './App.css';
import {useState} from 'react'
function App() {
  const [name, setName] = useState('Necati');
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['Necati', 'Can']);
  const [address, setAddress] = useState({title: 'Manisa', zip: 45050})
  console.log(`${name} - ${age}`);
  return (
    <div className="App">
      <h1> Merhaba {name}({age})! </h1>
      <button onClick={() => setName('Tuğrul')}> set name </button>
      <button onClick={() => setAge(41)}> set age </button>

      <hr></hr>
      <br></br>

    <h2>Friends</h2>
    {friends.map((friend, index) => (
      <div key={index}> {friend} </div>
    ))}

    <button onClick={() => setFriends([...friends, 'Kübra'])}> New Friend </button>

    <hr></hr>
    <br></br>

      <h2> {address.title} {address.zip} </h2>
      <button onClick={() => setAddress({...address, title: 'İzmir'})}> move </button>

    </div>

  );
} 


export default App;
