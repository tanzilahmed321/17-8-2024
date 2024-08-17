import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screen/Home';
import Createuser from './Screen/Createuser';
import EditUser from './Screen/EditUser'; // Import EditUser component

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<Createuser />} />
      <Route path="/edit/:id" element={<EditUser />} /> {/* Add the Edit route */}
    </Routes>
  );
}

export default App;