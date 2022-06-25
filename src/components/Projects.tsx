import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';
import { Cards } from '../data';
import { devices } from '../MediaQueries';
import { Card } from './Card';

export const Projects : React.FC = () => {
  Aos.init();

  return (
    <Container
      id="Projects"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      <Info>
        <Title>Мои проекты</Title>
      </Info>
      <ProjectsWrap>
        {
          Cards.map(card => 
            <Card image={card.images} title={card.title} desc={card.desc} live={card.live} code={card.code} />  
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

const Anchor = styled.a`
  color: inherit;
  font-weight: 700;
  text-decoration: none;
  width: 50%;
`;
