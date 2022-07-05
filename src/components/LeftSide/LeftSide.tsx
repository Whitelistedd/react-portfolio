import { GitHub } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

export const LeftSide = () => {
  return (
    <Container>
      <Anchor target="_blank" href="https://github.com/Whitelistedd">
        <GitHub />
      </Anchor>
    </Container>
  );
};

const Anchor = styled.a`
  color: white;
  text-decoration: none;
  transition: 400ms ease;
  &:hover {
    color: #65ffdb;
    transform: translate(0, -10px);
    transition: 400ms ease;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  left: 50px;
  right: auto;
  z-index: 10;
  color: white;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
  }
  @media only screen and (max-width: ${devices.mobile}px) {
    display: none;
  }
`;
