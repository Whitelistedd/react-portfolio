import React from 'react'
import styled from 'styled-components'
import Aos from 'aos';

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Wrap = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    gap: 4vh;
`

const Name = styled.h3`
    color: #65FFDB;
`

const Title = styled.h1`
    font-size: calc(2.5em - 0.2rem);
`

const Description = styled.p`
    font-family: sans-serif;
    font-weight: 600;
    line-height: 2em;
    min-width: 30vw;
    opacity: 0.8;
`

const Button = styled.button`
    padding: 20px 25px;
    background: none;
    border: 1px solid #65FFDB;
    border-radius: 5px;
    transition: 600ms ease;
    &:hover {
        transition: 600ms ease;
        background-color: #133040;
        cursor: pointer;
    }
`

const Anchor = styled.a`
    font-size: 16px;
    color: white;
    text-decoration: none;
`

export const Contact = () => {
  
    Aos.init();
  
    return (
    <Container id='Contact'
    data-aos="fade-up"
    data-aos-offset="700"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    >
        <Wrap>
            <Name>Contact</Name>
            <Title>Get In Touch</Title>
            <Description>
                I’m currently looking for any new opportunities, 
                my inbox is always open. Whether you have a question or just want to say hi, 
                I’ll try my best to get back to you!
            </Description>
            <Button><Anchor href="mailto:ismonovmukh@gmail.com">Contact Me</Anchor></Button>
        </Wrap>
    </Container>
  )
}
