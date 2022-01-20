import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Magic from "../images/spells.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 5rem 0;
`;

const Content = styled.div`
  max-width: 70%;
  display: grid;
  grid-gap: 3rem;
  padding: 2rem 0 5rem 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "left right"
    "magic magic";
  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
  }
  .magic {
    grid-area: magic;
    position: relative;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-flow: column;
  }
`;

const Spells = () => {
  return (
    <Layout>
      <Hero pageTitle="Spells"></Hero>
      <Container>
        <Content>
          <div className="left">
            <h5>How do spells work?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo.
            </p>
          </div>

          <div className="right">
            <h5>Learn more magic.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo.
            </p>
          </div>
          <div className="magic">
            <img src={Magic} className="img-fluid" />
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
export default Spells;
