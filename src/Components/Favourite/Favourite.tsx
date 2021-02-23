import React from "react";
import { favouritePost, unfavouritePost } from "../../Api/Api";
import { PostInterface } from "../../Containers/Post/Post";
import "./Favourite.scss";

interface Props {
  post: PostInterface;
  refreshFavourites: () => void;
}

const Favourite: React.FC<Props> = ({ post, refreshFavourites }) => {
  return (
    <button
      className={"favourite" + (post.favourited ? " active" : " unactive")}
      onClick={async () => {
        post.favourited
          ? await unfavouritePost(post.favourite_id).then(() =>
              refreshFavourites()
            )
          : await favouritePost(post.id).then(() => refreshFavourites());
      }}
    ></button>
  );
};

export default Favourite;
