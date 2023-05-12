import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

import Navbar from "./Navbar";

import { AuthContext } from "../contexts/AuthContextProvider";

import styles from "./Chats.module.css";

const Chats = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "342b6c42-d959-487b-9257-f53b7c3933cc",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "e91a4779-e06d-4997-aa3b-a7a5d0fa5172",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="342b6c42-d959-487b-9257-f53b7c3933cc"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};


export default Chats;
