import React from 'react';
import { useAuth } from '../context/AuthContext';

const Auth = () => {
  const { user, loginWithGoogle, logout } = useAuth();

  

  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      ) : (
        <button onClick={loginWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">Login with Google</button>
      )}
    </div>
  );
};

export default Auth;
