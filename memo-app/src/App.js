import './App.css';
import {useState, useMemo} from 'react';
import Header from './components/Header'

// const data = {name: 'Necati'} ## Referans tipi burda tanımlarsak child componenente hep aynı referans değeri geçeceği için gereksiz render edilmez.

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // const data = {name: 'Necati'} ## referans tipi burda tanımlarsak parent her render edildiğinde child da gereksiz yere render edilir. içindeki değer değişmese bile.
  // const data = useMemo(() => {
  //   return {name: 'Necati'};
  // }, []) // ## Bu yöntemle datayı childa geçersek child gereksiz yere render edilmez.

  // const data = useMemo(() => {
  //   return {name: 'Necati'};
  // }, [number]) // ## Bu yöntemle datayı childa geçersek yalnızca number değiştiğinde render edilir.

  // const data = calculateObject();
// bir üstteki mevcut durumda inputa her değer girişinde parent component render edileceği için calculate object gereksiz yere yeniden çalışacak.
// bunun için useMemo kullanabiliriz. yalnızca number değiştiğinde render edilsin.

const data = useMemo(() => {
    return calculateObject(number)
  }, [number]) // ## Bu yöntemle datayı childa geçersek yalnızca number değiştiğinde render edilir.

  return (
    <div className="App">
      <Header data={data} number={number < 5 ? 0 : number} />
      <h1>{number}</h1>
      <button style={{height: '50px', width: '100px'} } type='button' onClick={() => setNumber(number + 1)}> Button </button>
      <hr/>
      <input value={text} onChange={({target}) => setText(target.value)}></input> 
      
    </div>
  );
}

function calculateObject(number){
  console.log('calculating...');
  for (let i = 0; i < 1000000000; i++) {}
  console.log('calculating completed!');
  return {name: 'Necati', number} 
}

export default App;
// normal şartlarda child componente primitive tipte bir değer geçersek ve bu değer değişmezse child component render edilmez. -Child comp'de React.memo(Child) kullandıysak.
// fakat child componente prop geçerken prop'un aldığı değer bir object veya array ise yani referans tip ise ve bu referans tipi parent component içinde tanımlıyorsak
// component her seferinde render edilmeye devam eder. Bu durumdan kurtulmak için:
// #1 referans tipi parent component dışında tanımlayabiliriz. Böylece referans değişmez.
// #2 useMemo hookunu kullanarak child componentin yeniden render edilmesinin önüne geçebiliriz.

