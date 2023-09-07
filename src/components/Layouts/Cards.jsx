import React from "react";
// import "../../styles/Menu.css";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({
  image,
  rating,
  title,
  paragraph,
  price,
  renderRatingIcons,
}) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="menu_price">
              <h5>${price}</h5>
            </div>
            <div className="add_to_cart">
              <Link to="/">
                <i className="bi bi-bag me-2"></i>Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
