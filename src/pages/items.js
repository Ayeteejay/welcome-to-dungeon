import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Weapons from "../images/items.svg";
import Potion from "../images/potion.svg";

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
  .column {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  img.weapons {
    max-width: 80%;
    height: auto;
    margin: 2rem 0 0 0;
  }
  img.potion {
    max-width: 40%;
    height: auto;
    margin: 2rem 0 0 0;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-flow: column;
  }
`;

const Items = () => {
  return (
    <Layout>
      <Hero pageTitle="Items"></Hero>
      <Container>
        <Content>
          <div className="column">
            <div>
              <h5>Look for the loot.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                odio ut maxime tempore pariatur qui, eius aspernatur iure magnam
                dolor reprehenderit deleniti dolore illo.
              </p>
            </div>
            <img src={Weapons} className="weapons"></img>
          </div>

          <div className="column">
            <div>
              <h5>Craft and discover new items.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                odio ut maxime tempore pariatur qui, eius aspernatur iure magnam
                dolor reprehenderit deleniti dolore illo.
              </p>
            </div>
            <img src={Potion} className="potion"></img>
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
export default Items;
