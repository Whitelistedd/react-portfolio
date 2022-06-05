import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import CSS from '../images/css3-alt-brands.svg';
import GIT from '../images/git-alt-brands.svg';
import HTML5 from '../images/html5-brands.svg';
import JS from '../images/js-brands.svg';
import MongoDB from '../images/mongoDB.svg';
import NODE from '../images/node-js-brands.svg';
import REACT from '../images/react-brands.svg';
import codingIMG from '../images/Saly-10.svg';
import TS from '../images/typescript.svg';
import { devices, mobile } from '../MediaQueries';

const languages = [HTML5, CSS, JS, GIT, TS, MongoDB, NODE, REACT];

const Title = styled.h3`
  opacity: 0.9;
  margin-bottom: 1em;
  font-size: 30px;
  color: #65ffdb;
  ${mobile({ "&::after": { width: "calc(78vw - 5em)" } })}
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  ${mobile({ height: "110vh" })}
  @media only screen and (max-width: ${devices.mobile}px) {
    ${Title} {
      font-size: 7vw;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  gap: 2em;
  ${mobile({ flexDirection: "column", gap: "4rem" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 0.5em;
  width: 40vw;
  ${mobile({ width: "80vw", alignItems: "center" })}
`;

const StyledP = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 2px;
  opacity: 0.7;
  width: calc(30vw + 10%);
  margin: 0.3em 0em;
  ${mobile({ width: "100%" })}
`;

const Image = styled.img`
  max-width: 22vw;
  border-radius: 10px;
  border: 2px solid #65ffdb;
  padding: 1em;
  transition: 300ms ease;
  &:hover {
    transition: 300ms ease;
    box-shadow: 9px 9px 80px black;
  }
  ${mobile({ maxWidth: "40vw" })}
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Language = styled.img`
  width: 30px;
`;

export const AboutMe = () => {
  Aos.init();

  return (
    <Container
      id="AboutMe"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      <Wrap>
        <Info>
          <Title>Обо мне</Title>
          <StyledP>
            Привет! Меня зовут Мохаммед, я фронтенд-разработчик.
          </StyledP>
          <StyledP>
            Я работаю фронтенд-разработчиком уже 2 года, специализируюсь на
            ReactJS и немного на Typescript. Мой основной стек — MERN с ReactJS
            или NextJS, и мне нравится работать с командой. Я полностью
            сосредоточен на развитии своих навыков каждый день, и в эти дни я Я
            сосредоточен на создании красивых и чистых веб-сайтов с помощью
            ReactJS. и типскрипт.
          </StyledP>
          <StyledP>
            Я с нетерпением жду возможности работать с любой компанией и
            продвигать компанию вперед с помощью новых технологий и новых
            языков.
          </StyledP>
          <Images>
            {languages.map((item) => (
              <Language src={item} />
            ))}
          </Images>
        </Info>
        <Image src={codingIMG} />
      </Wrap>
    </Container>
  );
};
