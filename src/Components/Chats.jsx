import React from 'react';
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';

import Navbar from './Navbar';

import styles from "./Chats.module.css";

const Chats = () => {
    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="342b6c42-d959-487b-9257-f53b7c3933cc"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;