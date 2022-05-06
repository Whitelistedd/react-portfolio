import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../MediaQueries"

const Container = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
    position: fixed;
    bottom: 0px;
    left: 50px;
    right: auto;
    z-index: 10;
    color: white;
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
  }
`

export const LeftSide = () => {
  return (
    <Container>
        <Anchor target="_blank" href="https://github.com/Whitelistedd"><GitHub /></Anchor>
        <Anchor target="_blank" href="https://linkedin.com/"><LinkedIn /></Anchor>
    </Container>
  )
}
