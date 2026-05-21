import { useState, useEffect, Suspense } from 'react';

import './App.css'
import Users from './components/Users'

function App() {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  console.log("Users in app: ", users)

  return (
    <>
      <h1>Simple Crud</h1>
      <Suspense fallback={<p>Loading....</p>}>
      <Users users={users} ></Users>
      </Suspense>
      
    </>
  )
}

export default App
