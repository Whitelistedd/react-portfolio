import React from "react";
import styled from "styled-components";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Contact } from "../components/Contact/Contact";
import { Icons } from "../components/Icons/Icons";
import { Introduction } from "../components/introduction/Introduction";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import { RightSide } from "../components/RightSide/RightSide";

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