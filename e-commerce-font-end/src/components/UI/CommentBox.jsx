import axios from "axios";
import React from "react";
import { CommentSection } from "react-comments-section";
import { useSelector } from "react-redux";
import { endpoints } from "../../configs/Apis";
import { useEffect } from "react";
import { useState } from "react";

const CommentBox = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(endpoints['comments']).then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  const handleSubmitComment = (newComment) => {
    console.log('new comment', newComment)
    const newData = [...data, newComment]
    setData(newData)
    axios.post(endpoints['comments'], newComment).then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      {user && (
        <CommentSection
          currentUser={{
            currentUserId: user.id,
            currentUserImg: user.avatar,
            currentUserFullName: user.username,
          }}
          commentData={data}
        onSubmitAction={handleSubmitComment}
        currentData={(data) => {
          console.log(data);
        }}
          // commentData={this.state.data}
          // onSubmitAction={(data) => this.onSubmitAction(data)}
          // customNoComment={() => this.customNoComment()}
        />
      )}
    </>
  );
};

export default CommentBox;
