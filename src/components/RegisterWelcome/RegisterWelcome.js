import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const RegisterWelcome = () => {
  const { user } = useAuth;
    return (
      <div>
        <p>Registration was successful</p>
        <p>Welcome {user.name}</p>
      </div>
    );
};
