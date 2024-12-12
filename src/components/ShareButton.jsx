import React from 'react';

const ShareButton = ({ post }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.text,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <button onClick={handleShare} className="py-2 px-4 bg-blue-500 text-white rounded-lg">
      Share
    </button>
  );
};

export default ShareButton;
