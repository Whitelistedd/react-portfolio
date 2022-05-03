import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-content: center;
`

const StyledP = styled.p`
    font-size: 22px;
    color: #65FFDB;
`

const Name = styled.h1`
    font-size: 80px;
    margin: 0;
    color: white;
`

const Job = styled.h2`
    font-size: 60px;
    word-spacing: -25px;
    margin: 0;
    color: white;
    opacity: 0.7
`

const Description = styled.p`
    max-width: 630px;
    font-size: 16px;
    word-spacing: -3px;
    color: white;
    opacity: 0.7
`

const Button = styled.button`
    max-width: 25%;
    padding: 1.2em 1em;
    font-family: "Space Mono";
    background: none;
    color: #65FFDB;
    border-radius: 5px;
    border: 1px solid #65FFDB;
    &:hover {
        background-color: #133040;
        cursor: pointer;
    }
`

export const Introduction = () => {
  return (
    <Container>
        <Wrap>
            <StyledP>Hi, my name is</StyledP>
            <Name>Volxen.</Name>
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
