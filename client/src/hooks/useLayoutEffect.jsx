import React, {useLayoutEffect, useEffect, useRef} from 'react';

// useLayoutEffect is called before useEffect

const UseLayoutEffect = () => {

  const inputRef = useRef(null);

  // called before render
  // great for calculating ui changes before things render to the user
  useLayoutEffect(() => {
    console.log("useLayoutEffect value before render:", inputRef.current.value);
  }, []);

  // called after render
  useEffect(() => {
    inputRef.current.value = "NEW_VALUE";
    console.log("useLayoutEffect value after render:", inputRef.current.value);
  }, []);

  return (
    <div id={"use-layout-effect-container"} className={"hook-container"}>
      <h3>useLayoutEffect</h3>
      <p>Check the console for the before/after render values</p>
      <input ref={inputRef} readOnly value="DEFAULT_VALUE" />
    </div>
  );
}

export default UseLayoutEffect;