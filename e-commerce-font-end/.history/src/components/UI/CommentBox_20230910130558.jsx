import React from 'react';

const CommentBox = () => {
    return <CommentSection
    currentUser={{
      currentUserId: '01a',
      currentUserImg:
        'https://ui-avatars.com/api/name=Riya&background=random',
      currentUserProfile:
        'https://www.linkedin.com/in/riya-negi-8879631a9/',
      currentUserFullName: 'Riya Negi'
    }}
    commentData={this.state.data}
    onSubmitAction={(data:any) => this.onSubmitAction(data)}
    customNoComment={() => this.customNoComment()}
    logIn={{
      loginLink: 'http://localhost:3001/',
      signupLink: 'http://localhost:3001/'
    }}
  />
}

export default CommentBox;
