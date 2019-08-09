import React, { useState } from 'react';

import './App.css';

import FormikLoginForm from './components/LoginForm';
import UsersList from './components/UsersList';

function App() {

  return (
    <div className="App">
      <FormikLoginForm />
      <UsersList />
    </div>
  );
}

export default App;
