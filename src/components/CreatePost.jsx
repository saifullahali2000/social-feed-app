import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const { user } = useAuth();

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      text,
      images,
      timestamp: serverTimestamp(),
      userId: user.uid,
      userName: user.displayName,
      userPhoto: user.photoURL,
    });
    setText('');
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit} className="create-post p-4 mb-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        required
      />
      <input type="file" multiple onChange={handleFileChange} className="mb-2" />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">Post</button>
    </form>
  );
};

export default CreatePost;
