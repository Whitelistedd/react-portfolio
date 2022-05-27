import { Menu } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem,ListItemText } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../MediaQueries'
import Logo from "../images/iconTab.svg"


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0em 3.3em;
`

const Image = styled.img`
    width: 35px;
`

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

/* const Resume = styled.button`
    border: 1px solid #65FFDB;
    padding: 0.8em 1.5em;
    color: #65FFDB;
    background: none;
    border-radius: 5px;
    transition: 600ms ease;
    &:hover {
        transition: 600ms ease;
        background-color: #133040;
        cursor: pointer;
    }
` */

const MenuWrap = styled.div`
    display: none;
    ${mobile({display: "block"})}
`

const NavWrap = styled.div`
    display: flex;
    align-items: center;
    height: 7vh;
    gap: 2em;
    color: white;
    ${mobile({display: "none"})}
`

export const Navbar = () => {
    const [MenuStatus,setMenuStatus] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setMenuStatus(open);
    };

    return (
        <Container>

            <Image src={Logo} />

            <Nav>
                <MenuWrap>
                    <Menu onClick={toggleDrawer(true)} />
                    <Drawer
                    sx={{"& .MuiPaper-root": {justifyContent: "center",alignItems: "center" ,backgroundColor: "#0E192B", minWidth: "250px",color: "#65FFDB"}}}
                    anchor={"right"}
                    open={MenuStatus}
                    onClose={toggleDrawer(false)}
                    >
                        <List >
                            <ListItem button>
                            <ListItemText sx={{ xs:{textAlign: "center"}}} primary={"Home"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List >
                            <ListItem button>
                            <ListItemText sx={{ xs:{textAlign: "center"}}} primary={"About"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List >
                            <ListItem button>
                            <ListItemText sx={{ xs:{textAlign: "center"}}} primary={"Work"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List >
                            <ListItem button>
                            <ListItemText sx={{ xs:{textAlign: "center"}}} primary={"Contact"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List >
                            <ListItem sx={{
                            border: "1px solid #65FFDB",
                            padding: "0.8em 1.5em",
                            color: "#65FFDB",
                            background: "none",
                            borderRadius: "5px"}} button>
                            <ListItemText sx={{ xs:{textAlign: "center"}}} primary={"Resume"} />
                            </ListItem>
                        </List>
                    </Drawer>
                </MenuWrap>
                <NavWrap>
                    <NavItem><A href='#AboutMe'>Обо мне</A></NavItem>
                    <NavItem><A href='#Projects'>Работа</A></NavItem>
                    <NavItem><A href='#Contact'>Контакт</A></NavItem>
                </NavWrap>
            </Nav>
        </Container>
    )
}
