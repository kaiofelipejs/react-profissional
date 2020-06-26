import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap");

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
    }
  }
`;

const Hero = ({ title, children }) => (
  <>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </>
);

export default Hero;
