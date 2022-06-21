import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../MediaQueries';

export const Contact = () => {
  Aos.init();

  return (
    <Container
      id="Contact"
      data-aos="fade-up"
      data-aos-offset="700"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      <Wrap>
        <Name>Контакт</Name>
        <Title>Связаться</Title>
        <Description>
          В настоящее время я ищу любые новые возможности, мой почтовый ящик
          всегда открыт.
          <br />
          Если у вас есть вопрос или вы просто хотите сказать привет, я сделаю
          все возможное, чтобы ответить вам!
        </Description>
        <Button>
          <Anchor href="mailto:ismonovmukh@gmail.com">Свяжитесь со мной</Anchor>
        </Button>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  gap: 4vh;
`;

const Name = styled.h3`
  color: #65ffdb;
`;

const Title = styled.h1`
  font-size: calc(2.5em - 0.2rem);
`;

const Description = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  line-height: 2em;
  min-width: 30vw;
  opacity: 0.8;
`;

const Button = styled.button`
  padding: 20px 25px;
  background: none;
  border: 1px solid #65ffdb;
  border-radius: 5px;
  transition: 600ms ease;
  &:hover {
    transition: 600ms ease;
    background-color: #133040;
    cursor: pointer;
  }
`;

const Anchor = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${Wrap} {
      width: 70%;
    }
  }
`;
