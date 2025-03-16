import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/food_info.json?key=28843fb0")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/img_food.json?key=28843fb0")
      .then((response) => response.json())
      .then((data) => setCarouselImages(data.map(item => item.image)))
      .catch((error) => console.error("Error fetching carousel images:", error));
  }, []);

  return (
    <div>
      <div className="bg-teal-700 text-white text-center py-4">
        <h1 className="text-3xl font-bold">MENU</h1>
      </div>

      <Carousel className="my-4">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Container>
        <Row className="text-center">
          {menuItems.map((item, index) => (
            <Col key={index} md={3} className="mb-4">
              <div className="border rounded overflow-hidden shadow">
                <img src={item.image} alt={item.name} className="w-100" />
                <div className="bg-teal-700 text-white py-2">
                  <h5 className="m-0">{item.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuPage;
