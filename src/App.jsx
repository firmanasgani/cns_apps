import React, { useState } from 'react'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)
  const handleLogin = (username) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <div>
      {user ? (
        <div>
          <p>Welcome, {user}! This is homepage</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      </div>
    </>
  );
}

export default App;
