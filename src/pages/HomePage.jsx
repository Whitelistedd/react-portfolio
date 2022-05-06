import {Navbar} from "../components/Navbar"
import {Introduction} from "../components/Introduction"
import {AboutMe} from "../components/AboutMe"
import { LeftSide } from "../components/LeftSide";
import { RightSide } from "../components/RightSide";
import styled from "styled-components";
import { Work } from "../components/Work";
import { BottomNav } from "../components/BottomNav";
import { Contact } from "../components/Contact";

const Container = styled.div`
    height: 500vh;
`

export const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <RightSide />
      <BottomNav />
      <Introduction />
      <LeftSide />
      <AboutMe />
      <Work />
      <Contact />
    </Container>
  );
}