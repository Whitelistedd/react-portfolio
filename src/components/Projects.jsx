import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import Project1Image from '../images/Base.svg';
import Project5Image from '../images/Reddit.svg';
import Project4Image from '../images/SpaceTourism.svg';
import Project2Image from '../images/VolxenTracker.svg';
import Project3Image from '../images/VolxFlix.svg';
import { devices } from '../MediaQueries';

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
        <Card
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <Image src={Project1Image} />
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
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-offset="410"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <Image src={Project2Image} />
            <CardTitle>Трекер посылок</CardTitle>
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
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <Image src={Project3Image} />
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
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <Image />
          <CardContent>
            <Image src={Project4Image} />
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
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-offset="420"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <CardContent>
            <Image src={Project5Image} />
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
        </Card>
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

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  border: 1px solid #62f9d6;
  border-radius: 10px;
  min-height: 100%;
  padding: 1em;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  transition: 600ms ease;
  font-weight: 700;
  width: 100%;
  gap: 1em;
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
  width: 100%;
`;

const ProjectsWrap = styled.div`
  display: flex;
  gap: 5em;
  width: 60vw;
  flex-direction: column;
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
  background: none;
  font-weight: 700;
  color: #65ffdb;
  border-radius: 5px;
  padding: 1.5em 0em;
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
  min-height: 50%;
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
