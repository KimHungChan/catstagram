import { upvotePost } from "../../Api/Api";
import "./Vote.scss";

export interface VoteInterface {
  image_id: string;
  value: number;
  id: number;
}

interface Props {
  image_id: string;
  value: number;
  id: number;
  refreshVotes: () => void;
}

const Vote: React.FC<Props> = ({ image_id, value, id, refreshVotes }) => {
  const isUpvoted = value === 1;
  return (
    <div className="vote-container">
      <button
        className="up"
        onClick={() => {
          upvotePost(image_id, 1).then(() => {
            refreshVotes();
          });
        }}
      ></button>
      <button
        className="down"
        onClick={() => {
          upvotePost(image_id, 0).then(() => {
            refreshVotes();
          });
        }}
      ></button>
    </div>
  );
};

export default Vote;
