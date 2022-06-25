import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../MediaQueries';

export const Introduction : React.FC = () => {
  Aos.init();

  return (
    <Container
      id="Introduction"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
    >
      <Wrap>
        <StyledP>Привет, меня зовут</StyledP>
        <Name>Мухаммед.</Name>
        <Job>Я создаю вещи для Интернета.</Job>
        <Description>
          Я Frontend-разработчик, специализирующийся на создании 
          и разработке исключительных веб-сайтов/веб-приложений.
        </Description>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  gap: 2.5vh;
  justify-content: center;
  align-items: flex-start;
`;

const StyledP = styled.p`
  font-size: calc(0.1vw + 1em);
  color: #65ffdb;
`;

const Name = styled.h1`
  font-size: calc(3vw + 2em);
  color: white;
`;

const Job = styled.h2`
  font-size: calc(2.5vw + 1em);
  word-spacing: -1vw;
  margin: 0;
  color: white;
  opacity: 0.7;
`;

const Description = styled.p`
  max-width: calc(40vw + 40%);
  font-size: calc(0.5vw + 1em);
  word-spacing: -3px;
  color: white;
  opacity: 0.7;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 80vh;
  @media only screen and (max-width: ${devices.Laptop}px) {
    width: 100%;
    ${Wrap} {
      width: 70%;
    }
  }
  @media only screen and (max-width: ${devices.mobile}) {
    ${Wrap} {
      min-width: 70vh;
    }
  }
`;
