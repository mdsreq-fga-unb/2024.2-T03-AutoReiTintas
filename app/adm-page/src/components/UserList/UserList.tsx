import React from 'react';
import UserRow from './UserRow';

const UserList = ({ usuarios }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <UserRow key={usuario.id} usuario={usuario} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
