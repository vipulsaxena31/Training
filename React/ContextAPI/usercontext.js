import React,{createContext} from 'react'
import UserReciever from './UserReciever'
export const User=createContext();
const UserContext = () => {
    const userInfo={
        username:"atul",
        password:"12345"
    }
  return (
    
    <User.Provider value={userInfo}>
       <UserReciever />
    </User.Provider>
  )
}

export default UserContext
