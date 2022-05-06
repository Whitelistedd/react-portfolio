import React from 'react'
import styled from 'styled-components'
import {mobile} from "../MediaQueries"

const Container = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 50px;
  z-index: 10;
  color: white;
  letter-spacing: 2px;
  &::after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: white;
  }
  ${mobile({display: "none"})}
`

const Anchor = styled.a`
  color: white;
  text-decoration: none;
  transition: 400ms ease;
  &:hover {
    color: #65FFDB;
    transform: translate(0, -10px);
    transition: 400ms ease;
    cursor: pointer;
  }
`

const Email = styled.p`
writing-mode: vertical-rl;
`

export const RightSide = () => {
  return (
    <Container>
      <Anchor href="mailto:Volxen@gmail.com">
        <Email>ismonovmukh@gmail.com</Email>
      </Anchor>
    </Container>
  )
}
