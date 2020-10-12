import React from 'react';
import UserItem from './UserItem'
const UserList = ({ users }) => {
  const renderedList = users.map((user) => {
    return <UserItem user={user} key={user.id} />;
  })

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {renderedList}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
