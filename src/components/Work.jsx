import React from 'react'
import styled from 'styled-components'


const Container = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5em;
    z-index: 1;
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
        width: calc(40vw - 5em);
        height: 1px;
        background-color: #65FFDB;
    }
    &::before {
        content: "";
        display: inline-block;
        position: relative;
        top: -5px;
        margin-right: 20px;
        width: calc(40vw - 5em);
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
    transform: translateY(140%);
    transition: 600ms ease;
    height: 45vh;
    width: 100%;
    gap: 1em;
    background: 
    linear-gradient(
        hsl(0 0% 0% / 0) 20%,
        hsl(20 0% 0% / 0.5) 65%,
        hsl(0 0% 0% / 0.7)
      );
      color: white;
    ;
`

const CardTitle = styled.h4`
    margin: 0px 0px 15px 0px;
    font-size: 25px;
`

const Projects = styled.div`
    display: flex;
    gap: 5em;
    width: 80vw;
    flex-direction: column;
    ${CardOne}, ${CardTwo}, ${CardThree}{
        border-radius: 15px;
        display: flex;
        background-color: #032E74;
        min-width: 30vw;
        align-items: flex-end;
        height: 60vh;
        overflow: hidden;
        &:hover {
            ${CardContent} {
                transition: 600ms ease;
                transform: translateY(0%);
            }
            ${CardTitle} {
                transition: 300ms ease;
                transition-delay: 400ms;
                color: #65FFDB;
            }
        }
    }
`

const CardDesc = styled.p`
    max-width: 100%;
    letter-spacing: 0.5px;
    line-height: 30px;
    margin: 0;
`

const HL = styled.span`
    color: #65FFDB;
`

const Button = styled.button`
    letter-spacing: 1px;
    font-family: Space Mono;
    width: 25%;
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

export const Work = () => {
  return (
    <Container id='Work'
    data-aos="fade-up"
    data-aos-offset="400"
    data-aos-delay="0"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    >
        <Info>
            <Title>My Main Projects</Title>
        </Info>
        <Projects>
            <CardOne>
                <CardContent>
                    <CardTitle>Base Ecommerce</CardTitle>
                    <CardDesc>
                        In this project I have made a MERN React website for a company called Base, I added a payment system, cart system and filtering.
                    </CardDesc>
                    <CardDesc>
                        For this Project I used <HL>ReactJS</HL> , <HL>Redux</HL>, <HL>Styled-Components</HL> and
                        a backend REST API made with <HL>Node</HL>, <HL>ExpressJS</HL> and <HL>MongoDB</HL>.
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
                    </CardDesc>
                    <CardDesc>
                        For this Project We used <HL>ReactJS</HL>, <HL>React-router</HL>, <HL>MaterialUI</HL>,
                        <HL> Styled-Components</HL>, <HL>Redux</HL> and <HL>Git</HL> to manage and organize between the team.
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
                    </CardDesc>
                    <CardDesc>
                        For this Project I used <HL>ReactJS</HL>, <HL>React-Router</HL> and <HL>CSS</HL> with a API to fetch the animals that are available.
                    </CardDesc>
                    <Button>View Project</Button>
                </CardContent>
            </CardThree>
        </Projects>
       {/*  <OtherContainer>
            <SmallProjectOne>

            </SmallProjectOne>
        </OtherContainer> */}
    </Container>
  )
}
