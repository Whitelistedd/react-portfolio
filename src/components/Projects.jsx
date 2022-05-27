import React from 'react'
import styled from 'styled-components'
import Project1 from "../images/Base.svg"
import Project2 from "../images/Reddit.svg"
import Project3 from "../images/VolxenTracker.svg"
import Aos from 'aos';
import {devices} from "../MediaQueries"


const Title = styled.h3`
    opacity: 0.9;
    font-size: 2.3rem;
    color: #65FFDB;
`

const Info = styled.div``

const CardOne = styled.div`
    background: url(${Project1}) no-repeat center center fixed;
    background-repeat: no-repeat;
    background-size: cover;
`

const CardTwo = styled.div`
background: url(${Project2}) no-repeat center center fixed;
background-repeat: no-repeat;
background-size: cover;

`

const CardThree = styled.div`
background: url(${Project3}) no-repeat fixed;
background-repeat: no-repeat;
background-size: cover;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em 1em;
    z-index: 1;
    transition: 600ms ease;
    height: 45vh;
    width: 100%;
    gap: 1em;
    background: 
    linear-gradient(
        hsl(0 0% 0% / 0) 10%,
        hsl(20 0% 0% / 0.7) 45%,
        hsl(0 0% 0% / 1) 100%
      );
      color: white;
    ;
`

const CardTitle = styled.h4`
    margin: 0px 0px 15px 0px;
    font-size: 25px;
`

const ProjectsWrap = styled.div`
    display: flex;
    gap: 5em;
    width: 60vw;
    flex-direction: column;
    ${CardOne}, ${CardTwo}, ${CardThree}{
        border-radius: 15px;
        display: flex;
        min-width: 30vw;
        align-items: flex-end;
        height: 60vh;
        overflow: hidden;
        &:hover {
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

const Container = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5em;
    z-index: 1;
    @media only screen and (max-width: ${devices.mobile}px) {
        margin-top: 200px;
        ${Title} {
            font-size: 7vw;
        }
        ${ProjectsWrap} {
            width: 90vw;
        }
        ${CardContent} {
            transform: translateY(115%);
        }
        ${CardOne}, ${CardTwo}, ${CardThree} {
            &:hover ${CardContent} {
                transform: translateY(0%);
            }
        }
    }
`

/* const A = styled.a`
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
` */

export const Projects = () => {

    Aos.init();

    return (
        <Container id='Projects'
        data-aos="fade-up"
        data-aos-offset="400"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        >
            <Info>
                <Title>Мои основные проекты</Title>
            </Info>
            <ProjectsWrap>
                <CardOne
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                >
                    <CardContent>
                        <CardTitle>Base Ecommerce</CardTitle>
                        <CardDesc>
                            В этом проекте я сделал сайт MERN React для компании Base, добавил платежную систему, систему корзины и фильтрацию.
                        </CardDesc>
                        <CardDesc>
                            Для этого проекта я использовал <HL>ReactJS</HL> , <HL>Redux</HL>, <HL>Styled-Components</HL> и бэкэнд 
                            REST API, созданный с помощью <HL>Node</HL>, <HL>ExpressJS</HL> и <HL>MongoDB</HL>.
                            </CardDesc>
                        <Button>Посмотреть проект</Button>
                    </CardContent>
                </CardOne>
                <CardTwo
                data-aos="fade-up"
                data-aos-offset="410"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                >
                    <CardContent>
                        <CardTitle>Reddit Clone</CardTitle>
                        <CardDesc>
                            В этом проекте я пошел и создал группу друзей, чтобы сделать продвинутый клон Reddit,
                            чтобы не только домашняя страница, но и гораздо больше возможностей, чем это.
                        </CardDesc>
                        <CardDesc>
                            Для этого проекта мы использовали <HL>ReactJS</HL>, <HL>React-router</HL>, <HL>MaterialUI</HL>,
                            <HL> Styled-Components</HL>, <HL>Redux</HL> и <HL>Git</HL> для управления и организации работы команды.
                        </CardDesc>
                        <Button>Посмотреть проект</Button>
                    </CardContent>
                </CardTwo>
                <CardThree
                data-aos="fade-up"
                data-aos-offset="420"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                >
                    <CardContent>
                        <CardTitle>Трекер посылок</CardTitle>
                        <CardDesc>
                        </CardDesc>
                        <CardDesc>
                        В этом проекте я создал сайт, который использует NextJS, Typescript и 
                        API для отслеживания посылок. Я сделал этот сайт, потому что использовал 
                        множество сайтов для отслеживания посылок, и некоторые из них не работали должным образом, 
                        поэтому я сделал свой собственный, 
                        который использует современные технологии для обновления информации.
                        </CardDesc>
                        <CardDesc>
                        Для этого проекта я использовал NextJS, Typescript, Styled-Components, MaterialUI, SSR 
                        и небольшой бэкенд API, чтобы я мог скрыть свой ключ API.
                        </CardDesc>
                        <Button>Посмотреть проект</Button>
                    </CardContent>
                </CardThree>
            </ProjectsWrap>
        {/*  <OtherContainer>
                <SmallProjectOne>

                </SmallProjectOne>
            </OtherContainer> */}
        </Container>
    )
}
