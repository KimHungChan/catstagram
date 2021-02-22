import { deleteVote, upvotePost } from "../../Api/Api";

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
    <button
      onClick={() => {
        // Deleting the previous vote so we don't have as many to compare
        deleteVote(id); // This doesn't seem to remove anything from the vote list
        upvotePost(image_id, isUpvoted ? 0 : 1).then(() => {
          refreshVotes();
        });
      }}
    >
      {isUpvoted ? "upvote" : "downvote"}
    </button>
  );
};

export default Vote;
