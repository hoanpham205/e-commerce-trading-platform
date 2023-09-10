import React from 'react';
import { CommentSection } from 'react-comments-section';
import { useSelector } from "react-redux";

const CommentBox = () => {
    const user = useSelector((state) => state.auth.login.currentUser);

    return {user && } 
}

export default CommentBox;
