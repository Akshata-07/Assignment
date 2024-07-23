import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1>Spring Boot and React Application</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
