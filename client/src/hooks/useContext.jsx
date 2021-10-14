import React, {useState, createContext} from 'react';
import Login from './subcomponents/Login.jsx';
import User from './subcomponents/User.jsx';

export const AppContext = createContext(null);

const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
      <div id={"use-context-container"} className={"hook-container"}>
        <h3>useContext</h3>
        <Login />
        <User />
      </div>
    </AppContext.Provider>
  )
}

export default UseContext;