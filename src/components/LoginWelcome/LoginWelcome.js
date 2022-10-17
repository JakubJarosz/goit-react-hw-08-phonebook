import React from 'react'
import { useAuth } from "../../hooks/useAuth";

export const LoginWelcome = () => {
    const { user } = useAuth;
  return (
      <div>
          Welcome {user.name}
    </div>
  )
}



