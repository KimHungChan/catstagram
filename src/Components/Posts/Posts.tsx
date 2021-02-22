import React from "react";
import Post, { PostInterface } from "../Post/Post";
import "./Posts.scss";

interface Props {
  posts: [PostInterface];
  refreshVotes: () => void;
  refreshFavourites: () => void;
}

const Posts: React.FC<Props> = ({ posts, refreshVotes, refreshFavourites }) => {
  return (
    <div className="posts-container">
      {posts.map((post, key) => (
        <Post
          key={key}
          post={post}
          refreshVotes={refreshVotes}
          refreshFavourites={refreshFavourites}
        />
      ))}
    </div>
  );
};

export default Posts;
