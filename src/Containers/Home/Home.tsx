import React, { useEffect, useState } from "react";
import { getImages } from "../../Api/Api";
import { PostInterface } from "../../Components/Post/Post";
import Posts from "../../Components/Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState<[PostInterface]>([
    { url: "", width: 0, height: 0, id: "", sub_id: null },
  ]);

  useEffect(() => {
    getImages().then((response: any) => {
      setPosts(response);
    });
  }, []);
  return <div>{<Posts posts={posts} />}</div>;
};

export default Home;
