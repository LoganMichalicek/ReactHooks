import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

export default function UseMemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // this recomputes EVERY RENDER... unless it's memoized!
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This long function was computed within useMemo, but only once!");

    return longestName;
  };

  // we can memoize the function call so that it keeps track of the function (and result)
  // between renders, meaning more time can be saved as states change!

  // similar to useEffect, the second argument contains an array of states to 'watch'
  // having no array means that the function will fire every render, defeating the point
  // having an empty array means that the function is only called on initial render, and the
  // result of the function is still readily available
  // having item(s) in the array will refire the function when the state(s) change

  // in this example, this function will refire when data is changed,
  // but will remain intact if any other states update (such as toggle)
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div id={"use-context-container"} className={"hook-container"}>
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}