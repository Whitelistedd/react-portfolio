import React from "react";
import styled from "styled-components";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Icons } from "../components/Icons";
import { Introduction } from "../components/Introduction";
import { LeftSide } from "../components/LeftSide";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { RightSide } from "../components/RightSide";

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Icons />
      <RightSide />
      <Introduction />
      <LeftSide />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5em;
`;