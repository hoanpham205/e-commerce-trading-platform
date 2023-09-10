import React from 'react';
import { CommentSection } from 'react-comments-section';
import { useSelector } from "react-redux";

const CommentBox = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    return <CommentSection
    currentUser={{
      currentUserId: user.userId, 
      currentUserImg:
        user.avatar,
      currentUserFullName: user.username
    }}
    // commentData={this.state.data}
    // onSubmitAction={(data) => this.onSubmitAction(data)}
    // customNoComment={() => this.customNoComment()}
  />
}

export default CommentBox;
