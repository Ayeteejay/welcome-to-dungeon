import React from "react";
import "../styles/styles.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Fade from "react-reveal/Fade";
import Header from "./header";
import Footer from "./footer";

const theme = {
  colors: {
    primary: "#ef7348",
    secondary: "#000",
    tertiary: "#a05c47",
  },
  spacing: {
    extraSmall: "0.5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    extraLarge: "4rem",
  },
  transition: {
    extraSlow: "2000ms",
    slow: "1000ms",
    normal: "500ms",
    fast: "250ms",
    lightning: "100ms",
  },
  breakPoints: {
    small: "576px",
    medium: "768px",
    large: "992px",
    extraLarge: "1200px",
  },
};

const Container = styled.div``;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Fade>
        <Container>{children}</Container>
      </Fade>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Layout;
