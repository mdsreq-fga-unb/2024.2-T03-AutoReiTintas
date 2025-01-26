import React from 'react';

const UserRow = ({ usuario }) => {
  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nome}</td>
      <td>{usuario.email}</td>
      <td>{usuario.telefone}</td>
    </tr>
  );
};

export default UserRow;
