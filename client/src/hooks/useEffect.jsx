import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseEffect = function () {

  // useEffect is run whenever the states in this component update
  // (which means that it also runs when the component is mounted)
  // however, adding a second parameter changes this
  // the second parameter of useEffect is an array of state objects that trigger this effect,
  // so if I add 'data' to this array, it will only fire when data is updated.
  // an empty array means it will not run again
  // having no second parameter assumes that it should run anytime ANY local state changes

  // const [email, setEmail] = useState("");

  // // This only fires once
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       setData(response.data[0].email);
  //     });
  // }, []);

  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(1);
  const [titleColor, setTitleColor] = useState("");

  useEffect(() => {
    // Called only once when rendered
    // Empty array for second parameter
    // console.log('counter, increase');
  }, []);

  useEffect(() => {
    // Called anytime any local storage is changed and on render
    // No second parameter
    // console.log('A state changed!');
  });

  useEffect(() => {
    // Called anytime counter is changed, but not any other state (and on render)
    // Array in second parameter containing states to 'watch'
    if (counter >= 10 && titleColor !== "green") {
      setTitleColor("green");
    } else if (counter <= -10 && titleColor !== "red") {
      setTitleColor("red");
    } else if (counter > -10 && counter < 10 && titleColor !== "") {
      setTitleColor("");
    }
  }, [counter]);

  useEffect

  return (
    <div id={"use-effect-container"} className={"hook-container"}>
      <h3
        id={"hook-name"}
        className={titleColor}
      >
        useEffect
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
  );
}

export default UseEffect;