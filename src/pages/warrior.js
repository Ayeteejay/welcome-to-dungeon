import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20rem 0 15rem 0;
`;
const Section = styled.div`
  max-width: 70%;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
  }
`;

const Warrior = () => {
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
      <Container>
        <Section>
          <Dashboard
            character={data.allCharacterDataJson.edges[0].node.characters[0]}
          ></Dashboard>
        </Section>
      </Container>
    </Layout>
  );
};

export default Warrior;
