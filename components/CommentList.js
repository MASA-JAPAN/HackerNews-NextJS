import React, { useState, useEffect } from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <React.Fragment>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </React.Fragment>
  );
}
