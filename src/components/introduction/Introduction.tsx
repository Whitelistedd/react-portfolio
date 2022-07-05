import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

export const Introduction : React.FC = () => {

  const { t } = useTranslation()

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
        <StyledP>{t('introduction.welcome')}</StyledP>
        <Name>{t('introduction.name')}</Name>
        <Job>{t('introduction.title')}</Job>
        <Description>{t('introduction.subtitle')}</Description>
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
  font-size: 1.2em;
  color: #65ffdb;
`;

const Name = styled.h1`
  font-size: 5em;
  color: white;
`;

const Job = styled.h2`
  font-size: 3.2em;
  word-spacing: -1vw;
  margin: 0;
  color: white;
  opacity: 0.7;
`;

const Description = styled.p`
  max-width: calc(40vw + 40%);
  font-size: 1.5em;
  word-spacing: -3px;
  color: white;
  opacity: 0.7;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${Wrap} {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    width: 100%;
    ${Wrap} {
      width: 70%;
      font-size: 9px;
    }
  }
  @media only screen and (max-width: ${devices.mobile}px) {
    ${Wrap} {
      width: 80%;
      font-size: 8px;
    }
    ${Job} {
      font-size: 2em;
    }
  }
`;
