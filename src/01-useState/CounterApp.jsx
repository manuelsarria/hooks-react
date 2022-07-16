import { useState } from "react"

export const CounterApp = () => {

  const [counter, setCounter] = useState({
      counter1: 30,
      counter2: 20,
      counter3: 10,
  });

  const {counter1, counter2, counter3} = counter;

  return (
    <>
    <h1>Counter 1 {counter1}</h1>
    <h1>Counter 2 {counter2}</h1>
    <h1>Counter 3 {counter3}</h1>
      
    <hr/>

    <button className="btn"
        onClick={() => setCounter({
            ...counter,
            counter1: counter1 + 1,
    })}>
        +1
    </button>
    </>
  )
}