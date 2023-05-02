import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import EditorInsight from "./EditorInsight";
const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowAltCircleLeft></FaArrowAltCircleLeft> All news in this
              category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-5">
        <EditorInsight></EditorInsight>
      </div>
    </div>
  );
};

export default News;
