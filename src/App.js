import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (user, age) => {
    setUsers((prev)=>[...prev, {user, age, id: Math.random().toString()}])
  }

  return (
    <div>
      <AddUser onAddUsers={addUsersHandler}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
