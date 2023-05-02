import moment from "moment";
import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  FaRegBookmark,
  FaShareAlt,
  FaRegStar,
  FaStar,
  FaEye,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleNews = ({ news }) => {
  const { author, title, image_url, details, _id, rating, total_view } = news;
  return (
    <Card className="mb-3">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex ">
            <img
              style={{ height: "40px" }}
              className="rounded-circle me-2"
              src={author?.img}
              alt=""
            />
            <div>
              <p className="m-0">{author?.name}</p>
              <small className="text-secondary">
                {moment(author?.published_date).format("YYYY-MM-DD")}
              </small>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} className="my-3" />
        <Card.Text>
          {details > 250 ? details : details.slice(0, 250)}......
          <Link className="text-warning" to={`/news/${_id}`}>
            Read More
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <small className="ms-2 mb-0">{rating.number}</small>
        </div>
        <div>
          <FaEye></FaEye>
          <small className="ms-1"> {total_view}</small>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SingleNews;
