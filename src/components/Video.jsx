import React, { useRef, useEffect } from 'react';

const Video = ({ src }) => {
  const videoRef = useRef();

  useEffect(() => {
    const handlePlayPause = () => {
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    window.addEventListener("scroll", handlePlayPause);
    return () => {
      window.removeEventListener("scroll", handlePlayPause);
    };
  }, []);

  return <video ref={videoRef} src={src} controls className="w-full rounded-lg" />;
};

export default Video;
