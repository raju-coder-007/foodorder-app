import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import "../../styles/Brand.css";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";

const Brand = () => {
  return (
    <section className="brand_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="brand_img">
                    <img src={Brand1} alt="brand-1" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand2} alt="brand-2" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand3} alt="brand-3" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand4} alt="brand-4" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand5} alt="brand-5" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand6} alt="brand-6" className="img-fluid" />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="brand_img">
                    <img src={Brand3} alt="brand-3" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand4} alt="brand-4" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand5} alt="brand-5" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand6} alt="brand-6" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand7} alt="brand-7" className="img-fluid" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand8} alt="brand-8" className="img-fluid" />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
