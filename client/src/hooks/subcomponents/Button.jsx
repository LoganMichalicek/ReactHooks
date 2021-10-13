import React, {forwardRef, useImperativeHandle, useState} from 'react';

// Provides state change capabilities to a parent component
// Here's the process:
// 1. The parent has a reference to the child component using useRef
//    a. Note that it is passed similarly to a prop as ref={childRef}
// 2. Wrap the child component in a forwardRef, and list ref as the second argument after props
// 3. Call useImperativeHandle with the ref as the first argument, and the second argument is an
//    OBJECT, containing functions for the parent to utilize
// 4. In the parent, change the state by using childRef.current.FUNCTION_NAME

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <>
      <button onClick={() => {setToggle(!toggle)}}>Button from Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;