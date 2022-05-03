import React from 'react'
import styled from 'styled-components'
import codingIMG from "../images/Saly-10.svg"

const Container = styled.section`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4em;
    padding: 8em 0em;
`

const Info = styled.div`
    display:flex;
    flex-direction: column;
    color: white;
`

const Title = styled.h3`
    opacity: 0.9;
    font-size: 30px;
    color: #65FFDB;
    &::after {
        content: "";
        display: inline-block;
        position: relative;
        top: -5px;
        margin-left: 20px;
        width: 340px;
        height: 1px;
        background-color: #65FFDB;
    }
`

const StyledP = styled.p`
    font-family: sans-serif;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 2px;
    opacity: 0.7;
    width: 500px;
    margin: 1em 0em;
`

const Image = styled.img`
    max-width: 22vw;
    border-radius: 10px;
    border: 2px solid #65FFDB;
    padding: 1em;
    transition: 300ms ease;
    &:hover {
        transition: 300ms ease;
        box-shadow: 9px 9px 80px black;
    }
`

export const AboutMe = () => {
  return (
    <Container id='AboutMe'>
        <Info>
                <Title>About Me</Title>
            <StyledP>
            Hello! My name is Volxen and I enjoy creating things that live on the internet. 
            </StyledP>
            <StyledP>
            I fell in love with web development and coding in 2020 and since i have been learning 24/7 to fully master HTML / CSS/ JS and most importantly for me is React
            My main focus these days is building nice and clean websites with ReactJS and TS.
            </StyledP>
            <StyledP>
            I am looking forward to work with any company and push the company forward with new technologies and new languages
            </StyledP>
        </Info>
        <Image src={codingIMG} />
    </Container>
  )
}
