import { Menu } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

import Logo from '../images/iconTab.svg';
import { devices } from '../MediaQueries';

export const Navbar : React.FC = () => {
  const [MenuStatus, setMenuStatus] = useState(false);

  const toggleDrawer = (open : boolean) => {
    setMenuStatus(open);
  };

  return (
    <Container>
      <Image src={Logo} />

      <Nav>
        <MenuWrap>
          <Menu onClick={() => toggleDrawer(true)} />
          <Drawer
            sx={{
              "& .MuiPaper-root": {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0E192B",
                minWidth: "250px",
                color: "#65FFDB",
              },
            }}
            anchor={"right"}
            open={MenuStatus}
            onClose={() => toggleDrawer(false)}
          >
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={"Home"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={"About"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={"Work"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={"Contact"}
                />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </MenuWrap>
        <NavWrap>
          <NavItem>
            <A href="#AboutMe">Обо мне</A>
          </NavItem>
          <NavItem>
            <A href="#Projects">Работа</A>
          </NavItem>
          <NavItem>
            <A href="#Contact">Контакт</A>
          </NavItem>
        </NavWrap>
      </Nav>
    </Container>
  );
};

const Image = styled.img`
  width: 35px;
`;

const NavItem = styled.li`
  letter-spacing: 1px;
  opacity: 0.8;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  transition: 300ms;
  &:hover {
    color: #65ffdb;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  height: 7vh;
  gap: 2em;
  color: white;
`;

const MenuWrap = styled.div`
  display: none;
`;

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  height: 7vh;
  gap: 2em;
  color: white;

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 3.3em;
  * {
    z-index: 1;
  }
  @media only screen and (max-width: ${devices.mobile}px) {
    ${NavWrap} {
      display: none;
    }
    ${MenuWrap} {
      display: block;
    }
  }
`;
