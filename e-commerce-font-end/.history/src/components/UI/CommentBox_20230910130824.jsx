import React from 'react';
import { CommentSection } from 'react-comments-section';
import { Selector } from '@reduxjs/toolkit';

const CommentBox = () => {
    return <CommentSection
    currentUser={{
      currentUserId: cu,
      currentUserImg:
        'https://ui-avatars.com/api/name=Riya&background=random',
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
