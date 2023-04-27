import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import LikePost from "./LikePost";
import DeletePost from "./DeletePost";

const Post = ({ post}) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  // On récupère le userId depuis le store avec le hook useSelector
  const userId = useSelector((state) => state.user.userId)

  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [userId, post.author]);

  // Fonction pour gérer la modification d'un post
  const handleEdit = () => {
    if (newMessage) {
      axios.put("http://localhost:5500/post/" + post._id, {
        message: newMessage,
      });
    }
  };

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>Posté le {dateFormater(post.createdAt)}</p>
      </div>
      {isEdit ? (
        <div className="edit-container">
          <textarea
            defaultValue={post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              setIsEdit(false);
              handleEdit();
            }}
          >
            Modifier
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}

      <div className="icons-part">
        <LikePost post={post} userId={userId} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                setIsEdit(!isEdit);
                handleEdit();
              }}
            >
              &#10000;
            </span>
            <DeletePost postId={post._id}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
