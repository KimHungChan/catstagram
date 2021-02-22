import Favourite from "../../Components/Favourite/Favourite";
import Score from "../../Components/Score/Score";
import Vote from "../../Components/Vote/Vote";
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
      <div className="content-container">
        <div className="image-container">
          <img src={post.url} alt="" />
        </div>

        <Favourite post={post} refreshFavourites={refreshFavourites} />
        <Vote
          image_id={post.id}
          value={post.vote}
          id={post.vote_id}
          refreshVotes={refreshVotes}
        />
        {post.votes && <Score score={post.votes} />}
      </div>
    </div>
  );
};

export default Post;
