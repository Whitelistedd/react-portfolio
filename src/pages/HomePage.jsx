import styled from 'styled-components';

import { AboutMe } from '../components/AboutMe';
import { BottomNav } from '../components/BottomNav';
import { Contact } from '../components/Contact';
import { Introduction } from '../components/Introduction';
import { LeftSide } from '../components/LeftSide';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';
import { RightSide } from '../components/RightSide';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

export const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <RightSide />
      <BottomNav />
      <Introduction />
      <LeftSide />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
};
