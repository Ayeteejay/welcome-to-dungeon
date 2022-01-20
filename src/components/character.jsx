import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 3rem;
  transition: all ${(props) => props.theme.transition.normal};
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: #fff;
    a {
      background: #fff;
    }
    a:hover {
      background: none;
      border: 1px solid #fff;
    }
  }
`;

const Description = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 1rem 0;
`;

const Stats = styled.div`
  padding: 1rem 0;
`;

const Select = styled.div`
  a {
    display: block;
    text-align: center;
    padding: 1rem;
  }
`;

const Character = (props) => {
  return (
    <Card>
      <Description>
        <h5>{props.info.name}</h5>
        <p>{props.info.biography}</p>
      </Description>
      <Stats>
        <p>
          <strong>HP</strong> {props.info.hitPoints} | <strong>MP</strong>{" "}
          {props.info.magicPoints}
        </p>
        <p>
          <strong>Power</strong> {props.info.attackPower} |{" "}
          <strong>Magic</strong> {props.info.magicPower}
        </p>
      </Stats>
      <Select>
        <Link to={props.info.path} className="primary-cta">
          Select {props.info.name}
        </Link>
      </Select>
    </Card>
  );
};

export default Character;
