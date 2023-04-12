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
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
