import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";

const Thread = () => {
  const dispatch = useDispatch();
  // On récupère les données du post depuis le store avec le hook useSelector
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
     dispatch(getPosts());
  }, []);

  return (
    <div className="thread-container">
      {posts &&
        posts
          // La méthode slice() à vide permet ensuite d'utiliser les méthodes sort() et map() sans bug
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
};

export default Thread;
