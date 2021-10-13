import React, {useRef} from 'react';

// UseRef is essentially a way to reference dom elements as variables
// Set a variable to useRef, then set ref={that_variable} in the element
// Now, you can use element.current to access the properties of the dom element!

const UseRef = function () {

  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    outputRef.current.innerText = inputRef.current.value;
    inputRef.current.value = "";
  }

  return (
    <div id={"use-ref-container"} className={"hook-container"}>
      <h3>useRef</h3>
      <input type="text" placeholder="Ex..." ref={inputRef}/>
      <button onClick={onClick}>Change Name</button>
      <p ref={outputRef}> </p>
    </div>
  );
}

export default UseRef;