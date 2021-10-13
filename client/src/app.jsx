import React from 'react';
import ReactDOM from 'react-dom';

import UseState from './hooks/useState.jsx';
import UseReducer from './hooks/useReducer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UseState />
        <UseReducer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));