import React from 'react';
import ReactDOM from 'react-dom';

import UseState from './hooks/useState.jsx';
import UseReducer from './hooks/useReducer.jsx';
import UseEffect from './hooks/useEffect.jsx';

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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));