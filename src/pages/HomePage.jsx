import {Navbar} from "../components/Navbar"
import {Introduction} from "../components/Introduction"
import {AboutMe} from "../components/AboutMe"
import { LeftSide } from "../components/LeftSide";
import { RightSide } from "../components/RightSide";
import styled from "styled-components";
import { Experience } from "../components/Experience";

const Container = styled.div`
    height: 500vh;
`

export const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <RightSide />
      <Introduction />
      <LeftSide />
      <AboutMe />
      <Experience />
    </Container>
  );
}