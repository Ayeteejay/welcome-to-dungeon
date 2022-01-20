import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";

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
  .creatures {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 3rem;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-flow: column;
  }
`;

const Monster = () => {
  return (
    <Layout>
      <Hero pageTitle={"Monster Manual"}></Hero>
      <Container>
        <Content>
          <div className="creatures">
            <h5>Battle creatures as you traverse the dungeon.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo.
            </p>
          </div>
          <div>
            <h5>Battle creatures as you traverse the dungeon.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo.
            </p>
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
export default Monster;
