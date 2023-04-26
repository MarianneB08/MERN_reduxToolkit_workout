import axios from "axios";
import React, { useEffect, useState } from "react";

const LikePost = ({ post, userId }) => {
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
      console.log(userLiked);
    }
  }, [userId]);

  const likePost = () => {
    axios.patch(`http://localhost:5500/post/like-post/${post._id}`, { userId });
    setUserLiked(true);
  };

  const dislikePost = () => {
    axios.patch(`http://localhost:5500/post/dislike-post/${post._id}`, { userId });
    setUserLiked(false);
  };
  
  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
