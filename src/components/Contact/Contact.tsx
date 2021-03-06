import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

export const Contact : React.FC = () => {

  const { t } = useTranslation();

  return (
    <Container
      id="Contact"
      data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
    >
      <Wrap>
        <Name>{t("contact_me.location")}</Name>
        <Title>{t("contact_me.title")}</Title>
        <Description>
          {t("contact_me.description1")}
          <br />
          {t("contact_me.description2")}
        </Description>
        <Button>
          <Anchor href="mailto:ismonovmukh@gmail.com">{t("contact_me.button")}</Anchor>
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
  * {
    z-index: 1;
  }
`;

const Name = styled.h3`
  color: #65ffdb;
  font-size: 1.3em;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Description = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  line-height: 2em;
  min-width: 30vw;
  opacity: 0.8;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 20px 25px;
  background: none;
  border: 1px solid #65ffdb;
  border-radius: 5px;
  transition: 600ms ease;
  font-size: 1em;
  &:hover {
    transition: 600ms ease;
    background-color: #133040;
    cursor: pointer;
  }
`;

const Anchor = styled.a`
font-size: 1em;
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
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Wrap} {
      font-size: 11px;
      word-break: keep-all;
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: ${devices.mobile}px) {
    ${Wrap} {
      font-size: 9px;
      white-space: normal;
      word-break: break-all;
    }
  }
`;
