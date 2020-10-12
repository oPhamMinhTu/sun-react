import React from 'react';

const UserItem = ({user}) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  );
}

export default UserItem;
