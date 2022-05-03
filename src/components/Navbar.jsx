import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0em 3.3em;
`

const Logo = styled.div`
    color: #65FFDB;
`

const Image = styled.img``

const NavItem = styled.li`
    letter-spacing: 1px;
    opacity: 0.8;
`

const A = styled.a`
    color: white;
    text-decoration: none; 
`

const Nav = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    height: 7vh;
    gap: 2em;
    color: white;
`

const Resume = styled.button`
    border: 1px solid #65FFDB;
    padding: 0.8em 1em;
    color: #65FFDB;
    background: none;
    border-radius: 5px;
    &:hover {
        background-color: #65FFCF;
    }
`

export const Navbar = () => {
  return (
    <Container>
        <Logo>
            Logo
        </Logo>
        <Nav>
            <NavItem><A href='#AboutMe'>About</A></NavItem>
            <NavItem><A href='#Experience'>Experience</A></NavItem>
            <NavItem><A href='#Work'>Work</A></NavItem>
            <NavItem><A href='#Contact'>Contact</A></NavItem>
            <Resume>Resume</Resume>
        </Nav>
    </Container>
  )
}
