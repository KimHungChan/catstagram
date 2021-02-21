import React from "react";
import Post, { PostInterface } from "../Post/Post";
import "./Posts.scss";

interface Props {
  posts: [PostInterface];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
