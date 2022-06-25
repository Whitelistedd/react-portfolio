import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGit } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

export const Icon = ({className} : {className?: string}) => {
  return (
    <IconWrap className={className} >
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaNode />
        <FaGit />
    </IconWrap>
  )
}

const animation2 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
`

const animation1 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`

const IconWrap = styled.div`
      animation: ${animation1} 150s linear infinite;
    width: 100%;
    height: 100%;
    animation-delay: -80s;
    &:nth-child(2) {
        animation: ${animation2} 150s linear infinite;
    animation-delay: -40s;
    }
    
    svg {
        color: #060e1b;
        width: 120px;
        height: 120px;
        transition: 150ms ease;
        &:hover {
            color: #26DADB;
            cursor: pointer;
            filter: drop-shadow( 3px 3px 20px #26DADB);
        }
        margin-right: 0.5em;
    }
`