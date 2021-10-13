import React, {useState} from 'react';

let UseState = function () {
  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(1);
  // This syntax is a shorter way of writing the following:
  //     const counterState = useState(0);
  //     const counter = counterState[0];
  //     const setCounter = counterState[1];
  // useState returns an array with two items:
  //     1. The object state
  //     2. A function to set the value of the state


  return (
    <div id={"use-state-container"} className={"hook-container"}>
      <h3
        id={"hook-name"}
        className={counter >= 10 ? 'green' : counter <= -10 ? 'red' : ''}
      >
        useState
      </h3>
      <button
        id={"counter-decrement-button"}
        onClick={() => setCounter(counter - increase)}
        className={"counter-button"}
      >
        -
      </button>
      {counter}
      <button
        id={"counter-increment-button"}
        onClick={() => setCounter(counter + increase)}
        className={"counter-button"}
      >
        +
      </button>
      <button
        id={"increase-decrement-button"}
        onClick={() => setIncrease(increase - 1)}
        className={"increase-button"}
      >
        -
      </button>
      {increase}
      <button
        id={"increase-increment-button"}
        onClick={() => setIncrease(increase + 1)}
        className={"increase-button"}
      >
        +
      </button>
    </div>
  )
}

export default UseState;