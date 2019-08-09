import React, { useState } from 'react';

import './App.css';

import FormikLoginForm from './components/LoginForm';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <FormikLoginForm />
      <UsersList />
    </div>
  );
}

export default App;
