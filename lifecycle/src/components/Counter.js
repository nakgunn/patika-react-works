import {useState, useEffect} from 'react'; 
function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('Component mount edildi!');

        const interval = setInterval(() => {
            setNumber((n) => n+1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); // componentin mount olma anını yakalamak için bu şekilde yakalamamız gerekir. 

    useEffect(() => {
        console.log('number state güncellendi.');
    }, [number]); // bu şekilde kullanırsak number state'i değiştiğinde componenti render eder.

    useEffect(() => {
      console.log('bir state güncellendi.');
  }); // bu şekilde kullanırsak herhangi bir state değiştiğinde componenti render eder.

  return <div>
    <h1> {number} </h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
  </div>
}

export default Counter;
