import React from 'react';

function App() {
  const user = { name: 'John', age: 30, email: 'john@example.com' };

  return (
    <div>
      <Header user={user} />
      <Main user={user} />
      <Footer user={user} />
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
    </header>
  );
}

function Main({ user }) {
  return (
    <main>
      <h2>User Info:</h2>
      <UserInfo user={user} />
    </main>
  );
}

function UserInfo({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function Footer({ user }) {
  return (
    <footer>
      <p>Contact: {user.email}</p>
    </footer>
  );
}

export default App