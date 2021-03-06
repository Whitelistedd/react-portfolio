import React from "react";
import styled from "styled-components";

import { devices } from "../../../MediaQueries";

interface Props {
  image: string,
  title: string,
  desc: string,
  live: string,
  code: string,
  translate: any
}

export const Card : React.FC<Props> = ({image,title,desc,live,code,translate}) => {
  return (
  <Container
    data-aos="fade-up"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <Image src={image} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDesc>{translate(`projects.${desc}.description`)}</CardDesc>
      <CardButtons>
        <Anchor href={live} target="_blank">
          <Button>{translate(`projects.see_project_button`)}</Button>
        </Anchor>
        <Anchor
          href={code}
          target="_blank"
        >
          <Button>{translate(`projects.see_projectCode_button`)}</Button>
        </Anchor>
      </CardButtons>
    </CardContent>
  </Container>
  )
};

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Anchor = styled.a`
  color: inherit;
  font-weight: 700;
  text-decoration: none;
  width: 50%;
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
  font-size: 1.7em;
`;

const CardDesc = styled.p`
  max-width: 100%;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 1.1em;
  font-weight: 500;
  margin: 0;
  text-shadow: 1px 1px 10px black;
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
  font-size: 0.8em;
  &:hover {
    transition: 300ms ease;
    background-color: #133040;
    cursor: pointer;
  }
`;

const CardButtons = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Container = styled.div`
    border: 1px solid #62f9d6;
    border-radius: 10px;
    min-height: 100%;
    padding: 1em;
    background: #0A182E;

    @media only screen and (max-width: ${devices.mobile}px) {
      ${CardContent} {
        font-size: 10px;
      }
    }
`;