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
      currentUserProfile:
        'https://www.linkedin.com/in/riya-negi-8879631a9/',
      currentUserFullName: 'Riya Negi'
    }}
    // commentData={this.state.data}
    // onSubmitAction={(data) => this.onSubmitAction(data)}
    // customNoComment={() => this.customNoComment()}
  />
}

export default CommentBox;
