import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Screener } from './features/screener/Screener';
import './App.css';
// import Login from './features/login/Login';
// import Logout from './features/logout/Logout';
// import { useSelector } from 'react-redux';
// import { selectLogged } from './features/login/loginSlice';

// navigate
import Navbar from './features/navbar/Navbar';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectToken } from './features/login/loginSlice';

function App() {
  
  // const token = useSelector(selectToken)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Navbar/>
        <Outlet/>
        
        {/* <Login/> */}
        
        
      </header>
    </div>
  );
}

export default App;
