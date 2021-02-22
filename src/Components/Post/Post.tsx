import Favourite from "../Favourite/Favourite";
import Vote from "../Vote/Vote";
import "./Post.scss";

export interface PostInterface {
  url: string;
  width: number;
  height: number;
  id: string;
  sub_id: string | null;
  favourited?: boolean;
  favourite_id?: number | undefined;
  vote: number;
  vote_id: number;
}

export interface FavouriteInterface {
  id: number;
  image_id: string;
  sub_id: string | null;
}

interface Props {
  post: PostInterface;
  refreshVotes: () => void;
  refreshFavourites: () => void;
}

const Post: React.FC<Props> = ({ post, refreshVotes, refreshFavourites }) => {
  return (
    <div className="post-container">
      <img src={post.url} alt="" />

      <Favourite post={post} refreshFavourites={refreshFavourites} />
      <Vote
        image_id={post.id}
        value={post.vote}
        id={post.vote_id}
        refreshVotes={refreshVotes}
      />
    </div>
  );
};

export default Post;
