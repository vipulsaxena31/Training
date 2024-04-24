import React, { useContext, useState } from 'react';
import { User } from "./UserContext";

const UserReciever = () => {
  const userInfo = useContext(User); 
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeUsername = (e) => {
    setInputUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUsername === userInfo.username && inputPassword === userInfo.password) {
      setIsLogin(true);
    }
    setInputUsername("");
    setInputPassword("");
  };

  return (
    <>
      {isLogin ? (
        <>
          <h1>Username: {userInfo.username}</h1>
          <h1>Password: {userInfo.password}</h1>
          <button onClick={() => setIsLogin(false)}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Enter username:</label>
          <input 
            type="text" 
            value={inputUsername} 
            onChange={handleChangeUsername} 
          />
          <br/>
          <label>Enter password:</label>
          <input 
            type="password" 
            value={inputPassword} 
            onChange={handleChangePassword} 
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default UserReciever;
