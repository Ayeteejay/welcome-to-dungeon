import React from "react";
import styled from "styled-components";
import Skull from "../images/doom.svg";

const Section = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 4rem;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  img {
    max-width: 35px;
    margin: 0 0 1rem 0;
    transition: all ${(props) => props.theme.transition.extraSlow};
    &:hover {
      transform: rotate(360deg);
    }
  }
`;

const Footer = () => {
  const questTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };
  return (
    <Section>
      <img src={Skull} className="img-fluid"></img>
      <p>
        &#xA9; {questTime()}{" "}
        <a
          href="https://ayeteejay.com1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ayeteejay
        </a>
      </p>
    </Section>
  );
};
export default Footer;
