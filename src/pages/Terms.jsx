import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms nad condition</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        maiores pariatur omnis quo. Ad qui deleniti provident, tempora dolor et
        praesentium aspernatur obcaecati eos ipsa alias sit ipsum magni
        veniam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam a
        consequatur velit at quidem dolorem voluptatibus! Aliquid autem laborum
        quibusdam illum molestias beatae voluptas temporibus, eum ipsam labore
        nobis mollitia.
      </p>
      <p>
        Back to<Link to="/register"> Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
