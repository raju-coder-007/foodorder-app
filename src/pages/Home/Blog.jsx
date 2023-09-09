import React from "react";
import "../../styles/Blog.css";

import { Carousel, Container, Row } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-4.jpg";

const Blog = () => {
  return (
    <section className="blog_section" id="blog">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="user1" />
                </div>
                <p>
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </p>
                <div className="items_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="user1" />
                </div>
                <p>
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </p>
                <div className="items_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="user1" />
                </div>
                <p>
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </p>
                <div className="items_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="user1" />
                </div>
                <p>
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </p>
                <div className="items_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
