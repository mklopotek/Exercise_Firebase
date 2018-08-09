import React, { Component } from 'react';
import UserList from './UserList/UserList';
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <div>
      <Auth>
        <UserList />
      </Auth>
      </div>
    );
  }
}

export default App;
