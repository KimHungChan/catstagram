import React, { useEffect } from "react";
import { getImages } from "../../Api/Api";

const Home = () => {
  useEffect(() => {
    getImages();
  }, []);
  return <div>We is Home Yo</div>;
};

export default Home;
