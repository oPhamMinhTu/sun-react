import React from 'react';


const currentTime = new Date().toLocaleTimeString();
class Header extends React.Component {

  render () {
    return (
      <div style={{ display: 'flex', border: '1px solid black', margin: '0 auto', height: '40px' }}>
        <h1>Header</h1>
        <div style={{
          position: 'absolute',
          right: '500px',
          width: '200px' }}>
          {currentTime}
        </div>
      </div>
    );
  }
}

export default Header
