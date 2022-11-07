import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {NavLink, Outlet } from 'react-router-dom';
function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .finally(() => setLoading(false))
  }, []);

  return (
    <div>
       <h1> Users </h1>        
       <nav>
        <ul>
        {loading && 
          <div>Loading...</div>
        }
        {!loading &&
            users.map((user) => (
              <li key={user.id}><NavLink  to={`/users/${user.id}`}  className={({ isActive }) => isActive ? "active" : undefined}> {user.name} </NavLink></li>
            ))
          }
        </ul>
      </nav> 
          
      <Outlet />

    </div>
  )
}

export default Users