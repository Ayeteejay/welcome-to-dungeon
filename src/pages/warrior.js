import React, { useState } from "react";
import styled from "styled-components";
import { StaticQuery, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard";
import QuestData from "../adventures/warriorQuest";
import CharacterData from "../data/characterData";

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

// const Warrior = () => {
//   const [questData, setQuestData] = useState(QuestData);
//   const [characterData, setCharacterData] = useState(CharacterData);
//   return (
//     <Layout>
//       <Container>
//         <Section>
//           <Dashboard character={characterData[0]} quest={questData}></Dashboard>
//         </Section>
//       </Container>
//     </Layout>
//   );
// };

// const Warrior = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query warriorQuery {
//           allGameDataJson {
//             edges {
//               node {
//                 characters {
//                   attackPower
//                   bio
//                   hitPoints
//                   id
//                   magicPoints
//                   magicPower
//                   name
//                   path
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <Layout>
//           <Container>
//             <Section>
//               <Dashboard
//                 character={data.allGameDataJson.edges[0].node.characters[0]}
//               ></Dashboard>
//             </Section>
//           </Container>
//         </Layout>
//       )}
//     />
//   );
// };

const Warrior = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGameDataJson {
          edges {
            node {
              adventures {
                game {
                  description
                  playerOptions
                  room
                }
                id
              }
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
  console.log(data.allGameDataJson.edges[0].node);
  return (
    <Layout>
      <Container>
        <Section>
          <Dashboard
            character={data.allGameDataJson.edges[0].node.characters[0]}
            quest={data.allGameDataJson.edges[0].node.adventures}
          ></Dashboard>
        </Section>
      </Container>
    </Layout>
  );
};

export default Warrior;
