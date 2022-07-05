import Aos from "aos";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { languages } from "../../data";
import codingIMG from "../../images/Saly-10.svg";
import { devices } from "../../MediaQueries";

export const AboutMe : React.FC = () => {
  Aos.init();

  const { t } = useTranslation();

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
          <Title>{t('about_me.location')}</Title>
          <StyledP>{t('about_me.part1')}</StyledP>
          <StyledP>{t('about_me.part2')}</StyledP>
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

const Title = styled.h3`
  opacity: 0.9;
  margin-bottom: 1em;
  font-size: 30px;
  color: #65ffdb;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  gap: 2em;
  * {
    z-index: 1;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 0.5em;
  width: 40vw;
`;

const StyledP = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 2px;
  font-size: 1em;
  opacity: 1;
  width: calc(30vw + 10%);
  margin: 0.3em 0em;
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
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Language = styled.img`
  width: 30px;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  min-height: 50%;

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${StyledP} {
      font-size: 0.9em;
      width: 100%;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    width: 100%;
    ${Image} {
      display: none;
    }
    ${StyledP} {
      width: 100%;
    }
    ${Wrap} {
      width: 70%;
    }
    ${Info} {
      width: 100%;
    }
  }
  @media only screen and (max-width: ${devices.mobile}px) {
    ${Title} {
      font-size: 7vw;
    }
    ${StyledP} {
      width: 100%;
      font-size: 0.8em;
    }
    ${Info} {
      width: 80vw;
    }
    ${Wrap} {
      flex-direction: column;
      gap: 4rem;
    }
    ${Images} {
      width: 100%;
    }
  }
`;
