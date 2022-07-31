import React from "react";
import Header from "./Components/Header"
import Button from "./Components/Button"
import Users from "./Components/Users"
import { useState } from "react";






function App() {
  const [users,setUsers] = useState([
    {
      "id": 1,
      "name": "Muhammad Hasnain",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "reminder": "true"
    },
    {
      "id": 2,
      "name": "Muhammad Farooq",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "reminder": "true"
    },
    {
      "id": 3,
      "name": "Muhammad Ibrahim",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "reminder": "true"
    }
  ])

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id))
  }

  const toggleUser = (id) => {
    setUsers(users.map((user) => user.id == id ? {...user, reminder: !user.reminder} : user))
  }

  return (
    <>
      <Header name = 'Hasnain'/>
      <Button/>
      {users.length > 0 ?
      <Users users={users} onDelete={deleteUser} onToggle={toggleUser} /> : 'No Users to Show'}
    </>
  );
}

export default App;
