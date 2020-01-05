import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import axios from "axios";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

export default function Index() {
  const [stories, setStories] = useState([{}]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async pageNumber => {
    const result = await axios(
      `https://node-hnapi.herokuapp.com/news?page=${pageNumber}`
    )
      .then(response => {
        setStories(response.data);
      })
      .catch(function(error) {
        setStories({});
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
        <Layout>
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
