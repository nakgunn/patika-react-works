import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('state güncellendi');   
  });  

  useEffect(() => {
    const interval = setInterval(() => {
        setNumber((n) => n +1) 
    }, 1000);
    return () => clearInterval(interval); // component unmount edildiğinde çalışır.
  }, [])

  return (
    <div>
      <h3> {number} </h3>
      <button onClick={() => setNumber(0)}> sıfırla </button>
    </div>
  );
}

export default Counter;
