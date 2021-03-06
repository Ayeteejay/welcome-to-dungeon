import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Character from "../components/character";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 5rem 0;
`;

const Content = styled.div`
  max-width: 70%;
  padding: 2rem 0 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.large}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PlayNow = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCharacterDataJson {
          edges {
            node {
              characters {
                attackPower
                bio
                hitPoints
                id
                magicPoints
                magicPower
                name
                path
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Hero pageTitle="Select your character"></Hero>
      <Container>
        <Content>
          {data.allCharacterDataJson.edges[0].node.characters.map((value) => {
            return (
              <Character
                key={value.id}
                info={value}
                // onClick={() => selectCharacter(value.name)}
              ></Character>
            );
          })}
        </Content>
      </Container>
    </Layout>
  );
};

export default PlayNow;
