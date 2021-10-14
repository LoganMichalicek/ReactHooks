import React, {useRef} from 'react';
import Button from './subcomponents/Button.jsx';

// See subcomponents/Button.jsx for more information

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div id={"use-imperative-handle-container"} className={"hook-container"}>
      <h3>useimperativeHandle</h3>
      <button onClick={() => {buttonRef.current.toggle()}}>Button from Parent</button>
      <Button ref={buttonRef}/>
    </div>
  );
}

export default UseImperativeHandle;