import { useEffect, useState } from "react";

const Users = ({ users }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setAllUsers(users);
  }, [users]);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };

    //save this user data to db (via server)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Post successful with data:", data);
        if (data.insertedId) {
          alert("User is added with id", data.insertedId);
          setAllUsers([...allUsers, newUser]);
        }
      });
  };
  const handleDeleteButton=(userId)=>{
    fetch('http://localhost:3000/delete/:2').

  }
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <br />
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={()=>handleDeleteButton(user.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
