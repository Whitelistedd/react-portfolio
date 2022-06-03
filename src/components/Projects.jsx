import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import Project1 from '../images/Base.svg';
import Project5 from '../images/Reddit.svg';
import Project4 from '../images/SpaceTourism.svg';
import Project2 from '../images/VolxenTracker.svg';
import Project3 from '../images/VolxFlix.svg';
import { devices } from '../MediaQueries';

const Title = styled.h3`
  opacity: 0.9;
  font-size: 2.3rem;
  color: #65ffdb;
`;

const Info = styled.div``;

const CardOne = styled.div`
  background: url(${Project1}) no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardTwo = styled(CardOne)`
  background: url(${Project2}) no-repeat center center fixed;
  background-position: top;
`;

const CardThree = styled(CardOne)`
  background: url(${Project3}) no-repeat center center fixed;
  background-size: cover;
`;

const CardFour = styled(CardOne)`
  background: url(${Project4}) no-repeat center center fixed;
  background-size: cover;
`;

const CardFive = styled(CardOne)`
  background: url(${Project5}) no-repeat fixed;
  background-position: top;
  letter-spacing: 5px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1em 1em;
  z-index: 1;
  transition: 600ms ease;
  height: 45vh;
  font-weight: 700;
  width: 100%;
  gap: 1em;
  background: linear-gradient(
    hsl(0 0% 0% / 0) 0%,
    hsl(20 0% 0% / 0.6) 30%,
    hsl(0 0% 0% / 1) 100%
  );
  color: white; ;
`;

const CardTitle = styled.h4`
  font-size: 25px;
`;

const CardButtons = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

const ProjectsWrap = styled.div`
  display: flex;
  gap: 5em;
  width: 60vw;
  flex-direction: column;
  ${CardOne}, ${CardTwo}, ${CardThree} {
    border-radius: 15px;
    display: flex;
    min-width: 30vw;
    align-items: flex-end;
    height: 60vh;
    overflow: hidden;
    &:hover {
      ${CardTitle} {
        transition: 300ms ease;
        transition-delay: 400ms;
        color: #65ffdc;
      }
    }
  }
`;

const CardDesc = styled.p`
  max-width: 100%;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  text-shadow: 1px 1px 10px black;
`;

const HL = styled.span`
  color: #65ffdb;
