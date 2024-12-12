import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs, startAfter } from "firebase/firestore";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"), limit(20));
    const snapshot = await getDocs(q);
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    setLastDoc(lastVisible);

    const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(postsData);
  };

  const fetchMorePosts = async () => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"), startAfter(lastDoc), limit(20));
    const snapshot = await getDocs(q);
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    setLastDoc(lastVisible);

    const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(prevPosts => [...prevPosts, ...postsData]);

    if (snapshot.docs.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more posts to show</p>}
    >
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default Feed;
