import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsBoard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b56dcc100b254a7da882642b19dcae90"
      )
      .then((response) => {
        console.log(response);
        setItems(response.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {items.map((articles, index) => {
        return (
          <NewsItem
            key={index}
            title={articles.title}
            description={articles.description}
            src={articles.urlToImage}
            url={articles.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
