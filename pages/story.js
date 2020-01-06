import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import CommentList from "../components/CommentList";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Story() {
  const [story, setStory] = useState({});
  const fetchData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const result = await axios(
      `https://node-hnapi.herokuapp.com/item/${urlParams.get("id")}`
    )
      .then(response => {
        setStory(response.data);
      })
      .catch(function(error) {
        setStory({});
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title={story.title} backButton={true}>
      <main>
        <h1 className="story-title">
          <a href={story.url}>{story.title}</a>
        </h1>
        <div className="story-details">
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>
        {story.comments_count > 0 ? (
          <CommentList comments={story.comments} />
        ) : (
          <div>No comments for this story</div>
        )}
      </main>
      <style jsx>
        {`
          main {
            padding: 1em;
          }
          .story-title {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5em;
          }
          .story-title a {
            color: #333;
            text-decoration: none;
          }
          .story-title a:hover {
            text-decoration: underline;
          }
          .story-details {
            font-size: 0.8rem;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1em;
          }
          .story-details strong {
            margin-right: 1em;
          }
          .story-details a {
            color: #f60;
          }
        `}
      </style>
    </Layout>
  );
}
