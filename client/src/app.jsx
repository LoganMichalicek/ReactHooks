import React from 'react';
import ReactDOM from 'react-dom';

import UseState from './hooks/useState.jsx';
import UseReducer from './hooks/useReducer.jsx';
import UseEffect from './hooks/useEffect.jsx';
import UseRef from './hooks/useRef.jsx';
import UseLayoutEffect from './hooks/useLayoutEffect.jsx';

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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));