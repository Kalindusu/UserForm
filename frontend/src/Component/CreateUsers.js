import React, { useState } from 'react';

const CreateUsers = () => {
  

  

  
 

  return (
    
    <div className="flex flex-col h-screen bg-blue-500 justify-center items-center">

      <div className="bg-white p-8 rounded-md w-1/3 mb-8">
        <form >
          <h1 className='text-2xl py-5 text-black-1000'>Add User</h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your age"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
          >
            Submit
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default CreateUsers;
