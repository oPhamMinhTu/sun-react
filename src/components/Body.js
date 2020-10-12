import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class Body extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "Minh Tu",
        email: "minhtu12394@gmail.com"
      },
      {
        id: 2,
        name: "Nguyen Van A",
        email: "nguyen.van.a@example.com"
      }
    ],
    showInput: true
  }

  addUser = user => {
    if (!user)
      return;

    const newUserList = [...this.state.users, user];
    this.setState({users: newUserList});
  }

  render () {
    return (
      <div>
        <UserForm onFormSubmit={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Body
