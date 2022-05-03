import React from 'react'
import styled from 'styled-components'
import ProjectOneIMG from "../images/coding.png"


const Container = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5em;
`

const Info = styled.div``

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
        width: 300px;
        height: 1px;
        background-color: #65FFDB;
    }
    &::before {
        content: "";
        display: inline-block;
        position: relative;
        top: -5px;
        margin-right: 20px;
        width: 300px;
        height: 1px;
        background-color: #65FFDB;
    }
`

const CardOne = styled.div`
`

const CardTwo = styled.div`
`

const CardThree = styled.div`
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em 1em;
    transform: translateY(350px);
    transition: 400ms ease;
    margin-top: 90px;
    background: 
    linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(20 0% 0% / 0.5) 65%,
        hsl(0 0% 0% / 0.9)
      );
      color: white;
    ;
`

const Projects = styled.div`
    display: flex;
    gap: 5em;
    flex-direction: column;
    ${CardOne}, ${CardTwo}, ${CardThree}{
        border-radius: 15px;
        display: flex;
        background-color: red;
        max-width: 90ch;
        height: 50ch;
        overflow: hidden;
        &:hover {
            ${CardContent} {
                transition: 400ms ease;
                transform: translateY(0px);
            }
        }
    }
`

const CardTitle = styled.h4`
    margin: 0;
`

const CardDesc = styled.p`
    max-width: 100%;
    line-height: 30px;
`

const HL = styled.span`
    color: #65FFDB;
`

const Button = styled.button`
    width: 50%;
    padding: 0.8em 0em;
    background: none;
    color: #65FFDB;
    border-radius: 5px;
    border: 1px solid #65FFDB;
    transition: 300ms ease;
    &:hover {
        transition: 300ms ease;
        background-color: #133040;
        cursor: pointer;
    }
`

export const Experience = () => {
  return (
    <Container id='AboutMe'>
        <Info>
            <Title>My Main Projects</Title>
        </Info>
        <Projects>
            <CardOne>
                <CardContent>
                    <CardTitle>Base Ecommerce</CardTitle>
                    <CardDesc>
                        In this project I have made a MERN React website for a company called Base.
                        <br /> 
                        For this Project I used <HL>ReactJS</HL> , <HL>Redux</HL>, <HL>MaterialUI</HL>, <HL>Styled-Components</HL> and
                        a backend REST API made with <HL>Node</HL>, <HL>ExpressJS</HL>, <HL>MongoDB</HL>.
                        </CardDesc>
                    <Button>View Project</Button>
                </CardContent>
            </CardOne>
            <CardTwo>
                <CardContent>
                    <CardTitle>Reddit Clone</CardTitle>
                    <CardDesc>
                        In this project have went and created a group of friends to make a advanced reddit clone so
                        not just the homepage but way more features then that.
                        <br />
                        For this Project We used <HL>ReactJS</HL>, <HL>React-router</HL>, <HL>MaterialUI</HL>,
                        <HL>Styled-Components</HL>, <HL>Redux</HL>, <HL>Git</HL> to organize.
                    </CardDesc>
                    <Button>View Project</Button>
                </CardContent>
            </CardTwo>
            <CardThree>
                <CardContent>
                    <CardTitle>Adopt A pet</CardTitle>
                    <CardDesc>
                        In this project I used React.JS and a REST API, I fetched data 
                        from a pet api and displayed them on the screen, it will show the name of the name of the pet and the description
                        of the pet and other information.
                        <br />
                        For this Project I used <HL>ReactJS</HL>, <HL>React-Router</HL>, <HL>CSS</HL>.
                    </CardDesc>
                    <Button>View Project</Button>
                </CardContent>
            </CardThree>
        </Projects>
    </Container>
  )
}
