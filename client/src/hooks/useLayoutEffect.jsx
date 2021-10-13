import React, {useLayoutEffect, useEffect, useRef} from 'react';

// useLayoutEffect is called before useEffect

const UseLayoutEffect = () => {

  const inputRef = useRef(null);

  // called before render
  // great for calculating ui changes before things render to the user
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  // called after render
  useEffect(() => {
    inputRef.current.value = "NEW_VALUE"
  }, []);

  return (
    <div id={"use-layout-effect-container"} className={"hook-container"}>
      <h3>useLayoutEffect</h3>
      <input ref={inputRef} readOnly value="DEFAULT_VALUE" />
    </div>
  );
}

export default UseLayoutEffect;