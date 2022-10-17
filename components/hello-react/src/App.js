import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const friends = [{id: 9, name: 'Gizem', surname: 'Kılheybe'}, {id: 17, name: 'Eymen', surname: 'İşbay'}]; 

function App() {
  return (
    <>
      <Header /> 
      <User name='Necati' surname='Akgün' age='25' isLoggedIn={true} friends={friends} address={{title: 'Yunus Emre/Manisa', zipcode: 45050}} />
    </>
  );
}

export default App;
