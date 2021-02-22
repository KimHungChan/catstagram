import { useEffect, useState } from "react";
import { getFavourites, getPosts, getVotes } from "../../Api/Api";
import { VoteInterface } from "../../Components/Vote/Vote";
import { FavouriteInterface, PostInterface } from "../Post/Post";
import Posts from "../Posts/Posts";

const Home = () => {
  const [postsResponse, setPostsResponse] = useState<[PostInterface]>(
    [] as any
  );
  const [favourites, setFavourites] = useState<[FavouriteInterface]>([
    [] as any,
  ]);
  const [posts, setPosts] = useState<[PostInterface]>([] as any);
  const [votes, setVotes] = useState<[VoteInterface]>([] as any);

  const refreshFavourites = () => {
    getFavourites().then((response: any) => {
      setFavourites(response);
    });
  };

  const refreshVotes = () => {
    getVotes().then((response: any) => {
      setVotes(response);
    });
  };

  useEffect(() => {
    getVotes().then((response: any) => {
      setVotes(response);
    });
    getPosts().then((response: any) => {
      setPostsResponse(response);
    });
  }, []);

  useEffect(() => {
    refreshFavourites();
  }, [postsResponse]);

  useEffect(() => {
    let newPosts: [PostInterface] = postsResponse;
    postsResponse.forEach((post, index) => {
      let notFavourite: boolean = true;
      favourites.forEach((favourite) => {
        if (favourite.image_id === post.id) {
          notFavourite = false;
          newPosts[index] = {
            ...post,
            favourited: true,
            favourite_id: favourite.id,
          };
        }
      });
      if (notFavourite) {
        newPosts[index] = {
          ...post,
          favourited: false,
          favourite_id: undefined,
        };
      }
      let numberOfVotes = 0;
      votes.forEach((vote) => {
        if (vote.image_id === post.id) {
          newPosts[index] = {
            ...newPosts[index],
            vote: vote.value,
            vote_id: vote.id,
          };
          vote.value === 1 ? numberOfVotes++ : numberOfVotes--;
        }
      });
      newPosts[index] = {
        ...newPosts[index],
        votes: numberOfVotes,
      };
    });
    setPosts([...newPosts]);
  }, [favourites, votes]);

  return (
    <Posts
      posts={posts}
      refreshVotes={refreshVotes}
      refreshFavourites={refreshFavourites}
    />
  );
};

export default Home;
