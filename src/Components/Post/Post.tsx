import { favouritePost } from "../../Api/Api";
import "./Post.scss";

export interface PostInterface {
  url: string;
  width: number;
  height: number;
  id: string;
  sub_id: string | null;
}

interface Props {
  post: PostInterface;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post-container">
      <img src={post.url} alt="" />
      <button onClick={() => favouritePost(post.id, post.sub_id)}>
        Favourite
      </button>
    </div>
  );
};

export default Post;
