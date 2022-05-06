import React from 'react'
import styled from 'styled-components'
import { mobile } from '../MediaQueries'
import Aos from 'aos';

const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 80vh;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    gap: 2.5vh;
    justify-content: center;
    align-items: flex-start;
    ${mobile({minWidth: "70vw"})}
`

const StyledP = styled.p`
    font-size: calc(0.1vw + 1em);
    color: #65FFDB;
`

const Name = styled.h1`
    font-size: calc(3vw + 2em);
    color: white;
`

const Job = styled.h2`
    font-size: calc(2.5vw + 1em);
    word-spacing: -1vw;
    margin: 0;
    color: white;
    opacity: 0.7
`

const Description = styled.p`
    max-width: calc(40vw + 40%);
    font-size: calc(0.2vw + 1em);
    word-spacing: -3px;
    color: white;
    opacity: 0.7
`

const Button = styled.button`
    position: relative;
    padding: 1.25rem 1.75rem;
    font-family: "Space Mono";
    background: none;
    color: #65FFDB;
    border-radius: 5px;
    border: 1px solid #65FFDB;
    transition: 600ms ease;
    &:hover {
        transition: 600ms ease;
        background-color: #133040;
        cursor: pointer;
    }
`

export const Introduction = () => {

    Aos.init();

    return (
    <Container id="Introduction"
    data-aos="fade-up"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
    >
        <Wrap>
            <StyledP>Hi, my name is</StyledP>
            <Name>Muhammad.</Name>
            <Job>I build things for the web.</Job>
            <Description>
                I’m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently,
                I’m focused on building accessible, human-centered products at Upstatement.
            </Description>
            <Button>Check out my projects!</Button>
        </Wrap>
    </Container>
    )
}
