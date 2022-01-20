import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Dungeon from "../images/dungeon.svg";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  padding: 10rem 0 2rem 0;
  h1.large {
    font-size: 4rem;
    margin: 2rem 0 0 0;
  }
  a.large {
    margin: 1rem;
  }
  img {
    max-width: 75%;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    h1.large {
      font-size: 3rem;
    }
    img {
      max-width: 90%;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 5rem 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  max-width: 70%;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-flow: column;
  }
`;

const Index = () => {
  return (
    <Layout>
      <Hero>
        <img src={Dungeon} className="img-fluid"></img>
        <h1 className="large">Dungeon&#x00AE;</h1>
        <Link to="/play-now" className="primary-cta large">
          Play Now
        </Link>
      </Hero>
      <Container>
        <Content>
          <div className="monsters">
            <h5>Encounter monsters</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo, repellendus ipsum unde
              mollitia culpa? Accusantium!
            </p>
          </div>
          <div className="treasure">
            <h5>Search for treasure</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ut maxime tempore pariatur qui, eius aspernatur iure magnam dolor
              reprehenderit deleniti dolore illo, repellendus ipsum unde
              mollitia culpa? Accusantium!
            </p>
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
export default Index;
