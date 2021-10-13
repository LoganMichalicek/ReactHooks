import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + state.increase};
    case "DECREMENT":
      return {...state, count: state.count - state.increase};
    case "RAISE_INCREASE":
      return {...state, increase: state.increase + 1};
    case "REDUCE_INCREASE":
      return {...state, increase: state.increase - 1};
    default:
      return state;
  }
}

const UseReducer = function () {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    increase: 1
  });

  return (
    <div id={"use-state-container"} className={"hook-container"}>
      <h3
        id={"hook-name"}
        className={state.count >= 10 ? 'green' : state.count <= -10 ? 'red' : ''}
      >
        useReducer
      </h3>
      <button
        id={"counter-decrement-button"}
        onClick={() => dispatch({type: "DECREMENT"})}
        className={"counter-button"}
      >
        -
      </button>
      {state.count}
      <button
        id={"counter-increment-button"}
        onClick={() => dispatch({type: "INCREMENT"})}
        className={"counter-button"}
      >
        +
      </button>
      <button
        id={"increase-decrement-button"}
        onClick={() => dispatch({type: "REDUCE_INCREASE"})}
        className={"increase-button"}
      >
        -
      </button>
      {state.increase}
      <button
        id={"increase-increment-button"}
        onClick={() => dispatch({type: "RAISE_INCREASE"})}
        className={"increase-button"}
      >
        +
      </button>
    </div>
  )
}

export default UseReducer;