`;

const Button = styled.button`
  letter-spacing: 1px;
  width: 100%;
  padding: 0.8em 0em;
  background: none;
  font-weight: 700;
  color: #65ffdb;
  border-radius: 5px;
  border: 1px solid #65ffdb;
  transition: 300ms ease;
  &:hover {
    transition: 300ms ease;
    background-color: #133040;
    cursor: pointer;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5em;
  z-index: 1;
  @media only screen and (max-width: ${devices.mobile}px) {
    margin-top: 200px;
    ${Title} {
      font-size: 7vw;
    }
    ${ProjectsWrap} {
      width: 90vw;
    }
    ${CardContent} {
      transform: translateY(115%);
    }
    ${CardOne}, ${CardTwo}, ${CardThree} {
      &:hover ${CardContent} {
        transform: translateY(0%);
      }
    }
  }
`;

const Anchor = styled.a`
  color: inherit;
  font-weight: 700;
  text-decoration: none;
  width: 50%;
`;

export const Projects = () => {
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
        <Title>Мои основные проекты</Title>
      </Info>
      <ProjectsWrap>
        <CardOne
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <CardTitle>Base Ecommerce</CardTitle>
            <CardDesc>
              В этом проекте я сделал сайт MERN React для компании Base, добавил
              платежную систему, систему корзины и фильтрацию.
            </CardDesc>
            <CardDesc>
              Для этого проекта я использовал <HL>ReactJS</HL> , <HL>Redux</HL>,{" "}
              <HL>Styled-Components</HL> и бэкэнд REST API, созданный с помощью{" "}
              <HL>Node</HL>, <HL>ExpressJS</HL> и <HL>MongoDB</HL>.
            </CardDesc>
            <CardButtons>
              <Anchor href="https://base-shop.vercel.app/" target="_blank">
                <Button>Посмотреть проект</Button>
              </Anchor>
              <Anchor
                href="https://github.com/Whitelistedd/base"
                target="_blank"
              >
                <Button>Посмотреть код</Button>
              </Anchor>
            </CardButtons>
          </CardContent>
        </CardOne>
        <CardTwo
          data-aos="fade-up"
          data-aos-offset="410"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <CardTitle>Трекер посылок</CardTitle>
            <CardDesc></CardDesc>
            <CardDesc>
              В этом проекте я создал <HL>NextJS</HL> сайт. Я сделал этот сайт,
              потому что использовал множество сайтов для отслеживания посылок,
              и некоторые из них не работали должным образом, поэтому я сделал
              свой собственный, который использует современные технологии для
              обновления информации.
            </CardDesc>
            <CardDesc>
              Для этого проекта я использовал <HL>NextJS</HL>,{" "}
              <HL>Typescript</HL>, <HL>Styled-Components</HL>,{" "}
              <HL>MaterialUI</HL>, <HL>SSR </HL>и небольшой бэкенд <HL>API</HL>,
              чтобы я мог скрыть свой ключ API.
            </CardDesc>
            <CardButtons>
              <Anchor href="https://volxenjs.vercel.app/" target="_blank">
                <Button>Посмотреть проект</Button>
              </Anchor>
              <Anchor
                href="https://github.com/Whitelistedd/parcel-remastered"
                target="_blank"
              >
                <Button>Посмотреть код</Button>
              </Anchor>
            </CardButtons>
          </CardContent>
        </CardTwo>
        <CardThree
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <CardTitle>VolxFlix</CardTitle>
            <CardDesc>
              У меня возникла идея просто сделать клон netflix, потому что я
              хотел проверить свои навыки и сделать их «сложную» анимацию и
              дизайн страниц.В этом проекте я сделал веб-сайт-клон netflix с
              логином, интро, профилями и страницей со всеми фильмами.
            </CardDesc>
            <CardDesc>
              для этого проекта я использовал <HL>ReactJS</HL>,{" "}
              <HL>Typescript</HL>, <HL> React-router</HL>,{" "}
              <HL>StyledComponents</HL> и <HL>RestAPI</HL> .
            </CardDesc>
            <CardButtons>
              <Anchor href="https://volxflix.vercel.app/" target="_blank">
                <Button>Посмотреть проект</Button>
              </Anchor>
              <Anchor
                href="https://github.com/Whitelistedd/volxflix"
                target="_blank"
              >
                <Button>Посмотреть код</Button>
              </Anchor>
            </CardButtons>
          </CardContent>
        </CardThree>
        <CardFour
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <CardTitle>Space Tourism</CardTitle>
            <CardDesc>
              В этом проекте я сделал сайт React, который рассказывает о космосе
              и некоторых планетах Солнечной системы. Я сделал этот проект,
              потому что интересовался космосом и был рад показать людям
              космический мир на сайте.
            </CardDesc>
            <CardDesc>
              для этого проекта я использовал <HL>ReactJS</HL>,{" "}
              <HL>Typescript</HL>, <HL> React-router</HL>,{" "}
              <HL>StyledComponents</HL> и <HL>Figma</HL> для дизайн.
            </CardDesc>
            <CardButtons>
              <Anchor href="https://spaceworld.vercel.app/" target="_blank">
                <Button>Посмотреть проект</Button>
              </Anchor>
              <Anchor
                href="https://github.com/Whitelistedd/Space-tourism"
                target="_blank"
              >
                <Button>Посмотреть код</Button>
              </Anchor>
            </CardButtons>
          </CardContent>
        </CardFour>
        <CardFive
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <CardTitle>Reddit Clone (в разработке)</CardTitle>
            <CardDesc>
              В этом проекте я пошел и создал группу друзей, чтобы сделать
              продвинутый клон Reddit, чтобы не только домашняя страница, но и
              гораздо больше возможностей, чем это.
            </CardDesc>
            <CardDesc>
              Для этого проекта мы использовали <HL>ReactJS</HL>,{" "}
              <HL>React-router</HL>, <HL>MaterialUI</HL>,
              <HL> Styled-Components</HL>, <HL>Redux</HL> и <HL>Git</HL> для
              управления и организации работы команды.
            </CardDesc>
            <CardButtons>
              <Anchor>
                <Button>Посмотреть проект</Button>
              </Anchor>
              <Anchor
                href="https://github.com/Reddit-React-Study-Group/Reddit-React-Study-Project"
                target="_blank"
              >
                <Button>Посмотреть код</Button>
              </Anchor>
            </CardButtons>
          </CardContent>
        </CardFive>
      </ProjectsWrap>
      {/*  <OtherContainer>
                <SmallProjectOne>

                </SmallProjectOne>
            </OtherContainer> */}
    </Container>
  );
};
