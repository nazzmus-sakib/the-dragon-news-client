import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleNews from "../news/SingleNews";

const Category = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  return (
    <div>
      {id && <h2>This category have {newsData.length} news</h2>}
      {newsData.map((news) => (
        <SingleNews key={news._id} news={news}></SingleNews>
      ))}
    </div>
  );
};

export default Category;
