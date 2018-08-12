import React, { Component } from 'react';
import UserList from './UserList/UserList';
import Auth from './Auth'

class App extends Component {
  render() {
const styles = {
  width:'90%',
  margin: 'auto'

}

    return (
      <div style={styles}>
      <Auth>
        <UserList />
      </Auth>
      </div>
    );
  }
}

export default App;
