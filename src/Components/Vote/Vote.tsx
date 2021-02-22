import { upvotePost } from "../../Api/Api";

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
    <>
      <button
        onClick={() => {
          upvotePost(image_id, 1).then(() => {
            refreshVotes();
          });
        }}
      >
        {"upvote"}
      </button>
      <button
        onClick={() => {
          upvotePost(image_id, 0).then(() => {
            refreshVotes();
          });
        }}
      >
        {"downvote"}
      </button>
    </>
  );
};

export default Vote;
