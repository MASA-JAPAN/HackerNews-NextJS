import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }: { comments: any }) {
  return (
    <React.Fragment>
      {comments.map((comment: any) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </React.Fragment>
  );
}
