import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20rem 0 15rem 0;
  h1.title {
    font-size: 3.5rem;
    text-align: center;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    padding: 15rem 0 10rem 0;
    h1.title {
      font-size: 2.5rem;
    }
  }
`;

const Hero = (props) => {
  return (
    <Container>
      <h1 className="title">{props.pageTitle}</h1>
    </Container>
  );
};
export default Hero;
