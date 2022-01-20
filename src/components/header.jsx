import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const DesktopContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  position: fixed;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme.colors.primary};
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin: 0 1rem;
  }
  .home-link {
    font-size: 2rem;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    padding: 1.5rem;
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme.colors.primary};
  .closed-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  }
  .open-menu {
    background: ${(props) => props.theme.colors.primary};
    transition: all ${(props) => props.theme.transition.fast};
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    height: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    ul {
      list-style: none;
      text-align: center;
    }
    li {
      margin: 1rem 0;
    }
    a {
      font-size: 1.5rem;
    }
  }
  .reveal {
    opacity: 1;
    height: 250px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: block;
    .home-link {
      font-size: 1.5rem;
    }
  }
`;

const Header = () => {
  const openMobile = () => {
    const dropDownMenu = document.querySelector(".open-menu");
    dropDownMenu.classList.toggle("reveal");
  };
  return (
    <React.Fragment>
      <DesktopContainer>
        <Link to="/" className="home-link">
          Dungeon&#x00AE;
        </Link>
        <ul>
          <li>
            <Link to="/monster-manual">Monster Manual</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/spells">Spells</Link>
          </li>
          <li>
            <Link to="/play-now" className="primary-cta">
              Play Now
            </Link>
          </li>
        </ul>
      </DesktopContainer>
      <MobileContainer>
        <div className="closed-menu">
          <Link to="/" className="home-link">
            Dungeon&#x00AE;
          </Link>
          <button className="primary-cta" onClick={openMobile}>
            Menu
          </button>
        </div>
        <div className="open-menu">
          <ul>
            <li>
              <Link to="/monster-manual">Monster Manual</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/spells">Spells</Link>
            </li>
            <li>
              <Link to="/play-now" className="primary-cta">
                Play Now
              </Link>
            </li>
          </ul>
        </div>
      </MobileContainer>
    </React.Fragment>
  );
};
export default Header;
