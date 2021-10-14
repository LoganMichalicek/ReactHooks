import React from 'react';
import ReactDOM from 'react-dom';

import UseState from './hooks/useState.jsx';
import UseReducer from './hooks/useReducer.jsx';
import UseEffect from './hooks/useEffect.jsx';
import UseRef from './hooks/useRef.jsx';
import UseLayoutEffect from './hooks/useLayoutEffect.jsx';
import UseImperativeHandle from './hooks/useImperativeHandle.jsx';
import UseContext from './hooks/useContext.jsx';
import UseMemo from './hooks/useMemo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UseState />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseLayoutEffect />
        <UseImperativeHandle />
        <UseContext />
        <UseMemo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));