import React from "react";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="/assets/card-bg-2.jpg"
          alt="Card image"
          className="card-image"
          height="550px"
        />
        <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <Card.Title className="display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </Card.Title>
            <Card.Text className="card-text lead fs-2">Check out all trends</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
