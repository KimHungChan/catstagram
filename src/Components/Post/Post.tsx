import Favourite from "../Favourite/Favourite";
import Score from "../Score/Score";
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
  votes?: number;
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
      {post.votes && <Score score={post.votes} />}
    </div>
  );
};

export default Post;
