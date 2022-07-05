import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Cards } from '../../data';
import { devices } from '../../MediaQueries';
import { Card } from './Card/Card';

export const Projects : React.FC = () => {

  const { t } = useTranslation()

  return (
    <Container
      id="Projects"
      data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
    >
      <Info>
        <Title>{t('projects.location')}</Title>
      </Info>
      <ProjectsWrap>
        {
          Cards.map(card => 
            <Card translate={t} key={card.title} image={card.images} title={card.title} desc={card.desc} live={card.live} code={card.code} />  
          )
        }
      </ProjectsWrap>
    </Container>
  );
};

const Title = styled.h3`
  opacity: 0.9;
  font-size: 2.3rem;
  color: #65ffdb;
`;

const Info = styled.div``;


const ProjectsWrap = styled.div`
  display: flex;
  gap: 5em;
  width: 60vw;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5em;
  min-height: 50%;
  * {
    z-index: 1;
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${ProjectsWrap} {
      width: 70%;
    }
  }
  @media only screen and (max-width: ${devices.mobile}px) {
    ${Title} {
      font-size: 7vw;
    }
    ${ProjectsWrap} {
      width: 90vw;
    }
  }
`;