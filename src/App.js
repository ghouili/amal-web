import './App.css';
import { useContext, useState } from 'react';
import { MainContext } from './Hooks/Context/MainContext';
import { useLocation } from 'react-router-dom';

import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import Mainroute from './Routes/Mainroute';

function App() {

  const location = useLocation();
  const { sideBaropen } = useContext(MainContext);
  
  return (
    <div className="App">
      <nav >
      {location.pathname === '/login' || location.pathname === '/register' ? 
        <>
        </>
      :
        <NavBar />
      }
      </nav>
      <main>
        {location.pathname === '/login' || location.pathname === '/register' ? 
          <>
          </>
        :
          <SideBar />
        } 
        <div className={ sideBaropen ? 'main active' : 'main'}>
          <Mainroute />
        </div>
      </main>
    </div>
  );
}

export default App;
