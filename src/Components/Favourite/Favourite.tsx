import React from "react";
import { favouritePost, unfavouritePost } from "../../Api/Api";
import { PostInterface } from "../../Containers/Post/Post";

interface Props {
  post: PostInterface;
  refreshFavourites: () => void;
}

const Favourite: React.FC<Props> = ({ post, refreshFavourites }) => {
  return (
    <div>
      <button
        onClick={async () => {
          post.favourited
            ? await unfavouritePost(post.favourite_id).then(() =>
                refreshFavourites()
              )
            : await favouritePost(post.id, post.sub_id).then(() =>
                refreshFavourites()
              );
        }}
      >
        {post.favourited ? "Unfavourite" : "Favourite"}
      </button>
    </div>
  );
};

export default Favourite;
