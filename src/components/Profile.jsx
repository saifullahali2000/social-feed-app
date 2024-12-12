import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const { user } = useAuth();
  const [bio, setBio] = useState(user?.bio || '');

  const handleUpdateProfile = async () => {
    await updateDoc(doc(db, "users", user.uid), { bio });
  };

  return (
    <div className="profile p-4 mb-4 bg-white rounded-lg shadow-md">
      <img src={user.photoURL} alt={user.displayName} className="w-24 h-24 rounded-full" />
      <h1 className="text-lg font-bold">{user.displayName}</h1>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Tell us about yourself"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <button onClick={handleUpdateProfile} className="w-full py-2 bg-blue-500 text-white rounded-lg">
        Update Profile
      </button>
      <h2 className="mt-4 text-lg font-bold">My Posts</h2>
    </div>)
}

export default Profile
