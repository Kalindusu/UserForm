import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'YlqFP@example.com',
      age: 25,
    },
  ]);

  return (
    <div className="flex h-screen  justify-center items-center">
      <div className="bg-white p-8 rounded-md w-1/3">
      <Link to="/create" className="bg-green-500 text-white px-4 py-1 rounded ">Add User</Link>
        <table className="min-w-full border-collapse ">
          <thead>
            <tr>
              <th className="border-b py-2 px-2 text-left">Name</th>
              <th className="border-b py-2 px-2 text-left">Email</th>
              <th className="border-b py-2 px-2 text-left">Age</th>
              <th className="border-b py-2 px-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-2 px-2">{user.name}</td>
                <td className="py-2 px-2">{user.email}</td>
                <td className="py-2 px-2">{user.age}</td>
                <td className="py-2 px-2">
                  <div className='flex gap-5'>
                <td className="py-2 px-2 flex" >
                  <Link to='/update' className="bg-blue-500 text-white px-4 py-1 rounded mr-2">Edit</Link>
                  <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                  </td>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
