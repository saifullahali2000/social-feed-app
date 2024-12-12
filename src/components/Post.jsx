import React from 'react';
import Video from './Video';

const Post = ({ post }) => (
  <div className="post p-4 mb-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-bold">{post.userName}</h2>
    <p>{post.text}</p>
    {post.images && post.images.map((image, index) => (
      <img key={index} src={image} alt="Post" className="my-2 w-full rounded-lg" />
    ))}
    {post.video && <Video src={post.video} />}
  </div>
);

export default Post;
