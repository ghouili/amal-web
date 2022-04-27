import React from 'react'
import {Routes, Route} from 'react-router-dom';

import ReaquiredAuth from '../Pages/Authentification/ReaquiredAuth';
import Dashboard from '../Pages/Dashboard';
import Demande from '../Pages/teacher/Demande';
import Schedules from '../Pages/teacher/Schedules';
import Login from '../Pages/Authentification/Login';
import Register from '../Pages/Authentification/Register';
import HomePage from '../Pages/HomePage';


const Mainroute = () => {
  return (
    <Routes>
        <Route 
            path='/' 
            element={
                // <ReaquiredAuth>
                    <HomePage />
                // </ReaquiredAuth>
            } 
        />
        <Route 
            path='/demande' 
            element={
                // <ReaquiredAuth>
                    <Demande />
                // </ReaquiredAuth>
            } 
        />
        <Route 
            path='/schedule' 
            element={
                // <ReaquiredAuth>
                    <Schedules />
                // </ReaquiredAuth>
            } 
        />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Mainroute