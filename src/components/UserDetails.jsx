import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const handleUpdateUser=(e)=> {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    fetch(`http://localhost:3000/users/${user._id}`, {
        
        
    })

  }
  return (
    <div>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Update User" />
      </form>
      <h1>User Details</h1>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  );
};

export default UserDetails;
