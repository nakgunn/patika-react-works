import './App.css';
import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import User from './components/User'
import Error404 from './components/Error404'
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  return (
    
    <Router>
    <div>
      <ul>
        <li> <NavLink end to="/"  className={({ isActive }) => isActive ? "active" : undefined}> Home </NavLink></li>
        <li> <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}> About </NavLink></li>
        <li> <NavLink to="/users" className={({ isActive }) => isActive ? "active" : undefined}> Users </NavLink></li>
      </ul>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
      <Route path="users" element={<Users />}>
        <Route path=":id" element={<User />} />
      </Route>
    <Route path="*" element={<Error404 />}/>
    </Routes>
    </div>
  </Router>
  );
}




export default App;
