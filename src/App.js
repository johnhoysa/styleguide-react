import React, { Component } from 'react';

import Routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'State Design System',
      home: false,
    };
  }

  render() {
    return (
      <div className="">
        <div className="">
          <Routes name={this.state.appName} />
        </div>
      </div>
    );
  }
}

export default App;
