import React from 'react';
import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Users from './Component/Users';
import CreateUsers from './Component/CreateUsers';
import UpdateUsers from './Component/UpdateUsers';



function App() {
 const [count,setCount]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update" element={<UpdateUsers />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
