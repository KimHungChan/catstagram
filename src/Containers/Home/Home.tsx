import React, { useEffect, useState } from "react";
import { getFavourites, getPosts, getVotes } from "../../Api/Api";
import { FavouriteInterface, PostInterface } from "../../Components/Post/Post";
import Posts from "../../Components/Posts/Posts";
import { VoteInterface } from "../../Components/Vote/Vote";

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
      votes.forEach((vote) => {
        if (vote.image_id === post.id) {
          newPosts[index] = {
            ...newPosts[index],
            vote: vote.value,
            vote_id: vote.id,
          };
        }
      });
    });
    setPosts([...newPosts]);
  }, [favourites, votes]);

  return (
    <div>
      {
        <Posts
          posts={posts}
          refreshVotes={refreshVotes}
          refreshFavourites={refreshFavourites}
        />
      }
    </div>
  );
};

export default Home;
