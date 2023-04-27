import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, createPost } from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  // On récupère le userId depuis le store avec le hook useSelector
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  // Fonction exécutée au clic sur le bouton "Envoyer" du formulaire
  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      message,
      author: userId,
    };

    axios.post("http://localhost:5500/post/", data);
    dispatch(createPost(data));
    // On envoie ensuite les données au store pour pouvoir récupérer l'id généré par MongoDB
    dispatch(getPosts());
    // Remise à zéro du state message
    setMessage("");
  };

  return (
    <div>
      <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Quoi de neuf ?"
          value={message}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default NewPost;
