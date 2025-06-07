import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './Components/form';
import ListUser from './Components/listUser';
import {  Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ImageUpload from './Components/imageUpload';
import Dashboard from './Components/DashboardComponents/dashboard';
import Admin from './Components/admin';
import Navbar from './Components/navbar';

function App() {
  const [showsidebar ,setShowsidebar]=useState<boolean>(true);
  const closeWhenClickAnyWay=()=>{
    const state=!showsidebar;
    setShowsidebar(state);
  }

  return (
    
     
      <Router>
         {/* <Navbar state/> */}
        <Routes>
            <Route path='/' element={<Navbar state />}/>
            <Route path='/admin' element={<Dashboard />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/list' element={<ListUser/>}/>
            <Route path='/upload-image' element={<ImageUpload/>}/>
            <Route path='*' element={<Dashboard/>}/>
        </Routes>
      </Router>
    

  );
}

export default App;
