import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const NewPost = () => {
  const [message, setMessage] = useState("");
  // On récupère le userId depuis le store avec le hook useSelector
  const userId = useSelector((state) => state.user.userId)

  // Fonction exécutée au clic sur le bouton "Envoyer" du formulaire
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/post/", {
      message,
      author: userId,
    });
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
