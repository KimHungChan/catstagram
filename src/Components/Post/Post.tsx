import { favouritePost, unfavouritePost } from "../../Api/Api";
import "./Post.scss";

export interface PostInterface {
  url: string;
  width: number;
  height: number;
  id: string;
  sub_id: string | null;
  favourited?: boolean;
  favourite_id?: number;
}

export interface FavouriteInterface {
  id: number;
  image_id: string;
  sub_id: string | null;
}

interface Props {
  post: PostInterface;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post-container">
      <img src={post.url} alt="" />
      {post.favourited ? (
        <button onClick={() => unfavouritePost(post.favourite_id)}>
          Unfavourite
        </button>
      ) : (
        <button onClick={() => favouritePost(post.id, post.sub_id)}>
          Favourite
        </button>
      )}
    </div>
  );
};

export default Post;
