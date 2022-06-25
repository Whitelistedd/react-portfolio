import { Icon } from "./Icon";
import React from 'react'
import styled, { keyframes } from 'styled-components';
import { devices } from "../MediaQueries";
const iteration = [...Array(12)]

export const Icons = () => {
  return (
    <IconsContainer>
        {
        iteration.map(() => 
        <IconRow>
            <StyledIcon />
        </IconRow>    
        )
        }
    </IconsContainer>
  )
}

const ReverseAnimation2 = keyframes`
    0% {
        transform: translateX(-200%);
    }
    100% {
        transform: translateX(100%);
    }
`

const ReverseAnimation1 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(100%);
    }
`


const StyledIcon = styled(Icon)`
`

const IconRow = styled.div`
  position: relative;
  top: -50%;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 64px;
  transform: rotate(-30deg);
  &:nth-child(even) ${StyledIcon}:nth-child(2) {
    animation: ${ReverseAnimation1} 150s linear infinite;
    animation-delay: -40s;
  }
  &:nth-child(even) ${StyledIcon} {
    animation: ${ReverseAnimation2} 700s linear infinite;
    animation-delay: -80s;
  }
`

const IconsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  
  @media only screen and (max-width: ${devices.mobile}px) {
    display: none;
  }
`