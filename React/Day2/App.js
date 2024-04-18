import React, { useState } from 'react';
import Greeting from './Components/Greeting';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Log In</button>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
};

export default App;
