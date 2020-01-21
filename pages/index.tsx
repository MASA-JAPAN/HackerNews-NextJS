import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

export default function Index() {
  const [stories, setStories] = useState([{}]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (pageNumber: any) => {
    await axios(`https://node-hnapi.herokuapp.com/news?page=${pageNumber}`)
      .then((response: any) => {
        setStories(response.data);
      })
      .catch(function(error: any) {
        setStories([]);
        console.log(error);
      });
  };

  const handleClick = () => {
    const nextPage = page + 1;
    fetchData(nextPage);
    setPage(nextPage);
  };

  return (
    <div>
      {stories.length > 0 && (
        <Layout backButton={null}>
          <StoryList stories={stories} />
          <footer>
            <button onClick={handleClick}>Click here</button>
          </footer>
        </Layout>
      )}
      {stories.length === 0 && <Error statusCode={503} />}
    </div>
  );
}
