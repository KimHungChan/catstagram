import React, { useEffect, useState } from "react";
import { getFavourites, getPosts } from "../../Api/Api";
import { FavouriteInterface, PostInterface } from "../../Components/Post/Post";
import Posts from "../../Components/Posts/Posts";

const Home = () => {
  const [postsResponse, setPostsResponse] = useState<[PostInterface]>(
    [] as any
  );
  const [favourites, setFavourites] = useState<[FavouriteInterface]>([
    [] as any,
  ]);
  const [posts, setPosts] = useState<[PostInterface]>([] as any);

  const refreshFavourites = () => {
    getFavourites().then((response: any) => {
      setFavourites(response);
    });
  };

  useEffect(() => {
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
      favourites.forEach((favourite) => {
        if (favourite.image_id === post.id) {
          newPosts[index] = {
            ...post,
            favourited: true,
            favourite_id: favourite.id,
          };
        }
      });
    });
    setPosts(newPosts);
  }, [favourites]);

  return <div>{<Posts posts={posts} />}</div>;
};

export default Home;
