import { useState } from "react";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

  // const user = {
  //   id: 123,
  //   name: 'Manuel Sarria',
  //   email: 'manuel.sarria@gmail.com'
  // }

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
       { children }
    </UserContext.Provider>
  )
}
