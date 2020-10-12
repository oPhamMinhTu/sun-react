import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component{
  render () {
    return (
      <div className="ui container" style={{margin: "40px auto", width: "600px"}}>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App
